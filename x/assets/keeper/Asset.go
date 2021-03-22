package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/google/uuid"
	"github.com/sap200/shiaa3/x/assets/types"
	"strconv"
	"strings"
)

// GetAssetCount get the total number of Asset
func (k Keeper) GetAssetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetCountKey))
	byteKey := types.KeyPrefix(types.AssetCountKey)
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

// SetAssetCount set the total number of Asset
func (k Keeper) SetAssetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetCountKey))
	byteKey := types.KeyPrefix(types.AssetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendAsset appends a Asset in the store with a new id and update the count
func (k Keeper) AppendAsset(
	ctx sdk.Context,
	creator string,
	Serial string,
	Name string,
	AssetType int32,
	Tokens int32,
	Owner string,
) uint64 {
	// Create the Asset
	count := k.GetAssetCount(ctx)
	// ID derived from serial
	id := GetIDFromSerial(Serial)
	var Asset = types.Asset{
		Creator:   creator,
		Id:        id,
		Serial:    Serial,
		Name:      Name,
		AssetType: AssetType,
		Tokens:    Tokens,
		Owner:     Owner,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	value := k.cdc.MustMarshalBinaryBare(&Asset)
	store.Set(GetAssetIDBytes(Asset.Id), value)

	// Update Asset count
	k.SetAssetCount(ctx, count+1)

	return count
}

// SetAsset set a specific Asset in the store
func (k Keeper) SetAsset(ctx sdk.Context, Asset types.Asset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	b := k.cdc.MustMarshalBinaryBare(&Asset)
	store.Set(GetAssetIDBytes(Asset.Id), b)
}

// GetAsset returns a Asset from its id
func (k Keeper) GetAsset(ctx sdk.Context, id uint64) types.Asset {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	var Asset types.Asset
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAssetIDBytes(id)), &Asset)
	return Asset
}

// HasAsset checks if the Asset exists in the store
func (k Keeper) HasAsset(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	return store.Has(GetAssetIDBytes(id))
}

// GetAssetOwner returns the creator of the Asset
func (k Keeper) GetAssetOwner(ctx sdk.Context, id uint64) string {
	return k.GetAsset(ctx, id).Owner
}

// RemoveAsset removes a Asset from the store
func (k Keeper) RemoveAsset(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	store.Delete(GetAssetIDBytes(id))
}

// GetAllAsset returns all Asset
func (k Keeper) GetAllAsset(ctx sdk.Context) (list []types.Asset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AssetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Asset
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAssetIDBytes returns the byte representation of the ID
func GetAssetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAssetIDFromBytes returns ID in uint64 format from a byte array
func GetAssetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

// Get ID from Serial
func GetIDFromSerial(serial string) uint64 {
	// Find the Prefix of the serial
	prefix := findPrefix(serial)

	// Remove the prefix
	newSerial := serial[len(prefix):]

	// parse the new string to new uuid
	prefixLessSerial, err := uuid.Parse(newSerial)
	if err != nil {
		panic(err)
	}

	// return the .ID() method of the UUID
	return uint64(prefixLessSerial.ID())
}

// Finds the prefix of the Serial
func findPrefix(serial string) string {
	for _, v := range types.NAME_OF {
		if strings.HasPrefix(serial, v) {
			return v
		}
	}

	return ""
}

func FindAssetType(serial string) int32 {
	for i, v := range types.NAME_OF {
		if strings.HasPrefix(serial, v) {
			return int32(i)
		}
	}

	return -1
}
