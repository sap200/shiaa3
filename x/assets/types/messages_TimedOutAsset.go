package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateTimedOutAsset{}

func NewMsgCreateTimedOutAsset(creator string, AssetSerial string, Receiver string, TargetChain string) *MsgCreateTimedOutAsset {
	return &MsgCreateTimedOutAsset{
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}
}

func (msg *MsgCreateTimedOutAsset) Route() string {
	return RouterKey
}

func (msg *MsgCreateTimedOutAsset) Type() string {
	return "CreateTimedOutAsset"
}

func (msg *MsgCreateTimedOutAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTimedOutAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTimedOutAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateTimedOutAsset{}

func NewMsgUpdateTimedOutAsset(creator string, id uint64, AssetSerial string, Receiver string, TargetChain string) *MsgUpdateTimedOutAsset {
	return &MsgUpdateTimedOutAsset{
		Id:          id,
		Creator:     creator,
		AssetSerial: AssetSerial,
		Receiver:    Receiver,
		TargetChain: TargetChain,
	}
}

func (msg *MsgUpdateTimedOutAsset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateTimedOutAsset) Type() string {
	return "UpdateTimedOutAsset"
}

func (msg *MsgUpdateTimedOutAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateTimedOutAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateTimedOutAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateTimedOutAsset{}

func NewMsgDeleteTimedOutAsset(creator string, id uint64) *MsgDeleteTimedOutAsset {
	return &MsgDeleteTimedOutAsset{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteTimedOutAsset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteTimedOutAsset) Type() string {
	return "DeleteTimedOutAsset"
}

func (msg *MsgDeleteTimedOutAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteTimedOutAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteTimedOutAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
