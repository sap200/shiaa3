package keeper

import (
	"errors"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	channeltypes "github.com/cosmos/cosmos-sdk/x/ibc/core/04-channel/types"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
	"github.com/sap200/shiaa3/x/assets/types"
	"github.com/tendermint/tendermint/crypto"
	"strconv"
)

// TransmitIbcAssetPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIbcAssetPacket(
	ctx sdk.Context,
	packetData types.IbcAssetPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.channelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.channelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.scopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	// custom logic
	// check if the Asset Serial is valid
	// Get the asset
	assetID := GetIDFromSerial(packetData.AssetSerial)
	var asset types.Asset
	if k.HasAsset(ctx, assetID) {
		asset = k.GetAsset(ctx, assetID)
	} else {
		return types.ErrNonExistingAsset
	}

	// If the asset exists check the owner of the asset
	if asset.Owner != packetData.Creator {
		return types.ErrUnauthorizedTransfer
	}

	// check that receiver and owner are not the same
	if asset.Owner == packetData.Receiver {
		return types.ErrOwnerIsReceiver
	}

	// Check if receiver is a valid bech32 address
	_, err := sdk.AccAddressFromBech32(packetData.Receiver)
	if err != nil {
		return types.ErrInvalidReceiver
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.channelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvIbcAssetPacket processes packet reception
func (k Keeper) OnRecvIbcAssetPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcAssetPacketData) (packetAck types.IbcAssetPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic
	// When packet is received basic checks are done and
	// check 1: No duplicate Assets
	assetID := GetIDFromSerial(data.AssetSerial)
	if k.HasAsset(ctx, assetID) {
		return packetAck, types.ErrDuplicateAsset
	}

	// check if receiver is valid and in the keyring
	rec, err := sdk.AccAddressFromBech32(data.Receiver)
	if err != nil {
		return packetAck, types.ErrInvalidReceiver
	}

	// check if the address in keyring
	exists := k.AccountKeeper.GetAccount(ctx, rec)
	if exists == nil {
		return packetAck, types.ErrNonExistingAccount
	}

	// new Asset is created and is stored in the store
	assetType := FindAssetType(data.AssetSerial)
	if assetType == -1 {
		return packetAck, types.ErrInvalidAsset
	}

	k.AppendAsset(
		ctx,
		packet.SourcePort+"-"+packet.SourceChannel+"-"+data.Creator,
		data.AssetSerial,
		types.NAME_OF[assetType],
		assetType,
		int32(types.PRICE_OF[assetType]),
		data.Receiver,
	)

	packetAck.AssetId = strconv.FormatUint(assetID, 10)
	return packetAck, nil
}

// OnAcknowledgementIbcAssetPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIbcAssetPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcAssetPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.IbcAssetPacketAck
		err := packetAck.Unmarshal(dispatchedAck.Result)
		if err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic
		// On Acknowledgement destroy the current Asset
		assetID := GetIDFromSerial(data.AssetSerial)
		price := k.GetAsset(ctx, assetID).Tokens
		k.RemoveAsset(ctx, uint64(assetID))

		// credit a 0.2 of token rarely as a gift in user's account
		ra := int(float64(price) * 0.2)

		// Send the amount from module account to the user account
		moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
		payment, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(ra), 10) + "token")

		rec, err := sdk.AccAddressFromBech32(data.Creator)
		if err != nil {
			return types.ErrInvalidReceiver
		}

		// since you sent an asset you get 20% of its value as a reward
		// Add coins to the account before sending coins
		// This ensures that a asset can be circulated infinite amount of times without running out of reward
		err = k.CoinKeeper.AddCoins(ctx, moduleAcct, payment)
		if err != nil {
			return err
		}

		// payment at last if everything is successful
		if err := k.CoinKeeper.SendCoins(ctx, moduleAcct, rec, payment); err != nil {
			return err
		}

		// sentAsset is updated and it reflects incoming assets
		k.AppendSentAsset(
			ctx,
			data.Creator,
			data.AssetSerial,
			data.Receiver,
			packet.DestinationPort+"-"+packet.DestinationChannel,
		)

		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutIbcAssetPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIbcAssetPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcAssetPacketData) error {

	// TODO: packet timeout logic
	k.AppendTimedOutAsset(
		ctx,
		data.Creator,
		data.AssetSerial,
		data.Receiver,
		packet.DestinationPort+"-"+packet.DestinationChannel,
	)

	return nil
}
