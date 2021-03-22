package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTransferAsset{}

func NewMsgCreateTransferAsset(creator string, AssetSerial string, Receiver string) *MsgCreateTransferAsset {
	return &MsgCreateTransferAsset{
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
	}
}

func (msg *MsgCreateTransferAsset) Route() string {
	return RouterKey
}

func (msg *MsgCreateTransferAsset) Type() string {
	return "CreateTransferAsset"
}

func (msg *MsgCreateTransferAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTransferAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTransferAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTransferAsset{}

func NewMsgUpdateTransferAsset(creator string, id uint64, AssetSerial string, Receiver string) *MsgUpdateTransferAsset {
	return &MsgUpdateTransferAsset{
		Id:          id,
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
	}
}

func (msg *MsgUpdateTransferAsset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTransferAsset) Type() string {
	return "UpdateTransferAsset"
}

func (msg *MsgUpdateTransferAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTransferAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTransferAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateTransferAsset{}

func NewMsgDeleteTransferAsset(creator string, id uint64) *MsgDeleteTransferAsset {
	return &MsgDeleteTransferAsset{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTransferAsset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTransferAsset) Type() string {
	return "DeleteTransferAsset"
}

func (msg *MsgDeleteTransferAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTransferAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTransferAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
