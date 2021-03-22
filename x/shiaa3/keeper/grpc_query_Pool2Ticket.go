package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Pool2TicketAll(c context.Context, req *types.QueryAllPool2TicketRequest) (*types.QueryAllPool2TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool2Tickets []*types.Pool2Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	Pool2TicketStore := prefix.NewStore(store, types.KeyPrefix(types.Pool2TicketKey))

	pageRes, err := query.Paginate(Pool2TicketStore, req.Pagination, func(key []byte, value []byte) error {
		var Pool2Ticket types.Pool2Ticket
		if err := k.cdc.UnmarshalBinaryBare(value, &Pool2Ticket); err != nil {
			return err
		}

		Pool2Tickets = append(Pool2Tickets, &Pool2Ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPool2TicketResponse{Pool2Ticket: Pool2Tickets, Pagination: pageRes}, nil
}

func (k Keeper) Pool2Ticket(c context.Context, req *types.QueryGetPool2TicketRequest) (*types.QueryGetPool2TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool2Ticket types.Pool2Ticket
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPool2Ticket(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool2TicketIDBytes(req.Id)), &Pool2Ticket)

	return &types.QueryGetPool2TicketResponse{Pool2Ticket: &Pool2Ticket}, nil
}
