package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreatePool4Ticket(goCtx context.Context, msg *types.MsgCreatePool4Ticket) (*types.MsgCreatePool4TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPool4Ticket(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.LambdaValue,
	)

	return &types.MsgCreatePool4TicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePool4Ticket(goCtx context.Context, msg *types.MsgUpdatePool4Ticket) (*types.MsgUpdatePool4TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pool4Ticket = types.Pool4Ticket{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		LambdaValue:   msg.LambdaValue,
	}

	// Checks that the element exists
	if !k.HasPool4Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPool4TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPool4Ticket(ctx, Pool4Ticket)

	return &types.MsgUpdatePool4TicketResponse{}, nil
}

func (k msgServer) DeletePool4Ticket(goCtx context.Context, msg *types.MsgDeletePool4Ticket) (*types.MsgDeletePool4TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPool4Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPool4TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePool4Ticket(ctx, msg.Id)

	return &types.MsgDeletePool4TicketResponse{}, nil
}
