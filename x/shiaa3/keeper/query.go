package keeper

import (
	// this line is used by starport scaffolding # 1
	"github.com/sap200/shiaa3/x/shiaa3/types"

	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	abci "github.com/tendermint/tendermint/abci/types"
)

func NewQuerier(k Keeper, legacyQuerierCdc *codec.LegacyAmino) sdk.Querier {
	return func(ctx sdk.Context, path []string, req abci.RequestQuery) ([]byte, error) {
		var (
			res []byte
			err error
		)

		switch path[0] {
		// this line is used by starport scaffolding # 2
		case types.QueryGetWinners:
			return getWinners(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListWinners:
			return listWinners(ctx, k, legacyQuerierCdc)

		case types.QueryGetMembers:
			return getMembers(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListMembers:
			return listMembers(ctx, k, legacyQuerierCdc)

		case types.QueryGetPool4Ticket:
			return getPool4Ticket(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPool4Ticket:
			return listPool4Ticket(ctx, k, legacyQuerierCdc)

		case types.QueryGetPool3Ticket:
			return getPool3Ticket(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPool3Ticket:
			return listPool3Ticket(ctx, k, legacyQuerierCdc)

		case types.QueryGetPool2Ticket:
			return getPool2Ticket(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPool2Ticket:
			return listPool2Ticket(ctx, k, legacyQuerierCdc)

		case types.QueryGetPool1Ticket:
			return getPool1Ticket(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPool1Ticket:
			return listPool1Ticket(ctx, k, legacyQuerierCdc)

		case types.QueryGetPool0Ticket:
			return getPool0Ticket(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListPool0Ticket:
			return listPool0Ticket(ctx, k, legacyQuerierCdc)

		case types.QueryGetJoinPoolAndStakeAsset:
			return getJoinPoolAndStakeAsset(ctx, path[1], k, legacyQuerierCdc)

		case types.QueryListJoinPoolAndStakeAsset:
			return listJoinPoolAndStakeAsset(ctx, k, legacyQuerierCdc)

		default:
			err = sdkerrors.Wrapf(sdkerrors.ErrUnknownRequest, "unknown %s query endpoint: %s", types.ModuleName, path[0])
		}

		return res, err
	}
}
