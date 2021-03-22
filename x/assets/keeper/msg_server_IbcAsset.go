package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/cosmos-sdk/x/ibc/core/02-client/types"
	"github.com/sap200/shiaa3/x/assets/types"
)

func (k msgServer) SendIbcAsset(goCtx context.Context, msg *types.MsgSendIbcAsset) (*types.MsgSendIbcAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcAssetPacketData

	packet.AssetSerial = msg.AssetSerial
	packet.Receiver = msg.Receiver
	packet.Creator = msg.Sender

	// Transmit the packet
	err := k.TransmitIbcAssetPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcAssetResponse{}, nil
}
