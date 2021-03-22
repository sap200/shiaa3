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

func (k Keeper) TransferAssetAll(c context.Context, req *types.QueryAllTransferAssetRequest) (*types.QueryAllTransferAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var TransferAssets []*types.TransferAsset
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	TransferAssetStore := prefix.NewStore(store, types.KeyPrefix(types.TransferAssetKey))

	pageRes, err := query.Paginate(TransferAssetStore, req.Pagination, func(key []byte, value []byte) error {
		var TransferAsset types.TransferAsset
		if err := k.cdc.UnmarshalBinaryBare(value, &TransferAsset); err != nil {
			return err
		}

		TransferAssets = append(TransferAssets, &TransferAsset)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTransferAssetResponse{TransferAsset: TransferAssets, Pagination: pageRes}, nil
}

func (k Keeper) TransferAsset(c context.Context, req *types.QueryGetTransferAssetRequest) (*types.QueryGetTransferAssetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var TransferAsset types.TransferAsset
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTransferAsset(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTransferAssetIDBytes(req.Id)), &TransferAsset)

	return &types.QueryGetTransferAssetResponse{TransferAsset: &TransferAsset}, nil
}
