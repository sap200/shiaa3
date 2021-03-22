package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func CmdCreateWinners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-Winners [AddressString] [PoolNo] [Winnings]",
		Short: "Creates a new Winners",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAddressString := string(args[0])
			argsPoolNo := string(args[1])
			argsWinnings := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateWinners(clientCtx.GetFromAddress().String(), string(argsAddressString), string(argsPoolNo), string(argsWinnings))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateWinners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-Winners [id] [AddressString] [PoolNo] [Winnings]",
		Short: "Update a Winners",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAddressString := string(args[1])
			argsPoolNo := string(args[2])
			argsWinnings := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateWinners(clientCtx.GetFromAddress().String(), id, string(argsAddressString), string(argsPoolNo), string(argsWinnings))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteWinners() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-Winners [id] [AddressString] [PoolNo] [Winnings]",
		Short: "Delete a Winners by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteWinners(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
