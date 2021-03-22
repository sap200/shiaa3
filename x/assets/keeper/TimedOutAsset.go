package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/assets/types"
	"strconv"
)

// GetTimedOutAssetCount get the total number of TimedOutAsset
func (k Keeper) GetTimedOutAssetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetCountKey))
	byteKey := types.KeyPrefix(types.TimedOutAssetCountKey)
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

// SetTimedOutAssetCount set the total number of TimedOutAsset
func (k Keeper) SetTimedOutAssetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetCountKey))
	byteKey := types.KeyPrefix(types.TimedOutAssetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTimedOutAsset appends a TimedOutAsset in the store with a new id and update the count
func (k Keeper) AppendTimedOutAsset(
	ctx sdk.Context,
	creator string,
	AssetSerial string,
	Receiver string,
	TargetChain string,
) uint64 {
	// Create the TimedOutAsset
	count := k.GetTimedOutAssetCount(ctx)
	var TimedOutAsset = types.TimedOutAsset{
		Creator:     creator,
		Id:          count,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	value := k.cdc.MustMarshalBinaryBare(&TimedOutAsset)
	store.Set(GetTimedOutAssetIDBytes(TimedOutAsset.Id), value)

	// Update TimedOutAsset count
	k.SetTimedOutAssetCount(ctx, count+1)

	return count
}

// SetTimedOutAsset set a specific TimedOutAsset in the store
func (k Keeper) SetTimedOutAsset(ctx sdk.Context, TimedOutAsset types.TimedOutAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	b := k.cdc.MustMarshalBinaryBare(&TimedOutAsset)
	store.Set(GetTimedOutAssetIDBytes(TimedOutAsset.Id), b)
}

// GetTimedOutAsset returns a TimedOutAsset from its id
func (k Keeper) GetTimedOutAsset(ctx sdk.Context, id uint64) types.TimedOutAsset {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	var TimedOutAsset types.TimedOutAsset
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTimedOutAssetIDBytes(id)), &TimedOutAsset)
	return TimedOutAsset
}

// HasTimedOutAsset checks if the TimedOutAsset exists in the store
func (k Keeper) HasTimedOutAsset(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	return store.Has(GetTimedOutAssetIDBytes(id))
}

// GetTimedOutAssetOwner returns the creator of the TimedOutAsset
func (k Keeper) GetTimedOutAssetOwner(ctx sdk.Context, id uint64) string {
	return k.GetTimedOutAsset(ctx, id).Creator
}

// RemoveTimedOutAsset removes a TimedOutAsset from the store
func (k Keeper) RemoveTimedOutAsset(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	store.Delete(GetTimedOutAssetIDBytes(id))
}

// GetAllTimedOutAsset returns all TimedOutAsset
func (k Keeper) GetAllTimedOutAsset(ctx sdk.Context) (list []types.TimedOutAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TimedOutAssetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TimedOutAsset
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTimedOutAssetIDBytes returns the byte representation of the ID
func GetTimedOutAssetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTimedOutAssetIDFromBytes returns ID in uint64 format from a byte array
func GetTimedOutAssetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
