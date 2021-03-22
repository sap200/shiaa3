package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/sap200/shiaa3/x/assets/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TimedOutAssetAll(c context.Context, req *types.QueryAllTimedOutAssetRequest) (*types.QueryAllTimedOutAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var TimedOutAssets []*types.TimedOutAsset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	TimedOutAssetStore := prefix.NewStore(store, types.KeyPrefix(types.TimedOutAssetKey))

	pageRes, err := query.Paginate(TimedOutAssetStore, req.Pagination, func(key []byte, value []byte) error {
		var TimedOutAsset types.TimedOutAsset
		if err := k.cdc.UnmarshalBinaryBare(value, &TimedOutAsset); err != nil {
			return err
		}

		TimedOutAssets = append(TimedOutAssets, &TimedOutAsset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTimedOutAssetResponse{TimedOutAsset: TimedOutAssets, Pagination: pageRes}, nil
}

func (k Keeper) TimedOutAsset(c context.Context, req *types.QueryGetTimedOutAssetRequest) (*types.QueryGetTimedOutAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var TimedOutAsset types.TimedOutAsset
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTimedOutAsset(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimedOutAssetIDBytes(req.Id)), &TimedOutAsset)

	return &types.QueryGetTimedOutAssetResponse{TimedOutAsset: &TimedOutAsset}, nil
}
