package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/assets/types"
)

func (k msgServer) CreateSentAsset(goCtx context.Context, msg *types.MsgCreateSentAsset) (*types.MsgCreateSentAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendSentAsset(
		ctx,
		msg.Creator,
		msg.AssetSerial,
		msg.Receiver,
		msg.TargetChain,
	)

	return &types.MsgCreateSentAssetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateSentAsset(goCtx context.Context, msg *types.MsgUpdateSentAsset) (*types.MsgUpdateSentAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var SentAsset = types.SentAsset{
		Creator:     msg.Creator,
		Id:          msg.Id,
		AssetSerial: msg.AssetSerial,
		Receiver:    msg.Receiver,
		TargetChain: msg.TargetChain,
	}

	// Checks that the element exists
	if !k.HasSentAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetSentAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetSentAsset(ctx, SentAsset)

	return &types.MsgUpdateSentAssetResponse{}, nil
}

func (k msgServer) DeleteSentAsset(goCtx context.Context, msg *types.MsgDeleteSentAsset) (*types.MsgDeleteSentAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasSentAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetSentAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSentAsset(ctx, msg.Id)

	return &types.MsgDeleteSentAssetResponse{}, nil
}
