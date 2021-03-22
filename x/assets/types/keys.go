package types

const (
	// ModuleName defines the module name
	ModuleName = "assets"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey is the message route for slashing
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_capability"

	// Version defines the current version the IBC module supports
	Version = "assets-1"

	// PortID is the default port id that module binds to
	PortID = "assets"
)

var (
	// PortKey defines the key to store the port ID in store
	PortKey = KeyPrefix("assets-port-")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}

const (
	AssetKey      = "Asset-value-"
	AssetCountKey = "Asset-count-"
)

//--------------------------------------------------------------------------------------------
// Application specific constants
//-------------------------------------------------------------------------------------------
const (
	// Asset Types are used to distinguish between different kinds of Asset
	CAMEL           = 0
	HOUSE           = 1
	FOSSIL_NECKLACE = 2
	CERAMIC_PLATE   = 3
	TERACOTTA_LAMP  = 4

	PRICE_OF_CAMEL           = 50
	PRICE_OF_HOUSE           = 200
	PRICE_OF_FOSSIL_NECKLACE = 100
	PRICE_OF_CERAMIC_PLATE   = 10
	PRICE_OF_TERACOTTA_LAMP  = 5

	BURN_AMOUNT_OF_CAMEL           = 5
	BURN_AMOUNT_OF_HOUSE           = 35
	BURN_AMOUNT_OF_FOSSIL_NECKLACE = 20
	BURN_AMOUNT_OF_CERAMIC_PLATE   = 3
	BURN_AMOUNT_OF_TERACOTTA_LAMP  = 1
)

var PRICE_OF = []int{PRICE_OF_CAMEL, PRICE_OF_HOUSE, PRICE_OF_FOSSIL_NECKLACE, PRICE_OF_CERAMIC_PLATE, PRICE_OF_TERACOTTA_LAMP}
var NAME_OF = []string{"CAMEL", "HOUSE", "FOSSIL_NECKLACE", "CERAMIC_PLATE", "TERACOTTA_LAMP"}
var BURNING_AMOUNT_OF = []int{BURN_AMOUNT_OF_CAMEL, BURN_AMOUNT_OF_HOUSE, BURN_AMOUNT_OF_FOSSIL_NECKLACE, BURN_AMOUNT_OF_CERAMIC_PLATE, BURN_AMOUNT_OF_TERACOTTA_LAMP}

const (
	TransferAssetKey      = "TransferAsset-value-"
	TransferAssetCountKey = "TransferAsset-count-"
)

const (
	SentAssetKey      = "SentAsset-value-"
	SentAssetCountKey = "SentAsset-count-"
)

const (
	TimedOutAssetKey      = "TimedOutAsset-value-"
	TimedOutAssetCountKey = "TimedOutAsset-count-"
)
