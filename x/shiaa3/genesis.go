package shiaa3

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/keeper"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the Winners
	for _, elem := range genState.WinnersList {
		k.SetWinners(ctx, *elem)
	}

	// Set Winners count
	k.SetWinnersCount(ctx, uint64(len(genState.WinnersList)))

	// Set all the Members
	for _, elem := range genState.MembersList {
		k.SetMembers(ctx, *elem)
	}

	// Set Members count
	k.SetMembersCount(ctx, uint64(len(genState.MembersList)))

	// Set all the Pool4Ticket
	for _, elem := range genState.Pool4TicketList {
		k.SetPool4Ticket(ctx, *elem)
	}

	// Set Pool4Ticket count
	k.SetPool4TicketCount(ctx, uint64(len(genState.Pool4TicketList)))

	// Set all the Pool3Ticket
	for _, elem := range genState.Pool3TicketList {
		k.SetPool3Ticket(ctx, *elem)
	}

	// Set Pool3Ticket count
	k.SetPool3TicketCount(ctx, uint64(len(genState.Pool3TicketList)))

	// Set all the Pool2Ticket
	for _, elem := range genState.Pool2TicketList {
		k.SetPool2Ticket(ctx, *elem)
	}

	// Set Pool2Ticket count
	k.SetPool2TicketCount(ctx, uint64(len(genState.Pool2TicketList)))

	// Set all the Pool1Ticket
	for _, elem := range genState.Pool1TicketList {
		k.SetPool1Ticket(ctx, *elem)
	}

	// Set Pool1Ticket count
	k.SetPool1TicketCount(ctx, uint64(len(genState.Pool1TicketList)))

	// Set all the Pool0Ticket
	for _, elem := range genState.Pool0TicketList {
		k.SetPool0Ticket(ctx, *elem)
	}

	// Set Pool0Ticket count
	k.SetPool0TicketCount(ctx, uint64(len(genState.Pool0TicketList)))

	// Set all the JoinPoolAndStakeAsset
	for _, elem := range genState.JoinPoolAndStakeAssetList {
		k.SetJoinPoolAndStakeAsset(ctx, *elem)
	}

	// Set JoinPoolAndStakeAsset count
	k.SetJoinPoolAndStakeAssetCount(ctx, uint64(len(genState.JoinPoolAndStakeAssetList)))

}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all Winners
	WinnersList := k.GetAllWinners(ctx)
	for _, elem := range WinnersList {
		elem := elem
		genesis.WinnersList = append(genesis.WinnersList, &elem)
	}

	// Get all Members
	MembersList := k.GetAllMembers(ctx)
	for _, elem := range MembersList {
		elem := elem
		genesis.MembersList = append(genesis.MembersList, &elem)
	}

	// Get all Pool4Ticket
	Pool4TicketList := k.GetAllPool4Ticket(ctx)
	for _, elem := range Pool4TicketList {
		elem := elem
		genesis.Pool4TicketList = append(genesis.Pool4TicketList, &elem)
	}

	// Get all Pool3Ticket
	Pool3TicketList := k.GetAllPool3Ticket(ctx)
	for _, elem := range Pool3TicketList {
		elem := elem
		genesis.Pool3TicketList = append(genesis.Pool3TicketList, &elem)
	}

	// Get all Pool2Ticket
	Pool2TicketList := k.GetAllPool2Ticket(ctx)
	for _, elem := range Pool2TicketList {
		elem := elem
		genesis.Pool2TicketList = append(genesis.Pool2TicketList, &elem)
	}

	// Get all Pool1Ticket
	Pool1TicketList := k.GetAllPool1Ticket(ctx)
	for _, elem := range Pool1TicketList {
		elem := elem
		genesis.Pool1TicketList = append(genesis.Pool1TicketList, &elem)
	}

	// Get all Pool0Ticket
	Pool0TicketList := k.GetAllPool0Ticket(ctx)
	for _, elem := range Pool0TicketList {
		elem := elem
		genesis.Pool0TicketList = append(genesis.Pool0TicketList, &elem)
	}

	// Get all JoinPoolAndStakeAsset
	JoinPoolAndStakeAssetList := k.GetAllJoinPoolAndStakeAsset(ctx)
	for _, elem := range JoinPoolAndStakeAssetList {
		elem := elem
		genesis.JoinPoolAndStakeAssetList = append(genesis.JoinPoolAndStakeAssetList, &elem)
	}

	return genesis
}
