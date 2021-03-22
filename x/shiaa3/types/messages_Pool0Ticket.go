package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreatePool0Ticket{}

func NewMsgCreatePool0Ticket(creator string, AddressString string, LambdaValue string) *MsgCreatePool0Ticket {
	return &MsgCreatePool0Ticket{
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgCreatePool0Ticket) Route() string {
	return RouterKey
}

func (msg *MsgCreatePool0Ticket) Type() string {
	return "CreatePool0Ticket"
}

func (msg *MsgCreatePool0Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreatePool0Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreatePool0Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdatePool0Ticket{}

func NewMsgUpdatePool0Ticket(creator string, id uint64, AddressString string, LambdaValue string) *MsgUpdatePool0Ticket {
	return &MsgUpdatePool0Ticket{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		LambdaValue:   LambdaValue,
	}
}

func (msg *MsgUpdatePool0Ticket) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePool0Ticket) Type() string {
	return "UpdatePool0Ticket"
}

func (msg *MsgUpdatePool0Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePool0Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePool0Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreatePool0Ticket{}

func NewMsgDeletePool0Ticket(creator string, id uint64) *MsgDeletePool0Ticket {
	return &MsgDeletePool0Ticket{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeletePool0Ticket) Route() string {
	return RouterKey
}

func (msg *MsgDeletePool0Ticket) Type() string {
	return "DeletePool0Ticket"
}

func (msg *MsgDeletePool0Ticket) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePool0Ticket) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePool0Ticket) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
