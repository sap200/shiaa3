package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/assets module sentinel errors
var (
	ErrSample               = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidPacketTimeout = sdkerrors.Register(ModuleName, 1500, "invalid packet timeout")
	ErrInvalidVersion       = sdkerrors.Register(ModuleName, 1501, "invalid version")
	ErrUnauthorizedTransfer = sdkerrors.Register(ModuleName, 4501, "Message Creator and Asset Owner unmatched! Unauthorized")
	ErrNonExistingAsset     = sdkerrors.Register(ModuleName, 4502, "Asset with requested ID is not found")
	ErrOwnerIsReceiver      = sdkerrors.Register(ModuleName, 4503, "Owner of the Asset is Receiver")
	ErrInvalidReceiver      = sdkerrors.Register(ModuleName, 4504, "Receiver address cannot be parsed")
	ErrInvalidSender        = sdkerrors.Register(ModuleName, 4505, "Sender address cannot be parsed")
	ErrDuplicateAsset       = sdkerrors.Register(ModuleName, 4506, "Duplicate Asset")
	ErrNonExistingAccount   = sdkerrors.Register(ModuleName, 4507, "Account not in the keyring")
	ErrInvalidAsset         = sdkerrors.Register(ModuleName, 4508, "Invalid Asset")
)
