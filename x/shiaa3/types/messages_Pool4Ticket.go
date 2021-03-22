package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePool4Ticket{}

func NewMsgCreatePool4Ticket(creator string, AddressString string, LambdaValue string) *MsgCreatePool4Ticket {
	return &MsgCreatePool4Ticket{
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgCreatePool4Ticket) Route() string {
	return RouterKey
}

func (msg *MsgCreatePool4Ticket) Type() string {
	return "CreatePool4Ticket"
}

func (msg *MsgCreatePool4Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePool4Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePool4Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePool4Ticket{}

func NewMsgUpdatePool4Ticket(creator string, id uint64, AddressString string, LambdaValue string) *MsgUpdatePool4Ticket {
	return &MsgUpdatePool4Ticket{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgUpdatePool4Ticket) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePool4Ticket) Type() string {
	return "UpdatePool4Ticket"
}

func (msg *MsgUpdatePool4Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePool4Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePool4Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePool4Ticket{}

func NewMsgDeletePool4Ticket(creator string, id uint64) *MsgDeletePool4Ticket {
	return &MsgDeletePool4Ticket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePool4Ticket) Route() string {
	return RouterKey
}

func (msg *MsgDeletePool4Ticket) Type() string {
	return "DeletePool4Ticket"
}

func (msg *MsgDeletePool4Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePool4Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePool4Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
