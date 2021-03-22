package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreatePool0Ticket(goCtx context.Context, msg *types.MsgCreatePool0Ticket) (*types.MsgCreatePool0TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPool0Ticket(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.LambdaValue,
	)

	return &types.MsgCreatePool0TicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePool0Ticket(goCtx context.Context, msg *types.MsgUpdatePool0Ticket) (*types.MsgUpdatePool0TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pool0Ticket = types.Pool0Ticket{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		LambdaValue:   msg.LambdaValue,
	}

	// Checks that the element exists
	if !k.HasPool0Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPool0TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPool0Ticket(ctx, Pool0Ticket)

	return &types.MsgUpdatePool0TicketResponse{}, nil
}

func (k msgServer) DeletePool0Ticket(goCtx context.Context, msg *types.MsgDeletePool0Ticket) (*types.MsgDeletePool0TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPool0Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPool0TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePool0Ticket(ctx, msg.Id)

	return &types.MsgDeletePool0TicketResponse{}, nil
}
