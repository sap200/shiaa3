package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"strconv"
)

// GetPool3TicketCount get the total number of Pool3Ticket
func (k Keeper) GetPool3TicketCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool3TicketCountKey)
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

// SetPool3TicketCount set the total number of Pool3Ticket
func (k Keeper) SetPool3TicketCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketCountKey))
	byteKey := types.KeyPrefix(types.Pool3TicketCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendPool3Ticket appends a Pool3Ticket in the store with a new id and update the count
func (k Keeper) AppendPool3Ticket(
	ctx sdk.Context,
	creator string,
	AddressString string,
	LambdaValue string,
) uint64 {
	// Create the Pool3Ticket
	count := k.GetPool3TicketCount(ctx)
	var Pool3Ticket = types.Pool3Ticket{
		Creator:       creator,
		Id:            count,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	value := k.cdc.MustMarshalBinaryBare(&Pool3Ticket)
	store.Set(GetPool3TicketIDBytes(Pool3Ticket.Id), value)

	// Update Pool3Ticket count
	k.SetPool3TicketCount(ctx, count+1)

	return count
}

// SetPool3Ticket set a specific Pool3Ticket in the store
func (k Keeper) SetPool3Ticket(ctx sdk.Context, Pool3Ticket types.Pool3Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	b := k.cdc.MustMarshalBinaryBare(&Pool3Ticket)
	store.Set(GetPool3TicketIDBytes(Pool3Ticket.Id), b)
}

// GetPool3Ticket returns a Pool3Ticket from its id
func (k Keeper) GetPool3Ticket(ctx sdk.Context, id uint64) types.Pool3Ticket {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	var Pool3Ticket types.Pool3Ticket
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetPool3TicketIDBytes(id)), &Pool3Ticket)
	return Pool3Ticket
}

// HasPool3Ticket checks if the Pool3Ticket exists in the store
func (k Keeper) HasPool3Ticket(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	return store.Has(GetPool3TicketIDBytes(id))
}

// GetPool3TicketOwner returns the creator of the Pool3Ticket
func (k Keeper) GetPool3TicketOwner(ctx sdk.Context, id uint64) string {
	return k.GetPool3Ticket(ctx, id).Creator
}

// RemovePool3Ticket removes a Pool3Ticket from the store
func (k Keeper) RemovePool3Ticket(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	store.Delete(GetPool3TicketIDBytes(id))
}

// GetAllPool3Ticket returns all Pool3Ticket
func (k Keeper) GetAllPool3Ticket(ctx sdk.Context) (list []types.Pool3Ticket) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.Pool3TicketKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Pool3Ticket
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetPool3TicketIDBytes returns the byte representation of the ID
func GetPool3TicketIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetPool3TicketIDFromBytes returns ID in uint64 format from a byte array
func GetPool3TicketIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
