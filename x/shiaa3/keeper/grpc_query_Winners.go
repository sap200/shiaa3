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

func (k Keeper) WinnersAll(c context.Context, req *types.QueryAllWinnersRequest) (*types.QueryAllWinnersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Winnerss []*types.Winners
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	WinnersStore := prefix.NewStore(store, types.KeyPrefix(types.WinnersKey))

	pageRes, err := query.Paginate(WinnersStore, req.Pagination, func(key []byte, value []byte) error {
		var Winners types.Winners
		if err := k.cdc.UnmarshalBinaryBare(value, &Winners); err != nil {
			return err
		}

		Winnerss = append(Winnerss, &Winners)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWinnersResponse{Winners: Winnerss, Pagination: pageRes}, nil
}

func (k Keeper) Winners(c context.Context, req *types.QueryGetWinnersRequest) (*types.QueryGetWinnersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Winners types.Winners
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasWinners(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetWinnersIDBytes(req.Id)), &Winners)

	return &types.QueryGetWinnersResponse{Winners: &Winners}, nil
}
