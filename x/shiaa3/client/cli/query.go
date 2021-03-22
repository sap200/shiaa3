package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/sap200/shiaa3/x/shiaa3/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group shiaa3 queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdListWinners())
	cmd.AddCommand(CmdShowWinners())

	cmd.AddCommand(CmdListMembers())
	cmd.AddCommand(CmdShowMembers())

	cmd.AddCommand(CmdListPool4Ticket())
	cmd.AddCommand(CmdShowPool4Ticket())

	cmd.AddCommand(CmdListPool3Ticket())
	cmd.AddCommand(CmdShowPool3Ticket())

	cmd.AddCommand(CmdListPool2Ticket())
	cmd.AddCommand(CmdShowPool2Ticket())

	cmd.AddCommand(CmdListPool1Ticket())
	cmd.AddCommand(CmdShowPool1Ticket())

	cmd.AddCommand(CmdListPool0Ticket())
	cmd.AddCommand(CmdShowPool0Ticket())

	cmd.AddCommand(CmdListJoinPoolAndStakeAsset())
	cmd.AddCommand(CmdShowJoinPoolAndStakeAsset())

	return cmd
}
