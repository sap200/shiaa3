package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSentAsset{}

func NewMsgCreateSentAsset(creator string, AssetSerial string, Receiver string, TargetChain string) *MsgCreateSentAsset {
	return &MsgCreateSentAsset{
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}
}

func (msg *MsgCreateSentAsset) Route() string {
	return RouterKey
}

func (msg *MsgCreateSentAsset) Type() string {
	return "CreateSentAsset"
}

func (msg *MsgCreateSentAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSentAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSentAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSentAsset{}

func NewMsgUpdateSentAsset(creator string, id uint64, AssetSerial string, Receiver string, TargetChain string) *MsgUpdateSentAsset {
	return &MsgUpdateSentAsset{
		Id:          id,
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}
}

func (msg *MsgUpdateSentAsset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSentAsset) Type() string {
	return "UpdateSentAsset"
}

func (msg *MsgUpdateSentAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSentAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSentAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateSentAsset{}

func NewMsgDeleteSentAsset(creator string, id uint64) *MsgDeleteSentAsset {
	return &MsgDeleteSentAsset{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteSentAsset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSentAsset) Type() string {
	return "DeleteSentAsset"
}

func (msg *MsgDeleteSentAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSentAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSentAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
