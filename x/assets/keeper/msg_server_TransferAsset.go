package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/assets/types"
	"github.com/tendermint/tendermint/crypto"
	"strconv"
)

func (k msgServer) CreateTransferAsset(goCtx context.Context, msg *types.MsgCreateTransferAsset) (*types.MsgCreateTransferAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Get the asset
	assetID := GetIDFromSerial(msg.AssetSerial)
	var asset types.Asset
	if k.Keeper.HasAsset(ctx, assetID) {
		asset = k.Keeper.GetAsset(ctx, assetID)
	} else {
		return nil, types.ErrNonExistingAsset
	}

	// If the asset exists check the owner of the asset
	if asset.Owner != msg.Creator {
		return nil, types.ErrUnauthorizedTransfer
	}

	// check that receiver and owner are not the same
	if asset.Owner == msg.Receiver {
		return nil, types.ErrOwnerIsReceiver
	}

	// Check if receiver is a valid bech32 address
	_, err := sdk.AccAddressFromBech32(msg.Receiver)
	if err != nil {
		return nil, types.ErrInvalidReceiver
	}

	// If send is successful
	// credit a 0.2 of token rarely as a gift in user's account
	ra := int(float64(asset.Tokens) * 0.2)

	// Send the amount from module account to the user account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))
	payment, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(ra), 10) + "token")
	// send the tokens
	sdkCreator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, types.ErrInvalidSender
	}

	// update the owner of the asset
	updatedAsset := asset
	updatedAsset.Owner = msg.Receiver
	k.SetAsset(ctx, updatedAsset)

	// crete the transfer message and append it to ledger

	id := k.AppendTransferAsset(
		ctx,
		msg.Creator,
		msg.AssetSerial,
		msg.Receiver,
	)

	// Add coins to the account before sending coins
	// This ensures that a asset can be circulated infinite amount of times without running out of reward
	err = k.CoinKeeper.AddCoins(ctx, moduleAcct, payment)
	if err != nil {
		return nil, err
	}

	// payment at last if everything is successful
	if err := k.Keeper.CoinKeeper.SendCoins(ctx, moduleAcct, sdkCreator, payment); err != nil {
		return nil, err
	}

	return &types.MsgCreateTransferAssetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTransferAsset(goCtx context.Context, msg *types.MsgUpdateTransferAsset) (*types.MsgUpdateTransferAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var TransferAsset = types.TransferAsset{
		Creator:     msg.Creator,
		Id:          msg.Id,
		AssetSerial: msg.AssetSerial,
		Receiver:    msg.Receiver,
	}

	// Checks that the element exists
	if !k.HasTransferAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTransferAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTransferAsset(ctx, TransferAsset)

	return &types.MsgUpdateTransferAssetResponse{}, nil
}

func (k msgServer) DeleteTransferAsset(goCtx context.Context, msg *types.MsgDeleteTransferAsset) (*types.MsgDeleteTransferAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTransferAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTransferAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTransferAsset(ctx, msg.Id)

	return &types.MsgDeleteTransferAssetResponse{}, nil
}
