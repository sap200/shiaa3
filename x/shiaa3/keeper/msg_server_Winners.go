package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreateWinners(goCtx context.Context, msg *types.MsgCreateWinners) (*types.MsgCreateWinnersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendWinners(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.PoolNo,
		msg.Winnings,
	)

	return &types.MsgCreateWinnersResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateWinners(goCtx context.Context, msg *types.MsgUpdateWinners) (*types.MsgUpdateWinnersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Winners = types.Winners{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		PoolNo:        msg.PoolNo,
		Winnings:      msg.Winnings,
	}

	// Checks that the element exists
	if !k.HasWinners(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetWinnersOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetWinners(ctx, Winners)

	return &types.MsgUpdateWinnersResponse{}, nil
}

func (k msgServer) DeleteWinners(goCtx context.Context, msg *types.MsgDeleteWinners) (*types.MsgDeleteWinnersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasWinners(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetWinnersOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveWinners(ctx, msg.Id)

	return &types.MsgDeleteWinnersResponse{}, nil
}
