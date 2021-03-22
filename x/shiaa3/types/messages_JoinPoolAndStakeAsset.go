package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateJoinPoolAndStakeAsset{}

func NewMsgCreateJoinPoolAndStakeAsset(creator string, PoolNo string, AssetSerial string) *MsgCreateJoinPoolAndStakeAsset {
	return &MsgCreateJoinPoolAndStakeAsset{
		Creator:     creator,
		PoolNo:      PoolNo,
		AssetSerial: AssetSerial,
	}
}

func (msg *MsgCreateJoinPoolAndStakeAsset) Route() string {
	return RouterKey
}

func (msg *MsgCreateJoinPoolAndStakeAsset) Type() string {
	return "CreateJoinPoolAndStakeAsset"
}

func (msg *MsgCreateJoinPoolAndStakeAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateJoinPoolAndStakeAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateJoinPoolAndStakeAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateJoinPoolAndStakeAsset{}

func NewMsgUpdateJoinPoolAndStakeAsset(creator string, id uint64, PoolNo string, AssetSerial string) *MsgUpdateJoinPoolAndStakeAsset {
	return &MsgUpdateJoinPoolAndStakeAsset{
		Id:          id,
		Creator:     creator,
		PoolNo:      PoolNo,
		AssetSerial: AssetSerial,
	}
}

func (msg *MsgUpdateJoinPoolAndStakeAsset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateJoinPoolAndStakeAsset) Type() string {
	return "UpdateJoinPoolAndStakeAsset"
}

func (msg *MsgUpdateJoinPoolAndStakeAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateJoinPoolAndStakeAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateJoinPoolAndStakeAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateJoinPoolAndStakeAsset{}

func NewMsgDeleteJoinPoolAndStakeAsset(creator string, id uint64) *MsgDeleteJoinPoolAndStakeAsset {
	return &MsgDeleteJoinPoolAndStakeAsset{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteJoinPoolAndStakeAsset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteJoinPoolAndStakeAsset) Type() string {
	return "DeleteJoinPoolAndStakeAsset"
}

func (msg *MsgDeleteJoinPoolAndStakeAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteJoinPoolAndStakeAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteJoinPoolAndStakeAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
