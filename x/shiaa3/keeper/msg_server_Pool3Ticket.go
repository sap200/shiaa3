package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func (k msgServer) CreatePool3Ticket(goCtx context.Context, msg *types.MsgCreatePool3Ticket) (*types.MsgCreatePool3TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	id := k.AppendPool3Ticket(
		ctx,
		msg.Creator,
		msg.AddressString,
		msg.LambdaValue,
	)

	return &types.MsgCreatePool3TicketResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdatePool3Ticket(goCtx context.Context, msg *types.MsgUpdatePool3Ticket) (*types.MsgUpdatePool3TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Pool3Ticket = types.Pool3Ticket{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AddressString: msg.AddressString,
		LambdaValue:   msg.LambdaValue,
	}

	// Checks that the element exists
	if !k.HasPool3Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetPool3TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetPool3Ticket(ctx, Pool3Ticket)

	return &types.MsgUpdatePool3TicketResponse{}, nil
}

func (k msgServer) DeletePool3Ticket(goCtx context.Context, msg *types.MsgDeletePool3Ticket) (*types.MsgDeletePool3TicketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasPool3Ticket(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetPool3TicketOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemovePool3Ticket(ctx, msg.Id)

	return &types.MsgDeletePool3TicketResponse{}, nil
}
