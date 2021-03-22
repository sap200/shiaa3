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

func (k Keeper) MembersAll(c context.Context, req *types.QueryAllMembersRequest) (*types.QueryAllMembersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Memberss []*types.Members
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	MembersStore := prefix.NewStore(store, types.KeyPrefix(types.MembersKey))

	pageRes, err := query.Paginate(MembersStore, req.Pagination, func(key []byte, value []byte) error {
		var Members types.Members
		if err := k.cdc.UnmarshalBinaryBare(value, &Members); err != nil {
			return err
		}

		Memberss = append(Memberss, &Members)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMembersResponse{Members: Memberss, Pagination: pageRes}, nil
}

func (k Keeper) Members(c context.Context, req *types.QueryGetMembersRequest) (*types.QueryGetMembersResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var Members types.Members
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasMembers(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetMembersIDBytes(req.Id)), &Members)

	return &types.QueryGetMembersResponse{Members: &Members}, nil
}
