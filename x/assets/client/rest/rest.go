package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers assets-related REST handlers to a router
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

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/assets/TimedOutAssets/{id}", getTimedOutAssetHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/assets/TimedOutAssets", listTimedOutAssetHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/assets/SentAssets/{id}", getSentAssetHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/assets/SentAssets", listSentAssetHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/assets/TransferAssets/{id}", getTransferAssetHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/assets/TransferAssets", listTransferAssetHandler(clientCtx)).Methods("GET")

	r.HandleFunc("/assets/Assets/{id}", getAssetHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/assets/Assets", listAssetHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/assets/TimedOutAssets", createTimedOutAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/TimedOutAssets/{id}", updateTimedOutAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/TimedOutAssets/{id}", deleteTimedOutAssetHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/assets/SentAssets", createSentAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/SentAssets/{id}", updateSentAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/SentAssets/{id}", deleteSentAssetHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/assets/TransferAssets", createTransferAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/TransferAssets/{id}", updateTransferAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/TransferAssets/{id}", deleteTransferAssetHandler(clientCtx)).Methods("POST")

	r.HandleFunc("/assets/Assets", createAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/Assets/{id}", updateAssetHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/assets/Assets/{id}", deleteAssetHandler(clientCtx)).Methods("POST")

}
