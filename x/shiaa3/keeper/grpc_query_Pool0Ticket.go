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

func (k Keeper) Pool0TicketAll(c context.Context, req *types.QueryAllPool0TicketRequest) (*types.QueryAllPool0TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool0Tickets []*types.Pool0Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	Pool0TicketStore := prefix.NewStore(store, types.KeyPrefix(types.Pool0TicketKey))

	pageRes, err := query.Paginate(Pool0TicketStore, req.Pagination, func(key []byte, value []byte) error {
		var Pool0Ticket types.Pool0Ticket
		if err := k.cdc.UnmarshalBinaryBare(value, &Pool0Ticket); err != nil {
			return err
		}

		Pool0Tickets = append(Pool0Tickets, &Pool0Ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPool0TicketResponse{Pool0Ticket: Pool0Tickets, Pagination: pageRes}, nil
}

func (k Keeper) Pool0Ticket(c context.Context, req *types.QueryGetPool0TicketRequest) (*types.QueryGetPool0TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool0Ticket types.Pool0Ticket
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPool0Ticket(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool0TicketIDBytes(req.Id)), &Pool0Ticket)

	return &types.QueryGetPool0TicketResponse{Pool0Ticket: &Pool0Ticket}, nil
}
