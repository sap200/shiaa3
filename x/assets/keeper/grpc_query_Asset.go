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

func (k Keeper) AssetAll(c context.Context, req *types.QueryAllAssetRequest) (*types.QueryAllAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Assets []*types.Asset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	AssetStore := prefix.NewStore(store, types.KeyPrefix(types.AssetKey))

	pageRes, err := query.Paginate(AssetStore, req.Pagination, func(key []byte, value []byte) error {
		var Asset types.Asset
		if err := k.cdc.UnmarshalBinaryBare(value, &Asset); err != nil {
			return err
		}

		Assets = append(Assets, &Asset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAssetResponse{Asset: Assets, Pagination: pageRes}, nil
}

func (k Keeper) Asset(c context.Context, req *types.QueryGetAssetRequest) (*types.QueryGetAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Asset types.Asset
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasAsset(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAssetIDBytes(req.Id)), &Asset)

	return &types.QueryGetAssetResponse{Asset: &Asset}, nil
}
