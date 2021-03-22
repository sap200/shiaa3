package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePool1Ticket{}

func NewMsgCreatePool1Ticket(creator string, AddressString string, LambdaValue string) *MsgCreatePool1Ticket {
	return &MsgCreatePool1Ticket{
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgCreatePool1Ticket) Route() string {
	return RouterKey
}

func (msg *MsgCreatePool1Ticket) Type() string {
	return "CreatePool1Ticket"
}

func (msg *MsgCreatePool1Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePool1Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePool1Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePool1Ticket{}

func NewMsgUpdatePool1Ticket(creator string, id uint64, AddressString string, LambdaValue string) *MsgUpdatePool1Ticket {
	return &MsgUpdatePool1Ticket{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgUpdatePool1Ticket) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePool1Ticket) Type() string {
	return "UpdatePool1Ticket"
}

func (msg *MsgUpdatePool1Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePool1Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePool1Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePool1Ticket{}

func NewMsgDeletePool1Ticket(creator string, id uint64) *MsgDeletePool1Ticket {
	return &MsgDeletePool1Ticket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePool1Ticket) Route() string {
	return RouterKey
}

func (msg *MsgDeletePool1Ticket) Type() string {
	return "DeletePool1Ticket"
}

func (msg *MsgDeletePool1Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePool1Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePool1Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
