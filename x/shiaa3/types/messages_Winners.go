package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateWinners{}

func NewMsgCreateWinners(creator string, AddressString string, PoolNo string, Winnings string) *MsgCreateWinners {
	return &MsgCreateWinners{
		Creator:       creator,
		AddressString: AddressString,
		PoolNo:        PoolNo,
		Winnings:      Winnings,
	}
}

func (msg *MsgCreateWinners) Route() string {
	return RouterKey
}

func (msg *MsgCreateWinners) Type() string {
	return "CreateWinners"
}

func (msg *MsgCreateWinners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateWinners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateWinners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateWinners{}

func NewMsgUpdateWinners(creator string, id uint64, AddressString string, PoolNo string, Winnings string) *MsgUpdateWinners {
	return &MsgUpdateWinners{
		Id:            id,
		Creator:       creator,
		AddressString: AddressString,
		PoolNo:        PoolNo,
		Winnings:      Winnings,
	}
}

func (msg *MsgUpdateWinners) Route() string {
	return RouterKey
}

func (msg *MsgUpdateWinners) Type() string {
	return "UpdateWinners"
}

func (msg *MsgUpdateWinners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateWinners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateWinners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateWinners{}

func NewMsgDeleteWinners(creator string, id uint64) *MsgDeleteWinners {
	return &MsgDeleteWinners{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteWinners) Route() string {
	return RouterKey
}

func (msg *MsgDeleteWinners) Type() string {
	return "DeleteWinners"
}

func (msg *MsgDeleteWinners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteWinners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteWinners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
