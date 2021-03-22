package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetMembersCount get the total number of Members
func (k Keeper) GetMembersCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersCountKey))
	byteKey := types.KeyPrefix(types.MembersCountKey)
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

// SetMembersCount set the total number of Members
func (k Keeper) SetMembersCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersCountKey))
	byteKey := types.KeyPrefix(types.MembersCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendMembers appends a Members in the store with a new id and update the count
func (k Keeper) AppendMembers(
	ctx sdk.Context,
	creator string,
	address string,
) uint64 {
	// Create the Members
	count := k.GetMembersCount(ctx)
	var Members = types.Members{
		Creator: creator,
		Id:      count,
		Address: address,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	value := k.cdc.MustMarshalBinaryBare(&Members)
	store.Set(GetMembersIDBytes(Members.Id), value)

	// Update Members count
	k.SetMembersCount(ctx, count+1)

	return count
}

// SetMembers set a specific Members in the store
func (k Keeper) SetMembers(ctx sdk.Context, Members types.Members) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	b := k.cdc.MustMarshalBinaryBare(&Members)
	store.Set(GetMembersIDBytes(Members.Id), b)
}

// GetMembers returns a Members from its id
func (k Keeper) GetMembers(ctx sdk.Context, id uint64) types.Members {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	var Members types.Members
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetMembersIDBytes(id)), &Members)
	return Members
}

// HasMembers checks if the Members exists in the store
func (k Keeper) HasMembers(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	return store.Has(GetMembersIDBytes(id))
}

// GetMembersOwner returns the creator of the Members
func (k Keeper) GetMembersOwner(ctx sdk.Context, id uint64) string {
	return k.GetMembers(ctx, id).Creator
}

// RemoveMembers removes a Members from the store
func (k Keeper) RemoveMembers(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	store.Delete(GetMembersIDBytes(id))
}

// GetAllMembers returns all Members
func (k Keeper) GetAllMembers(ctx sdk.Context) (list []types.Members) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MembersKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Members
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMembersIDBytes returns the byte representation of the ID
func GetMembersIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMembersIDFromBytes returns ID in uint64 format from a byte array
func GetMembersIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) IsMember(ctx sdk.Context, addressString string) bool {
	members := k.GetAllMembers(ctx)

	for _, member := range members {
		if member.Address == addressString {
			return true
		}
	}

	return false
}
