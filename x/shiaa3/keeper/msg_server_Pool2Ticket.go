package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreatePool2Ticket(goCtx context.Context, msg *types.MsgCreatePool2Ticket) (*types.MsgCreatePool2TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPool2Ticket(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.LambdaValue,
	)

	return &types.MsgCreatePool2TicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePool2Ticket(goCtx context.Context, msg *types.MsgUpdatePool2Ticket) (*types.MsgUpdatePool2TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pool2Ticket = types.Pool2Ticket{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		LambdaValue:   msg.LambdaValue,
	}

	// Checks that the element exists
	if !k.HasPool2Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPool2TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPool2Ticket(ctx, Pool2Ticket)

	return &types.MsgUpdatePool2TicketResponse{}, nil
}

func (k msgServer) DeletePool2Ticket(goCtx context.Context, msg *types.MsgDeletePool2Ticket) (*types.MsgDeletePool2TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPool2Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPool2TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePool2Ticket(ctx, msg.Id)

	return &types.MsgDeletePool2TicketResponse{}, nil
}
