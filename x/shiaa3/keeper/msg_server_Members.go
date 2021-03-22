package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreateMembers(goCtx context.Context, msg *types.MsgCreateMembers) (*types.MsgCreateMembersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendMembers(
		ctx,
		msg.Creator,
		msg.Address,
	)

	return &types.MsgCreateMembersResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMembers(goCtx context.Context, msg *types.MsgUpdateMembers) (*types.MsgUpdateMembersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Members = types.Members{
		Creator: msg.Creator,
		Id:      msg.Id,
		Address: msg.Address,
	}

	// Checks that the element exists
	if !k.HasMembers(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetMembersOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMembers(ctx, Members)

	return &types.MsgUpdateMembersResponse{}, nil
}

func (k msgServer) DeleteMembers(goCtx context.Context, msg *types.MsgDeleteMembers) (*types.MsgDeleteMembersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasMembers(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetMembersOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMembers(ctx, msg.Id)

	return &types.MsgDeleteMembersResponse{}, nil
}
