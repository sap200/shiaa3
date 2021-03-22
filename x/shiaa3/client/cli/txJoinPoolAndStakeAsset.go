package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/shiaa3/x/shiaa3/types"
)

func CmdCreateJoinPoolAndStakeAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "join-pool-and-stake-Asset [PoolNo] [AssetSerial]",
		Short: "\njoin a Pool in Club and stake an Asset.If you are not a member! Then  you are registered! \npools available currently are\n1. pool-0 (2 members)\n2. pool-1 (2 members)\n3. pool-2 (3 members)\n4. pool-3 (3 members)\n5. pool-4 (5 members)",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsPoolNo := string(args[0])
			argsAssetSerial := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateJoinPoolAndStakeAsset(clientCtx.GetFromAddress().String(), string(argsPoolNo), string(argsAssetSerial))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateJoinPoolAndStakeAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-JoinPoolAndStakeAsset [id] [PoolNo] [AssetSerial]",
		Short: "Update a JoinPoolAndStakeAsset",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsPoolNo := string(args[1])
			argsAssetSerial := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateJoinPoolAndStakeAsset(clientCtx.GetFromAddress().String(), id, string(argsPoolNo), string(argsAssetSerial))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteJoinPoolAndStakeAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-JoinPoolAndStakeAsset [id] [PoolNo] [AssetSerial]",
		Short: "Delete a JoinPoolAndStakeAsset by id",
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

			msg := types.NewMsgDeleteJoinPoolAndStakeAsset(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
