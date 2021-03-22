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

func (k Keeper) Pool1TicketAll(c context.Context, req *types.QueryAllPool1TicketRequest) (*types.QueryAllPool1TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool1Tickets []*types.Pool1Ticket
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	Pool1TicketStore := prefix.NewStore(store, types.KeyPrefix(types.Pool1TicketKey))

	pageRes, err := query.Paginate(Pool1TicketStore, req.Pagination, func(key []byte, value []byte) error {
		var Pool1Ticket types.Pool1Ticket
		if err := k.cdc.UnmarshalBinaryBare(value, &Pool1Ticket); err != nil {
			return err
		}

		Pool1Tickets = append(Pool1Tickets, &Pool1Ticket)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllPool1TicketResponse{Pool1Ticket: Pool1Tickets, Pagination: pageRes}, nil
}

func (k Keeper) Pool1Ticket(c context.Context, req *types.QueryGetPool1TicketRequest) (*types.QueryGetPool1TicketResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Pool1Ticket types.Pool1Ticket
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasPool1Ticket(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool1TicketIDBytes(req.Id)), &Pool1Ticket)

	return &types.QueryGetPool1TicketResponse{Pool1Ticket: &Pool1Ticket}, nil
}
