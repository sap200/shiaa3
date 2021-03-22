package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetPool1TicketCount get the total number of Pool1Ticket
func (k Keeper) GetPool1TicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool1TicketCountKey)
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

// SetPool1TicketCount set the total number of Pool1Ticket
func (k Keeper) SetPool1TicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool1TicketCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPool1Ticket appends a Pool1Ticket in the store with a new id and update the count
func (k Keeper) AppendPool1Ticket(
	ctx sdk.Context,
	creator string,
	AddressString string,
	LambdaValue string,
) uint64 {
	// Create the Pool1Ticket
	count := k.GetPool1TicketCount(ctx)
	var Pool1Ticket = types.Pool1Ticket{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	value := k.cdc.MustMarshalBinaryBare(&Pool1Ticket)
	store.Set(GetPool1TicketIDBytes(Pool1Ticket.Id), value)

	// Update Pool1Ticket count
	k.SetPool1TicketCount(ctx, count+1)

	return count
}

// SetPool1Ticket set a specific Pool1Ticket in the store
func (k Keeper) SetPool1Ticket(ctx sdk.Context, Pool1Ticket types.Pool1Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	b := k.cdc.MustMarshalBinaryBare(&Pool1Ticket)
	store.Set(GetPool1TicketIDBytes(Pool1Ticket.Id), b)
}

// GetPool1Ticket returns a Pool1Ticket from its id
func (k Keeper) GetPool1Ticket(ctx sdk.Context, id uint64) types.Pool1Ticket {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	var Pool1Ticket types.Pool1Ticket
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool1TicketIDBytes(id)), &Pool1Ticket)
	return Pool1Ticket
}

// HasPool1Ticket checks if the Pool1Ticket exists in the store
func (k Keeper) HasPool1Ticket(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	return store.Has(GetPool1TicketIDBytes(id))
}

// GetPool1TicketOwner returns the creator of the Pool1Ticket
func (k Keeper) GetPool1TicketOwner(ctx sdk.Context, id uint64) string {
	return k.GetPool1Ticket(ctx, id).Creator
}

// RemovePool1Ticket removes a Pool1Ticket from the store
func (k Keeper) RemovePool1Ticket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	store.Delete(GetPool1TicketIDBytes(id))
}

// GetAllPool1Ticket returns all Pool1Ticket
func (k Keeper) GetAllPool1Ticket(ctx sdk.Context) (list []types.Pool1Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool1TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool1Ticket
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPool1TicketIDBytes returns the byte representation of the ID
func GetPool1TicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPool1TicketIDFromBytes returns ID in uint64 format from a byte array
func GetPool1TicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
