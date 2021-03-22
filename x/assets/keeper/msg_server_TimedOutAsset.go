package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/assets/types"
)

func (k msgServer) CreateTimedOutAsset(goCtx context.Context, msg *types.MsgCreateTimedOutAsset) (*types.MsgCreateTimedOutAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendTimedOutAsset(
		ctx,
		msg.Creator,
		msg.AssetSerial,
		msg.Receiver,
		msg.TargetChain,
	)

	return &types.MsgCreateTimedOutAssetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTimedOutAsset(goCtx context.Context, msg *types.MsgUpdateTimedOutAsset) (*types.MsgUpdateTimedOutAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var TimedOutAsset = types.TimedOutAsset{
		Creator:     msg.Creator,
		Id:          msg.Id,
		AssetSerial: msg.AssetSerial,
		Receiver:    msg.Receiver,
		TargetChain: msg.TargetChain,
	}

	// Checks that the element exists
	if !k.HasTimedOutAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTimedOutAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTimedOutAsset(ctx, TimedOutAsset)

	return &types.MsgUpdateTimedOutAssetResponse{}, nil
}

func (k msgServer) DeleteTimedOutAsset(goCtx context.Context, msg *types.MsgDeleteTimedOutAsset) (*types.MsgDeleteTimedOutAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTimedOutAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTimedOutAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTimedOutAsset(ctx, msg.Id)

	return &types.MsgDeleteTimedOutAssetResponse{}, nil
}
