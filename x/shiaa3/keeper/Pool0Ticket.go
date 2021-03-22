package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetPool0TicketCount get the total number of Pool0Ticket
func (k Keeper) GetPool0TicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool0TicketCountKey)
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

// SetPool0TicketCount set the total number of Pool0Ticket
func (k Keeper) SetPool0TicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool0TicketCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPool0Ticket appends a Pool0Ticket in the store with a new id and update the count
func (k Keeper) AppendPool0Ticket(
	ctx sdk.Context,
	creator string,
	AddressString string,
	LambdaValue string,
) uint64 {
	// Create the Pool0Ticket
	count := k.GetPool0TicketCount(ctx)
	var Pool0Ticket = types.Pool0Ticket{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	value := k.cdc.MustMarshalBinaryBare(&Pool0Ticket)
	store.Set(GetPool0TicketIDBytes(Pool0Ticket.Id), value)

	// Update Pool0Ticket count
	k.SetPool0TicketCount(ctx, count+1)

	return count
}

// SetPool0Ticket set a specific Pool0Ticket in the store
func (k Keeper) SetPool0Ticket(ctx sdk.Context, Pool0Ticket types.Pool0Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	b := k.cdc.MustMarshalBinaryBare(&Pool0Ticket)
	store.Set(GetPool0TicketIDBytes(Pool0Ticket.Id), b)
}

// GetPool0Ticket returns a Pool0Ticket from its id
func (k Keeper) GetPool0Ticket(ctx sdk.Context, id uint64) types.Pool0Ticket {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	var Pool0Ticket types.Pool0Ticket
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool0TicketIDBytes(id)), &Pool0Ticket)
	return Pool0Ticket
}

// HasPool0Ticket checks if the Pool0Ticket exists in the store
func (k Keeper) HasPool0Ticket(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	return store.Has(GetPool0TicketIDBytes(id))
}

// GetPool0TicketOwner returns the creator of the Pool0Ticket
func (k Keeper) GetPool0TicketOwner(ctx sdk.Context, id uint64) string {
	return k.GetPool0Ticket(ctx, id).Creator
}

// RemovePool0Ticket removes a Pool0Ticket from the store
func (k Keeper) RemovePool0Ticket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	store.Delete(GetPool0TicketIDBytes(id))
}

// GetAllPool0Ticket returns all Pool0Ticket
func (k Keeper) GetAllPool0Ticket(ctx sdk.Context) (list []types.Pool0Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool0TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool0Ticket
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPool0TicketIDBytes returns the byte representation of the ID
func GetPool0TicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPool0TicketIDFromBytes returns ID in uint64 format from a byte array
func GetPool0TicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
