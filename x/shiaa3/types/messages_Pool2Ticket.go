package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePool2Ticket{}

func NewMsgCreatePool2Ticket(creator string, AddressString string, LambdaValue string) *MsgCreatePool2Ticket {
	return &MsgCreatePool2Ticket{
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgCreatePool2Ticket) Route() string {
	return RouterKey
}

func (msg *MsgCreatePool2Ticket) Type() string {
	return "CreatePool2Ticket"
}

func (msg *MsgCreatePool2Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePool2Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePool2Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePool2Ticket{}

func NewMsgUpdatePool2Ticket(creator string, id uint64, AddressString string, LambdaValue string) *MsgUpdatePool2Ticket {
	return &MsgUpdatePool2Ticket{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgUpdatePool2Ticket) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePool2Ticket) Type() string {
	return "UpdatePool2Ticket"
}

func (msg *MsgUpdatePool2Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePool2Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePool2Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePool2Ticket{}

func NewMsgDeletePool2Ticket(creator string, id uint64) *MsgDeletePool2Ticket {
	return &MsgDeletePool2Ticket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePool2Ticket) Route() string {
	return RouterKey
}

func (msg *MsgDeletePool2Ticket) Type() string {
	return "DeletePool2Ticket"
}

func (msg *MsgDeletePool2Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePool2Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePool2Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
