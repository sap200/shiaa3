package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/assets/types"
	"strconv"
)

// GetSentAssetCount get the total number of SentAsset
func (k Keeper) GetSentAssetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetCountKey))
	byteKey := types.KeyPrefix(types.SentAssetCountKey)
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

// SetSentAssetCount set the total number of SentAsset
func (k Keeper) SetSentAssetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetCountKey))
	byteKey := types.KeyPrefix(types.SentAssetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendSentAsset appends a SentAsset in the store with a new id and update the count
func (k Keeper) AppendSentAsset(
	ctx sdk.Context,
	creator string,
	AssetSerial string,
	Receiver string,
	TargetChain string,
) uint64 {
	// Create the SentAsset
	count := k.GetSentAssetCount(ctx)
	var SentAsset = types.SentAsset{
		Creator:     creator,
		Id:          count,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	value := k.cdc.MustMarshalBinaryBare(&SentAsset)
	store.Set(GetSentAssetIDBytes(SentAsset.Id), value)

	// Update SentAsset count
	k.SetSentAssetCount(ctx, count+1)

	return count
}

// SetSentAsset set a specific SentAsset in the store
func (k Keeper) SetSentAsset(ctx sdk.Context, SentAsset types.SentAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	b := k.cdc.MustMarshalBinaryBare(&SentAsset)
	store.Set(GetSentAssetIDBytes(SentAsset.Id), b)
}

// GetSentAsset returns a SentAsset from its id
func (k Keeper) GetSentAsset(ctx sdk.Context, id uint64) types.SentAsset {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	var SentAsset types.SentAsset
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetSentAssetIDBytes(id)), &SentAsset)
	return SentAsset
}

// HasSentAsset checks if the SentAsset exists in the store
func (k Keeper) HasSentAsset(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	return store.Has(GetSentAssetIDBytes(id))
}

// GetSentAssetOwner returns the creator of the SentAsset
func (k Keeper) GetSentAssetOwner(ctx sdk.Context, id uint64) string {
	return k.GetSentAsset(ctx, id).Creator
}

// RemoveSentAsset removes a SentAsset from the store
func (k Keeper) RemoveSentAsset(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	store.Delete(GetSentAssetIDBytes(id))
}

// GetAllSentAsset returns all SentAsset
func (k Keeper) GetAllSentAsset(ctx sdk.Context) (list []types.SentAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.SentAssetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.SentAsset
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetSentAssetIDBytes returns the byte representation of the ID
func GetSentAssetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetSentAssetIDFromBytes returns ID in uint64 format from a byte array
func GetSentAssetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
