package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgSendIbcAsset{}, "assets/SendIbcAsset", nil)

	cdc.RegisterConcrete(&MsgCreateTimedOutAsset{}, "assets/CreateTimedOutAsset", nil)
	cdc.RegisterConcrete(&MsgUpdateTimedOutAsset{}, "assets/UpdateTimedOutAsset", nil)
	cdc.RegisterConcrete(&MsgDeleteTimedOutAsset{}, "assets/DeleteTimedOutAsset", nil)

	cdc.RegisterConcrete(&MsgCreateSentAsset{}, "assets/CreateSentAsset", nil)
	cdc.RegisterConcrete(&MsgUpdateSentAsset{}, "assets/UpdateSentAsset", nil)
	cdc.RegisterConcrete(&MsgDeleteSentAsset{}, "assets/DeleteSentAsset", nil)

	cdc.RegisterConcrete(&MsgCreateTransferAsset{}, "assets/CreateTransferAsset", nil)
	cdc.RegisterConcrete(&MsgUpdateTransferAsset{}, "assets/UpdateTransferAsset", nil)
	cdc.RegisterConcrete(&MsgDeleteTransferAsset{}, "assets/DeleteTransferAsset", nil)

	cdc.RegisterConcrete(&MsgCreateAsset{}, "assets/CreateAsset", nil)
	cdc.RegisterConcrete(&MsgUpdateAsset{}, "assets/UpdateAsset", nil)
	cdc.RegisterConcrete(&MsgDeleteAsset{}, "assets/DeleteAsset", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSendIbcAsset{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTimedOutAsset{},
		&MsgUpdateTimedOutAsset{},
		&MsgDeleteTimedOutAsset{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateSentAsset{},
		&MsgUpdateSentAsset{},
		&MsgDeleteSentAsset{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransferAsset{},
		&MsgUpdateTransferAsset{},
		&MsgDeleteTransferAsset{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateAsset{},
		&MsgUpdateAsset{},
		&MsgDeleteAsset{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
