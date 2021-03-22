package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetPool2TicketCount get the total number of Pool2Ticket
func (k Keeper) GetPool2TicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool2TicketCountKey)
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

// SetPool2TicketCount set the total number of Pool2Ticket
func (k Keeper) SetPool2TicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool2TicketCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPool2Ticket appends a Pool2Ticket in the store with a new id and update the count
func (k Keeper) AppendPool2Ticket(
	ctx sdk.Context,
	creator string,
	AddressString string,
	LambdaValue string,
) uint64 {
	// Create the Pool2Ticket
	count := k.GetPool2TicketCount(ctx)
	var Pool2Ticket = types.Pool2Ticket{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	value := k.cdc.MustMarshalBinaryBare(&Pool2Ticket)
	store.Set(GetPool2TicketIDBytes(Pool2Ticket.Id), value)

	// Update Pool2Ticket count
	k.SetPool2TicketCount(ctx, count+1)

	return count
}

// SetPool2Ticket set a specific Pool2Ticket in the store
func (k Keeper) SetPool2Ticket(ctx sdk.Context, Pool2Ticket types.Pool2Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	b := k.cdc.MustMarshalBinaryBare(&Pool2Ticket)
	store.Set(GetPool2TicketIDBytes(Pool2Ticket.Id), b)
}

// GetPool2Ticket returns a Pool2Ticket from its id
func (k Keeper) GetPool2Ticket(ctx sdk.Context, id uint64) types.Pool2Ticket {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	var Pool2Ticket types.Pool2Ticket
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool2TicketIDBytes(id)), &Pool2Ticket)
	return Pool2Ticket
}

// HasPool2Ticket checks if the Pool2Ticket exists in the store
func (k Keeper) HasPool2Ticket(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	return store.Has(GetPool2TicketIDBytes(id))
}

// GetPool2TicketOwner returns the creator of the Pool2Ticket
func (k Keeper) GetPool2TicketOwner(ctx sdk.Context, id uint64) string {
	return k.GetPool2Ticket(ctx, id).Creator
}

// RemovePool2Ticket removes a Pool2Ticket from the store
func (k Keeper) RemovePool2Ticket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	store.Delete(GetPool2TicketIDBytes(id))
}

// GetAllPool2Ticket returns all Pool2Ticket
func (k Keeper) GetAllPool2Ticket(ctx sdk.Context) (list []types.Pool2Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool2TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool2Ticket
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPool2TicketIDBytes returns the byte representation of the ID
func GetPool2TicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPool2TicketIDFromBytes returns ID in uint64 format from a byte array
func GetPool2TicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
