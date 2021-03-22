package assets

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/assets/keeper"
	"github.com/sap200/shiaa3/x/assets/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the TimedOutAsset
	for _, elem := range genState.TimedOutAssetList {
		k.SetTimedOutAsset(ctx, *elem)
	}

	// Set TimedOutAsset count
	k.SetTimedOutAssetCount(ctx, uint64(len(genState.TimedOutAssetList)))

	// Set all the SentAsset
	for _, elem := range genState.SentAssetList {
		k.SetSentAsset(ctx, *elem)
	}

	// Set SentAsset count
	k.SetSentAssetCount(ctx, uint64(len(genState.SentAssetList)))

	// Set all the TransferAsset
	for _, elem := range genState.TransferAssetList {
		k.SetTransferAsset(ctx, *elem)
	}

	// Set TransferAsset count
	k.SetTransferAssetCount(ctx, uint64(len(genState.TransferAssetList)))

	// Set all the Asset
	for _, elem := range genState.AssetList {
		k.SetAsset(ctx, *elem)
	}

	// Set Asset count
	k.SetAssetCount(ctx, uint64(len(genState.AssetList)))

	k.SetPort(ctx, genState.PortId)
	// Only try to bind to port if it is not already bound, since we may already own
	// port capability from capability InitGenesis
	if !k.IsBound(ctx, genState.PortId) {
		// module binds to the port on InitChain
		// and claims the returned capability
		err := k.BindPort(ctx, genState.PortId)
		if err != nil {
			panic("could not claim port capability: " + err.Error())
		}
	}
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all TimedOutAsset
	TimedOutAssetList := k.GetAllTimedOutAsset(ctx)
	for _, elem := range TimedOutAssetList {
		elem := elem
		genesis.TimedOutAssetList = append(genesis.TimedOutAssetList, &elem)
	}

	// Get all SentAsset
	SentAssetList := k.GetAllSentAsset(ctx)
	for _, elem := range SentAssetList {
		elem := elem
		genesis.SentAssetList = append(genesis.SentAssetList, &elem)
	}

	// Get all TransferAsset
	TransferAssetList := k.GetAllTransferAsset(ctx)
	for _, elem := range TransferAssetList {
		elem := elem
		genesis.TransferAssetList = append(genesis.TransferAssetList, &elem)
	}

	// Get all Asset
	AssetList := k.GetAllAsset(ctx)
	for _, elem := range AssetList {
		elem := elem
		genesis.AssetList = append(genesis.AssetList, &elem)
	}

	genesis.PortId = k.GetPort(ctx)

	return genesis
}
