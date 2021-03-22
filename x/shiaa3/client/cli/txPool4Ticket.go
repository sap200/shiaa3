package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func CmdCreatePool4Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-Pool4Ticket [AddressString] [LambdaValue]",
		Short: "Creates a new Pool4Ticket",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAddressString := string(args[0])
			argsLambdaValue := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreatePool4Ticket(clientCtx.GetFromAddress().String(), string(argsAddressString), string(argsLambdaValue))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdatePool4Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-Pool4Ticket [id] [AddressString] [LambdaValue]",
		Short: "Update a Pool4Ticket",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAddressString := string(args[1])
			argsLambdaValue := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePool4Ticket(clientCtx.GetFromAddress().String(), id, string(argsAddressString), string(argsLambdaValue))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeletePool4Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-Pool4Ticket [id] [AddressString] [LambdaValue]",
		Short: "Delete a Pool4Ticket by id",
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

			msg := types.NewMsgDeletePool4Ticket(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
