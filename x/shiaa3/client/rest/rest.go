package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers shiaa3-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/shiaa3/Winners/{id}", getWinnersHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Winners", listWinnersHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Members/{id}", getMembersHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Members", listMembersHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Pool4Tickets/{id}", getPool4TicketHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Pool4Tickets", listPool4TicketHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Pool3Tickets/{id}", getPool3TicketHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Pool3Tickets", listPool3TicketHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Pool2Tickets/{id}", getPool2TicketHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Pool2Tickets", listPool2TicketHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Pool1Tickets/{id}", getPool1TicketHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Pool1Tickets", listPool1TicketHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/Pool0Tickets/{id}", getPool0TicketHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/Pool0Tickets", listPool0TicketHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/shiaa3/JoinPoolAndStakeAssets/{id}", getJoinPoolAndStakeAssetHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/shiaa3/JoinPoolAndStakeAssets", listJoinPoolAndStakeAssetHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/shiaa3/Winners", createWinnersHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Winners/{id}", updateWinnersHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Winners/{id}", deleteWinnersHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Members", createMembersHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Members/{id}", updateMembersHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Members/{id}", deleteMembersHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Pool4Tickets", createPool4TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool4Tickets/{id}", updatePool4TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool4Tickets/{id}", deletePool4TicketHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Pool3Tickets", createPool3TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool3Tickets/{id}", updatePool3TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool3Tickets/{id}", deletePool3TicketHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Pool2Tickets", createPool2TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool2Tickets/{id}", updatePool2TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool2Tickets/{id}", deletePool2TicketHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Pool1Tickets", createPool1TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool1Tickets/{id}", updatePool1TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool1Tickets/{id}", deletePool1TicketHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/Pool0Tickets", createPool0TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool0Tickets/{id}", updatePool0TicketHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/Pool0Tickets/{id}", deletePool0TicketHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/shiaa3/JoinPoolAndStakeAssets", createJoinPoolAndStakeAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/JoinPoolAndStakeAssets/{id}", updateJoinPoolAndStakeAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/shiaa3/JoinPoolAndStakeAssets/{id}", deleteJoinPoolAndStakeAssetHandler(clientCtx)).Methods("POST")

}
