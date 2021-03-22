package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreatePool1Ticket(goCtx context.Context, msg *types.MsgCreatePool1Ticket) (*types.MsgCreatePool1TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPool1Ticket(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.LambdaValue,
	)

	return &types.MsgCreatePool1TicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePool1Ticket(goCtx context.Context, msg *types.MsgUpdatePool1Ticket) (*types.MsgUpdatePool1TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pool1Ticket = types.Pool1Ticket{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		LambdaValue:   msg.LambdaValue,
	}

	// Checks that the element exists
	if !k.HasPool1Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPool1TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPool1Ticket(ctx, Pool1Ticket)

	return &types.MsgUpdatePool1TicketResponse{}, nil
}

func (k msgServer) DeletePool1Ticket(goCtx context.Context, msg *types.MsgDeletePool1Ticket) (*types.MsgDeletePool1TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPool1Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPool1TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePool1Ticket(ctx, msg.Id)

	return &types.MsgDeletePool1TicketResponse{}, nil
}
