package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/shiaa3 module sentinel errors
var (
	ErrSample        = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidSender = sdkerrors.Register(ModuleName, 5500, "Invalid Sender Address. Unable to Parse")
	ErrInvalidAsset  = sdkerrors.Register(ModuleName, 5501, "Invalid Asset")
	ErrUnauthorized  = sdkerrors.Register(ModuleName, 5502, "Unauthorized. Creator of message is not owner of the asset")
	ErrInvalidPool   = sdkerrors.Register(ModuleName, 5503, "Pool Id is invalid")
)
