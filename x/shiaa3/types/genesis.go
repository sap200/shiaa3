package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		WinnersList:               []*Winners{},
		MembersList:               []*Members{},
		Pool4TicketList:           []*Pool4Ticket{},
		Pool3TicketList:           []*Pool3Ticket{},
		Pool2TicketList:           []*Pool2Ticket{},
		Pool1TicketList:           []*Pool1Ticket{},
		Pool0TicketList:           []*Pool0Ticket{},
		JoinPoolAndStakeAssetList: []*JoinPoolAndStakeAsset{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in Winners
	WinnersIdMap := make(map[uint64]bool)

	for _, elem := range gs.WinnersList {
		if _, ok := WinnersIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Winners")
		}
		WinnersIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Members
	MembersIdMap := make(map[uint64]bool)

	for _, elem := range gs.MembersList {
		if _, ok := MembersIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Members")
		}
		MembersIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Pool4Ticket
	Pool4TicketIdMap := make(map[uint64]bool)

	for _, elem := range gs.Pool4TicketList {
		if _, ok := Pool4TicketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Pool4Ticket")
		}
		Pool4TicketIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Pool3Ticket
	Pool3TicketIdMap := make(map[uint64]bool)

	for _, elem := range gs.Pool3TicketList {
		if _, ok := Pool3TicketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Pool3Ticket")
		}
		Pool3TicketIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Pool2Ticket
	Pool2TicketIdMap := make(map[uint64]bool)

	for _, elem := range gs.Pool2TicketList {
		if _, ok := Pool2TicketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Pool2Ticket")
		}
		Pool2TicketIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Pool1Ticket
	Pool1TicketIdMap := make(map[uint64]bool)

	for _, elem := range gs.Pool1TicketList {
		if _, ok := Pool1TicketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Pool1Ticket")
		}
		Pool1TicketIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Pool0Ticket
	Pool0TicketIdMap := make(map[uint64]bool)

	for _, elem := range gs.Pool0TicketList {
		if _, ok := Pool0TicketIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Pool0Ticket")
		}
		Pool0TicketIdMap[elem.Id] = true
	}
	// Check for duplicated ID in JoinPoolAndStakeAsset
	JoinPoolAndStakeAssetIdMap := make(map[uint64]bool)

	for _, elem := range gs.JoinPoolAndStakeAssetList {
		if _, ok := JoinPoolAndStakeAssetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for JoinPoolAndStakeAsset")
		}
		JoinPoolAndStakeAssetIdMap[elem.Id] = true
	}

	return nil
}
