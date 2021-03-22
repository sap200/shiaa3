package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePool3Ticket{}

func NewMsgCreatePool3Ticket(creator string, AddressString string, LambdaValue string) *MsgCreatePool3Ticket {
	return &MsgCreatePool3Ticket{
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgCreatePool3Ticket) Route() string {
	return RouterKey
}

func (msg *MsgCreatePool3Ticket) Type() string {
	return "CreatePool3Ticket"
}

func (msg *MsgCreatePool3Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePool3Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePool3Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePool3Ticket{}

func NewMsgUpdatePool3Ticket(creator string, id uint64, AddressString string, LambdaValue string) *MsgUpdatePool3Ticket {
	return &MsgUpdatePool3Ticket{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgUpdatePool3Ticket) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePool3Ticket) Type() string {
	return "UpdatePool3Ticket"
}

func (msg *MsgUpdatePool3Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePool3Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePool3Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePool3Ticket{}

func NewMsgDeletePool3Ticket(creator string, id uint64) *MsgDeletePool3Ticket {
	return &MsgDeletePool3Ticket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePool3Ticket) Route() string {
	return RouterKey
}

func (msg *MsgDeletePool3Ticket) Type() string {
	return "DeletePool3Ticket"
}

func (msg *MsgDeletePool3Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePool3Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePool3Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
