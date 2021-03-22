package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgCreateWinners{}, "shiaa3/CreateWinners", nil)
	cdc.RegisterConcrete(&MsgUpdateWinners{}, "shiaa3/UpdateWinners", nil)
	cdc.RegisterConcrete(&MsgDeleteWinners{}, "shiaa3/DeleteWinners", nil)

	cdc.RegisterConcrete(&MsgCreateMembers{}, "shiaa3/CreateMembers", nil)
	cdc.RegisterConcrete(&MsgUpdateMembers{}, "shiaa3/UpdateMembers", nil)
	cdc.RegisterConcrete(&MsgDeleteMembers{}, "shiaa3/DeleteMembers", nil)

	cdc.RegisterConcrete(&MsgCreatePool4Ticket{}, "shiaa3/CreatePool4Ticket", nil)
	cdc.RegisterConcrete(&MsgUpdatePool4Ticket{}, "shiaa3/UpdatePool4Ticket", nil)
	cdc.RegisterConcrete(&MsgDeletePool4Ticket{}, "shiaa3/DeletePool4Ticket", nil)

	cdc.RegisterConcrete(&MsgCreatePool3Ticket{}, "shiaa3/CreatePool3Ticket", nil)
	cdc.RegisterConcrete(&MsgUpdatePool3Ticket{}, "shiaa3/UpdatePool3Ticket", nil)
	cdc.RegisterConcrete(&MsgDeletePool3Ticket{}, "shiaa3/DeletePool3Ticket", nil)

	cdc.RegisterConcrete(&MsgCreatePool2Ticket{}, "shiaa3/CreatePool2Ticket", nil)
	cdc.RegisterConcrete(&MsgUpdatePool2Ticket{}, "shiaa3/UpdatePool2Ticket", nil)
	cdc.RegisterConcrete(&MsgDeletePool2Ticket{}, "shiaa3/DeletePool2Ticket", nil)

	cdc.RegisterConcrete(&MsgCreatePool1Ticket{}, "shiaa3/CreatePool1Ticket", nil)
	cdc.RegisterConcrete(&MsgUpdatePool1Ticket{}, "shiaa3/UpdatePool1Ticket", nil)
	cdc.RegisterConcrete(&MsgDeletePool1Ticket{}, "shiaa3/DeletePool1Ticket", nil)

	cdc.RegisterConcrete(&MsgCreatePool0Ticket{}, "shiaa3/CreatePool0Ticket", nil)
	cdc.RegisterConcrete(&MsgUpdatePool0Ticket{}, "shiaa3/UpdatePool0Ticket", nil)
	cdc.RegisterConcrete(&MsgDeletePool0Ticket{}, "shiaa3/DeletePool0Ticket", nil)

	cdc.RegisterConcrete(&MsgCreateJoinPoolAndStakeAsset{}, "shiaa3/CreateJoinPoolAndStakeAsset", nil)
	cdc.RegisterConcrete(&MsgUpdateJoinPoolAndStakeAsset{}, "shiaa3/UpdateJoinPoolAndStakeAsset", nil)
	cdc.RegisterConcrete(&MsgDeleteJoinPoolAndStakeAsset{}, "shiaa3/DeleteJoinPoolAndStakeAsset", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateWinners{},
		&MsgUpdateWinners{},
		&MsgDeleteWinners{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateMembers{},
		&MsgUpdateMembers{},
		&MsgDeleteMembers{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool4Ticket{},
		&MsgUpdatePool4Ticket{},
		&MsgDeletePool4Ticket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool3Ticket{},
		&MsgUpdatePool3Ticket{},
		&MsgDeletePool3Ticket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool2Ticket{},
		&MsgUpdatePool2Ticket{},
		&MsgDeletePool2Ticket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool1Ticket{},
		&MsgUpdatePool1Ticket{},
		&MsgDeletePool1Ticket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool0Ticket{},
		&MsgUpdatePool0Ticket{},
		&MsgDeletePool0Ticket{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateJoinPoolAndStakeAsset{},
		&MsgUpdateJoinPoolAndStakeAsset{},
		&MsgDeleteJoinPoolAndStakeAsset{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewAminoCodec(amino)
)
