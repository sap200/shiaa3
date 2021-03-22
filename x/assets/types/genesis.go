package types

import (
	"fmt"
	host "github.com/cosmos/cosmos-sdk/x/ibc/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId: PortID,
		// this line is used by starport scaffolding # genesis/types/default
		TimedOutAssetList: []*TimedOutAsset{},
		SentAssetList:     []*SentAsset{},
		TransferAssetList: []*TransferAsset{},
		AssetList:         []*Asset{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in TimedOutAsset
	TimedOutAssetIdMap := make(map[uint64]bool)

	for _, elem := range gs.TimedOutAssetList {
		if _, ok := TimedOutAssetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for TimedOutAsset")
		}
		TimedOutAssetIdMap[elem.Id] = true
	}
	// Check for duplicated ID in SentAsset
	SentAssetIdMap := make(map[uint64]bool)

	for _, elem := range gs.SentAssetList {
		if _, ok := SentAssetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for SentAsset")
		}
		SentAssetIdMap[elem.Id] = true
	}
	// Check for duplicated ID in TransferAsset
	TransferAssetIdMap := make(map[uint64]bool)

	for _, elem := range gs.TransferAssetList {
		if _, ok := TransferAssetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for TransferAsset")
		}
		TransferAssetIdMap[elem.Id] = true
	}
	// Check for duplicated ID in Asset
	AssetIdMap := make(map[uint64]bool)

	for _, elem := range gs.AssetList {
		if _, ok := AssetIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for Asset")
		}
		AssetIdMap[elem.Id] = true
	}

	return nil
}
