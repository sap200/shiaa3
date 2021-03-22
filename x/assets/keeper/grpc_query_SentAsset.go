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

func (k Keeper) SentAssetAll(c context.Context, req *types.QueryAllSentAssetRequest) (*types.QueryAllSentAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var SentAssets []*types.SentAsset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	SentAssetStore := prefix.NewStore(store, types.KeyPrefix(types.SentAssetKey))

	pageRes, err := query.Paginate(SentAssetStore, req.Pagination, func(key []byte, value []byte) error {
		var SentAsset types.SentAsset
		if err := k.cdc.UnmarshalBinaryBare(value, &SentAsset); err != nil {
			return err
		}

		SentAssets = append(SentAssets, &SentAsset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSentAssetResponse{SentAsset: SentAssets, Pagination: pageRes}, nil
}

func (k Keeper) SentAsset(c context.Context, req *types.QueryGetSentAssetRequest) (*types.QueryGetSentAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var SentAsset types.SentAsset
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasSentAsset(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSentAssetIDBytes(req.Id)), &SentAsset)

	return &types.QueryGetSentAssetResponse{SentAsset: &SentAsset}, nil
}
