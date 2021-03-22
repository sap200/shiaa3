package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetWinnersCount get the total number of Winners
func (k Keeper) GetWinnersCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersCountKey))
	byteKey := types.KeyPrefix(types.WinnersCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetWinnersCount set the total number of Winners
func (k Keeper) SetWinnersCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersCountKey))
	byteKey := types.KeyPrefix(types.WinnersCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendWinners appends a Winners in the store with a new id and update the count
func (k Keeper) AppendWinners(
	ctx sdk.Context,
	creator string,
	AddressString string,
	PoolNo string,
	Winnings string,
) uint64 {
	// Create the Winners
	count := k.GetWinnersCount(ctx)
	var Winners = types.Winners{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		PoolNo:        PoolNo,
		Winnings:      Winnings,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	value := k.cdc.MustMarshalBinaryBare(&Winners)
	store.Set(GetWinnersIDBytes(Winners.Id), value)

	// Update Winners count
	k.SetWinnersCount(ctx, count+1)

	return count
}

// SetWinners set a specific Winners in the store
func (k Keeper) SetWinners(ctx sdk.Context, Winners types.Winners) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	b := k.cdc.MustMarshalBinaryBare(&Winners)
	store.Set(GetWinnersIDBytes(Winners.Id), b)
}

// GetWinners returns a Winners from its id
func (k Keeper) GetWinners(ctx sdk.Context, id uint64) types.Winners {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	var Winners types.Winners
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetWinnersIDBytes(id)), &Winners)
	return Winners
}

// HasWinners checks if the Winners exists in the store
func (k Keeper) HasWinners(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	return store.Has(GetWinnersIDBytes(id))
}

// GetWinnersOwner returns the creator of the Winners
func (k Keeper) GetWinnersOwner(ctx sdk.Context, id uint64) string {
	return k.GetWinners(ctx, id).Creator
}

// RemoveWinners removes a Winners from the store
func (k Keeper) RemoveWinners(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	store.Delete(GetWinnersIDBytes(id))
}

// GetAllWinners returns all Winners
func (k Keeper) GetAllWinners(ctx sdk.Context) (list []types.Winners) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WinnersKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Winners
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetWinnersIDBytes returns the byte representation of the ID
func GetWinnersIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetWinnersIDFromBytes returns ID in uint64 format from a byte array
func GetWinnersIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
