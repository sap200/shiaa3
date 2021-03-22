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

func (k Keeper) Pool4TicketAll(c context.Context, req *types.QueryAllPool4TicketRequest) (*types.QueryAllPool4TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool4Tickets []*types.Pool4Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	Pool4TicketStore := prefix.NewStore(store, types.KeyPrefix(types.Pool4TicketKey))

	pageRes, err := query.Paginate(Pool4TicketStore, req.Pagination, func(key []byte, value []byte) error {
		var Pool4Ticket types.Pool4Ticket
		if err := k.cdc.UnmarshalBinaryBare(value, &Pool4Ticket); err != nil {
			return err
		}

		Pool4Tickets = append(Pool4Tickets, &Pool4Ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPool4TicketResponse{Pool4Ticket: Pool4Tickets, Pagination: pageRes}, nil
}

func (k Keeper) Pool4Ticket(c context.Context, req *types.QueryGetPool4TicketRequest) (*types.QueryGetPool4TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool4Ticket types.Pool4Ticket
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPool4Ticket(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool4TicketIDBytes(req.Id)), &Pool4Ticket)

	return &types.QueryGetPool4TicketResponse{Pool4Ticket: &Pool4Ticket}, nil
}
