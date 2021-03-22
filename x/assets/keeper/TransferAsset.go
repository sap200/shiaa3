package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/assets/types"
	"strconv"
)

// GetTransferAssetCount get the total number of TransferAsset
func (k Keeper) GetTransferAssetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetCountKey))
	byteKey := types.KeyPrefix(types.TransferAssetCountKey)
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

// SetTransferAssetCount set the total number of TransferAsset
func (k Keeper) SetTransferAssetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetCountKey))
	byteKey := types.KeyPrefix(types.TransferAssetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTransferAsset appends a TransferAsset in the store with a new id and update the count
func (k Keeper) AppendTransferAsset(
	ctx sdk.Context,
	creator string,
	AssetSerial string,
	Receiver string,
) uint64 {
	// Create the TransferAsset
	count := k.GetTransferAssetCount(ctx)
	var TransferAsset = types.TransferAsset{
		Creator:     creator,
		Id:          count,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	value := k.cdc.MustMarshalBinaryBare(&TransferAsset)
	store.Set(GetTransferAssetIDBytes(TransferAsset.Id), value)

	// Update TransferAsset count
	k.SetTransferAssetCount(ctx, count+1)

	return count
}

// SetTransferAsset set a specific TransferAsset in the store
func (k Keeper) SetTransferAsset(ctx sdk.Context, TransferAsset types.TransferAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	b := k.cdc.MustMarshalBinaryBare(&TransferAsset)
	store.Set(GetTransferAssetIDBytes(TransferAsset.Id), b)
}

// GetTransferAsset returns a TransferAsset from its id
func (k Keeper) GetTransferAsset(ctx sdk.Context, id uint64) types.TransferAsset {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	var TransferAsset types.TransferAsset
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTransferAssetIDBytes(id)), &TransferAsset)
	return TransferAsset
}

// HasTransferAsset checks if the TransferAsset exists in the store
func (k Keeper) HasTransferAsset(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	return store.Has(GetTransferAssetIDBytes(id))
}

// GetTransferAssetOwner returns the creator of the TransferAsset
func (k Keeper) GetTransferAssetOwner(ctx sdk.Context, id uint64) string {
	return k.GetTransferAsset(ctx, id).Creator
}

// RemoveTransferAsset removes a TransferAsset from the store
func (k Keeper) RemoveTransferAsset(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	store.Delete(GetTransferAssetIDBytes(id))
}

// GetAllTransferAsset returns all TransferAsset
func (k Keeper) GetAllTransferAsset(ctx sdk.Context) (list []types.TransferAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransferAssetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.TransferAsset
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTransferAssetIDBytes returns the byte representation of the ID
func GetTransferAssetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTransferAssetIDFromBytes returns ID in uint64 format from a byte array
func GetTransferAssetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
