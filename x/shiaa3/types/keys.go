package types

const (
	// ModuleName defines the module name
	ModuleName = "shiaa3"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_capability"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	JoinPoolAndStakeAssetKey      = "JoinPoolAndStakeAsset-value-"
	JoinPoolAndStakeAssetCountKey = "JoinPoolAndStakeAsset-count-"
)

const (
	POOL0_CAP    = 2
	POOL1_CAP    = 2
	POOL2_CAP    = 3
	POOL3_CAP    = 3
	POOL4_CAP    = 5
	JOINFEE      = 45
	POOL0        = "pool-0"
	POOL1        = "pool-1"
	POOL2        = "pool-2"
	POOL3        = "pool-3"
	POOL4        = "pool-4"
	STAKE_PREFIX = "STAKED"
)

var POOL_CAPACITY = []int{POOL0_CAP, POOL1_CAP, POOL2_CAP, POOL3_CAP, POOL4_CAP}
var POOL_INDEX = map[string]int{POOL0: 0, POOL1: 1, POOL2: 2, POOL3: 3, POOL4: 4}

const (
	Pool0TicketKey      = "Pool0Ticket-value-"
	Pool0TicketCountKey = "Pool0Ticket-count-"
)

const (
	Pool1TicketKey      = "Pool1Ticket-value-"
	Pool1TicketCountKey = "Pool1Ticket-count-"
)

const (
	Pool2TicketKey      = "Pool2Ticket-value-"
	Pool2TicketCountKey = "Pool2Ticket-count-"
)

const (
	Pool3TicketKey      = "Pool3Ticket-value-"
	Pool3TicketCountKey = "Pool3Ticket-count-"
)

const (
	Pool4TicketKey      = "Pool4Ticket-value-"
	Pool4TicketCountKey = "Pool4Ticket-count-"
)

const (
	MembersKey      = "Members-value-"
	MembersCountKey = "Members-count-"
)

const (
	WinnersKey      = "Winners-value-"
	WinnersCountKey = "Winners-count-"
)
