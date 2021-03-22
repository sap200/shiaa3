package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSendIbcAsset{}

func NewMsgSendIbcAsset(
	sender string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	AssetSerial string,
	Receiver string,
) *MsgSendIbcAsset {
	return &MsgSendIbcAsset{
		Sender:           sender,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		AssetSerial:      AssetSerial,
		Receiver:         Receiver,
	}
}

func (msg *MsgSendIbcAsset) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcAsset) Type() string {
	return "SendIbcAsset"
}

func (msg *MsgSendIbcAsset) GetSigners() []sdk.AccAddress {
	sender, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{sender}
}

func (msg *MsgSendIbcAsset) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcAsset) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Sender)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid sender address (%s)", err)
	}
	return nil
}
