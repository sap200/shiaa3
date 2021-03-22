package cli

import (
	"fmt"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/shiaa3/types"
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

	// cmd.AddCommand(CmdCreateWinners())
	// cmd.AddCommand(CmdUpdateWinners())
	// cmd.AddCommand(CmdDeleteWinners())

	// cmd.AddCommand(CmdCreateMembers())
	// cmd.AddCommand(CmdUpdateMembers())
	// cmd.AddCommand(CmdDeleteMembers())

	// cmd.AddCommand(CmdCreatePool4Ticket())
	// cmd.AddCommand(CmdUpdatePool4Ticket())
	// cmd.AddCommand(CmdDeletePool4Ticket())

	// cmd.AddCommand(CmdCreatePool3Ticket())
	// cmd.AddCommand(CmdUpdatePool3Ticket())
	// cmd.AddCommand(CmdDeletePool3Ticket())

	// cmd.AddCommand(CmdCreatePool2Ticket())
	// cmd.AddCommand(CmdUpdatePool2Ticket())
	// cmd.AddCommand(CmdDeletePool2Ticket())

	// cmd.AddCommand(CmdCreatePool1Ticket())
	// cmd.AddCommand(CmdUpdatePool1Ticket())
	// cmd.AddCommand(CmdDeletePool1Ticket())

	// cmd.AddCommand(CmdCreatePool0Ticket())
	// cmd.AddCommand(CmdUpdatePool0Ticket())
	// cmd.AddCommand(CmdDeletePool0Ticket())

	cmd.AddCommand(CmdCreateJoinPoolAndStakeAsset())
	// cmd.AddCommand(CmdUpdateJoinPoolAndStakeAsset())
	// cmd.AddCommand(CmdDeleteJoinPoolAndStakeAsset())

	return cmd
}
