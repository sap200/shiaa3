package cli

import (
	"fmt"
	"time"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/assets/types"
)

var (
	DefaultRelativePacketTimeoutTimestamp = uint64((time.Duration(10) * time.Minute).Nanoseconds())
)

const (
	flagPacketTimeoutTimestamp = "packet-timeout-timestamp"
)

// GetTxCmd returns the transaction commands for this module
func GetTxCmd() *cobra.Command {
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("%s transactions subcommands", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1
	cmd.AddCommand(CmdSendIbcAsset())

	// cmd.AddCommand(CmdCreateTimedOutAsset())
	// cmd.AddCommand(CmdUpdateTimedOutAsset())
	// cmd.AddCommand(CmdDeleteTimedOutAsset())

	// cmd.AddCommand(CmdCreateSentAsset())
	// cmd.AddCommand(CmdUpdateSentAsset())
	// cmd.AddCommand(CmdDeleteSentAsset())

	cmd.AddCommand(CmdCreateTransferAsset())
	// cmd.AddCommand(CmdUpdateTransferAsset())
	// cmd.AddCommand(CmdDeleteTransferAsset())

	cmd.AddCommand(CmdCreateAsset())
	// cmd.AddCommand(CmdUpdateAsset())
	cmd.AddCommand(CmdDeleteAsset())

	return cmd
}
