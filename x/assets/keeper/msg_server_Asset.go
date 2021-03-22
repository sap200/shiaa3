package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/assets/types"
	"github.com/tendermint/tendermint/crypto"
	"strconv"
	"github.com/google/uuid"
)

func (k msgServer) CreateAsset(goCtx context.Context, msg *types.MsgCreateAsset) (*types.MsgCreateAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Create the address of asset creator
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	sender, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}

	argsName := types.NAME_OF[msg.AssetType]
	argsSerial := argsName + uuid.New().String()
	argsTokens := int32(types.PRICE_OF[msg.AssetType])

	// send coins
	payment, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(argsTokens), 10) + "token")

	if err := k.Keeper.CoinKeeper.SendCoins(ctx, sender, moduleAcct, payment); err != nil {
		return nil, err
	}

	id := k.AppendAsset(
		ctx,
		moduleAcct.String(),
		argsSerial,
		argsName,
		int32(msg.AssetType),
		argsTokens,
		msg.Owner,
	)

	return &types.MsgCreateAssetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateAsset(goCtx context.Context, msg *types.MsgUpdateAsset) (*types.MsgUpdateAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var Asset = types.Asset{
		Creator:   msg.Creator,
		Id:        msg.Id,
		Serial:    msg.Serial,
		Name:      msg.Name,
		AssetType: msg.AssetType,
		Tokens:    msg.Tokens,
		Owner:     msg.Owner,
	}

	// Checks that the element exists
	if !k.HasAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAsset(ctx, Asset)

	return &types.MsgUpdateAssetResponse{}, nil
}

func (k msgServer) DeleteAsset(goCtx context.Context, msg *types.MsgDeleteAsset) (*types.MsgDeleteAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// Charge an amount to burn-asset because burning requires us to buy fuel and hence spend energy
	// Create the address of asset creator
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	// because msg.Creator should be asset.Owner in this case
	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	assetType := k.GetAsset(ctx, msg.Id).AssetType
	burnAmt := types.BURNING_AMOUNT_OF[assetType]

	// send coins
	payment, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(burnAmt), 10) + "token")

	if err := k.Keeper.CoinKeeper.SendCoins(ctx, sender, moduleAcct, payment); err != nil {
		return nil, err
	}

	k.RemoveAsset(ctx, msg.Id)

	return &types.MsgDeleteAssetResponse{}, nil
}
