package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateAsset{}

func NewMsgCreateAsset(creator string, Serial string, Name string, AssetType int32, Tokens int32, Owner string) *MsgCreateAsset {
	return &MsgCreateAsset{
		Creator:   creator,
		Serial:    Serial,
		Name:      Name,
		AssetType: AssetType,
		Tokens:    Tokens,
		Owner:     Owner,
	}
}

func (msg *MsgCreateAsset) Route() string {
	return RouterKey
}

func (msg *MsgCreateAsset) Type() string {
	return "CreateAsset"
}

func (msg *MsgCreateAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateAsset{}

func NewMsgUpdateAsset(creator string, id uint64, Serial string, Name string, AssetType int32, Tokens int32, Owner string) *MsgUpdateAsset {
	return &MsgUpdateAsset{
		Id:        id,
		Creator:   creator,
		Serial:    Serial,
		Name:      Name,
		AssetType: AssetType,
		Tokens:    Tokens,
		Owner:     Owner,
	}
}

func (msg *MsgUpdateAsset) Route() string {
	return RouterKey
}

func (msg *MsgUpdateAsset) Type() string {
	return "UpdateAsset"
}

func (msg *MsgUpdateAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgCreateAsset{}

func NewMsgDeleteAsset(creator string, id uint64) *MsgDeleteAsset {
	return &MsgDeleteAsset{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteAsset) Route() string {
	return RouterKey
}

func (msg *MsgDeleteAsset) Type() string {
	return "DeleteAsset"
}

func (msg *MsgDeleteAsset) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
