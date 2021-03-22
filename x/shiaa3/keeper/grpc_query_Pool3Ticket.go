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

func (k Keeper) Pool3TicketAll(c context.Context, req *types.QueryAllPool3TicketRequest) (*types.QueryAllPool3TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool3Tickets []*types.Pool3Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	Pool3TicketStore := prefix.NewStore(store, types.KeyPrefix(types.Pool3TicketKey))

	pageRes, err := query.Paginate(Pool3TicketStore, req.Pagination, func(key []byte, value []byte) error {
		var Pool3Ticket types.Pool3Ticket
		if err := k.cdc.UnmarshalBinaryBare(value, &Pool3Ticket); err != nil {
			return err
		}

		Pool3Tickets = append(Pool3Tickets, &Pool3Ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPool3TicketResponse{Pool3Ticket: Pool3Tickets, Pagination: pageRes}, nil
}

func (k Keeper) Pool3Ticket(c context.Context, req *types.QueryGetPool3TicketRequest) (*types.QueryGetPool3TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool3Ticket types.Pool3Ticket
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPool3Ticket(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool3TicketIDBytes(req.Id)), &Pool3Ticket)

	return &types.QueryGetPool3TicketResponse{Pool3Ticket: &Pool3Ticket}, nil
}
