package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetPool4TicketCount get the total number of Pool4Ticket
func (k Keeper) GetPool4TicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool4TicketCountKey)
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

// SetPool4TicketCount set the total number of Pool4Ticket
func (k Keeper) SetPool4TicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool4TicketCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPool4Ticket appends a Pool4Ticket in the store with a new id and update the count
func (k Keeper) AppendPool4Ticket(
	ctx sdk.Context,
	creator string,
	AddressString string,
	LambdaValue string,
) uint64 {
	// Create the Pool4Ticket
	count := k.GetPool4TicketCount(ctx)
	var Pool4Ticket = types.Pool4Ticket{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	value := k.cdc.MustMarshalBinaryBare(&Pool4Ticket)
	store.Set(GetPool4TicketIDBytes(Pool4Ticket.Id), value)

	// Update Pool4Ticket count
	k.SetPool4TicketCount(ctx, count+1)

	return count
}

// SetPool4Ticket set a specific Pool4Ticket in the store
func (k Keeper) SetPool4Ticket(ctx sdk.Context, Pool4Ticket types.Pool4Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	b := k.cdc.MustMarshalBinaryBare(&Pool4Ticket)
	store.Set(GetPool4TicketIDBytes(Pool4Ticket.Id), b)
}

// GetPool4Ticket returns a Pool4Ticket from its id
func (k Keeper) GetPool4Ticket(ctx sdk.Context, id uint64) types.Pool4Ticket {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	var Pool4Ticket types.Pool4Ticket
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool4TicketIDBytes(id)), &Pool4Ticket)
	return Pool4Ticket
}

// HasPool4Ticket checks if the Pool4Ticket exists in the store
func (k Keeper) HasPool4Ticket(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	return store.Has(GetPool4TicketIDBytes(id))
}

// GetPool4TicketOwner returns the creator of the Pool4Ticket
func (k Keeper) GetPool4TicketOwner(ctx sdk.Context, id uint64) string {
	return k.GetPool4Ticket(ctx, id).Creator
}

// RemovePool4Ticket removes a Pool4Ticket from the store
func (k Keeper) RemovePool4Ticket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	store.Delete(GetPool4TicketIDBytes(id))
}

// GetAllPool4Ticket returns all Pool4Ticket
func (k Keeper) GetAllPool4Ticket(ctx sdk.Context) (list []types.Pool4Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool4TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool4Ticket
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPool4TicketIDBytes returns the byte representation of the ID
func GetPool4TicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPool4TicketIDFromBytes returns ID in uint64 format from a byte array
func GetPool4TicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
