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

func (k Keeper) JoinPoolAndStakeAssetAll(c context.Context, req *types.QueryAllJoinPoolAndStakeAssetRequest) (*types.QueryAllJoinPoolAndStakeAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var JoinPoolAndStakeAssets []*types.JoinPoolAndStakeAsset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	JoinPoolAndStakeAssetStore := prefix.NewStore(store, types.KeyPrefix(types.JoinPoolAndStakeAssetKey))

	pageRes, err := query.Paginate(JoinPoolAndStakeAssetStore, req.Pagination, func(key []byte, value []byte) error {
		var JoinPoolAndStakeAsset types.JoinPoolAndStakeAsset
		if err := k.cdc.UnmarshalBinaryBare(value, &JoinPoolAndStakeAsset); err != nil {
			return err
		}

		JoinPoolAndStakeAssets = append(JoinPoolAndStakeAssets, &JoinPoolAndStakeAsset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllJoinPoolAndStakeAssetResponse{JoinPoolAndStakeAsset: JoinPoolAndStakeAssets, Pagination: pageRes}, nil
}

func (k Keeper) JoinPoolAndStakeAsset(c context.Context, req *types.QueryGetJoinPoolAndStakeAssetRequest) (*types.QueryGetJoinPoolAndStakeAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var JoinPoolAndStakeAsset types.JoinPoolAndStakeAsset
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasJoinPoolAndStakeAsset(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetJoinPoolAndStakeAssetIDBytes(req.Id)), &JoinPoolAndStakeAsset)

	return &types.QueryGetJoinPoolAndStakeAssetResponse{JoinPoolAndStakeAsset: &JoinPoolAndStakeAsset}, nil
}
