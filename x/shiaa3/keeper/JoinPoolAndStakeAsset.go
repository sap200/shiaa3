package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetJoinPoolAndStakeAssetCount get the total number of JoinPoolAndStakeAsset
func (k Keeper) GetJoinPoolAndStakeAssetCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetCountKey))
	byteKey := types.KeyPrefix(types.JoinPoolAndStakeAssetCountKey)
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

// SetJoinPoolAndStakeAssetCount set the total number of JoinPoolAndStakeAsset
func (k Keeper) SetJoinPoolAndStakeAssetCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetCountKey))
	byteKey := types.KeyPrefix(types.JoinPoolAndStakeAssetCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendJoinPoolAndStakeAsset appends a JoinPoolAndStakeAsset in the store with a new id and update the count
func (k Keeper) AppendJoinPoolAndStakeAsset(
	ctx sdk.Context,
	creator string,
	PoolNo string,
	AssetSerial string,
) uint64 {
	// Create the JoinPoolAndStakeAsset
	count := k.GetJoinPoolAndStakeAssetCount(ctx)
	var JoinPoolAndStakeAsset = types.JoinPoolAndStakeAsset{
		Creator:     creator,
		Id:          count,
		PoolNo:      PoolNo,
		AssetSerial: AssetSerial,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	value := k.cdc.MustMarshalBinaryBare(&JoinPoolAndStakeAsset)
	store.Set(GetJoinPoolAndStakeAssetIDBytes(JoinPoolAndStakeAsset.Id), value)

	// Update JoinPoolAndStakeAsset count
	k.SetJoinPoolAndStakeAssetCount(ctx, count+1)

	return count
}

// SetJoinPoolAndStakeAsset set a specific JoinPoolAndStakeAsset in the store
func (k Keeper) SetJoinPoolAndStakeAsset(ctx sdk.Context, JoinPoolAndStakeAsset types.JoinPoolAndStakeAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	b := k.cdc.MustMarshalBinaryBare(&JoinPoolAndStakeAsset)
	store.Set(GetJoinPoolAndStakeAssetIDBytes(JoinPoolAndStakeAsset.Id), b)
}

// GetJoinPoolAndStakeAsset returns a JoinPoolAndStakeAsset from its id
func (k Keeper) GetJoinPoolAndStakeAsset(ctx sdk.Context, id uint64) types.JoinPoolAndStakeAsset {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	var JoinPoolAndStakeAsset types.JoinPoolAndStakeAsset
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetJoinPoolAndStakeAssetIDBytes(id)), &JoinPoolAndStakeAsset)
	return JoinPoolAndStakeAsset
}

// HasJoinPoolAndStakeAsset checks if the JoinPoolAndStakeAsset exists in the store
func (k Keeper) HasJoinPoolAndStakeAsset(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	return store.Has(GetJoinPoolAndStakeAssetIDBytes(id))
}

// GetJoinPoolAndStakeAssetOwner returns the creator of the JoinPoolAndStakeAsset
func (k Keeper) GetJoinPoolAndStakeAssetOwner(ctx sdk.Context, id uint64) string {
	return k.GetJoinPoolAndStakeAsset(ctx, id).Creator
}

// RemoveJoinPoolAndStakeAsset removes a JoinPoolAndStakeAsset from the store
func (k Keeper) RemoveJoinPoolAndStakeAsset(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	store.Delete(GetJoinPoolAndStakeAssetIDBytes(id))
}

// GetAllJoinPoolAndStakeAsset returns all JoinPoolAndStakeAsset
func (k Keeper) GetAllJoinPoolAndStakeAsset(ctx sdk.Context) (list []types.JoinPoolAndStakeAsset) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.JoinPoolAndStakeAssetKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.JoinPoolAndStakeAsset
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetJoinPoolAndStakeAssetIDBytes returns the byte representation of the ID
func GetJoinPoolAndStakeAssetIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetJoinPoolAndStakeAssetIDFromBytes returns ID in uint64 format from a byte array
func GetJoinPoolAndStakeAssetIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) GetAllStakedSerialForPool(ctx sdk.Context, poolName string) []types.JoinPoolAndStakeAsset {
	allStakes := k.GetAllJoinPoolAndStakeAsset(ctx)
	var poolStakes []types.JoinPoolAndStakeAsset

	for _, ledger := range allStakes {
		if ledger.PoolNo == poolName {
			poolStakes = append(poolStakes, ledger)
			k.RemoveJoinPoolAndStakeAsset(ctx, ledger.Id)
		}
	}

	return poolStakes
}
