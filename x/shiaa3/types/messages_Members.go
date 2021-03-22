package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateMembers{}

func NewMsgCreateMembers(creator string, address string) *MsgCreateMembers {
	return &MsgCreateMembers{
		Creator: creator,
		Address: address,
	}
}

func (msg *MsgCreateMembers) Route() string {
	return RouterKey
}

func (msg *MsgCreateMembers) Type() string {
	return "CreateMembers"
}

func (msg *MsgCreateMembers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMembers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMembers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMembers{}

func NewMsgUpdateMembers(creator string, id uint64, address string) *MsgUpdateMembers {
	return &MsgUpdateMembers{
		Id:      id,
		Creator: creator,
		Address: address,
	}
}

func (msg *MsgUpdateMembers) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMembers) Type() string {
	return "UpdateMembers"
}

func (msg *MsgUpdateMembers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMembers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMembers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateMembers{}

func NewMsgDeleteMembers(creator string, id uint64) *MsgDeleteMembers {
	return &MsgDeleteMembers{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteMembers) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMembers) Type() string {
	return "DeleteMembers"
}

func (msg *MsgDeleteMembers) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMembers) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMembers) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
