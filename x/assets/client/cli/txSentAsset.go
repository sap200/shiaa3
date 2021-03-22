package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/shiaa3/x/assets/types"
)

func CmdCreateSentAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-SentAsset [AssetSerial] [Receiver] [TargetChain]",
		Short: "Creates a new SentAsset",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAssetSerial := string(args[0])
			argsReceiver := string(args[1])
			argsTargetChain := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateSentAsset(clientCtx.GetFromAddress().String(), string(argsAssetSerial), string(argsReceiver), string(argsTargetChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateSentAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-SentAsset [id] [AssetSerial] [Receiver] [TargetChain]",
		Short: "Update a SentAsset",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAssetSerial := string(args[1])
			argsReceiver := string(args[2])
			argsTargetChain := string(args[3])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateSentAsset(clientCtx.GetFromAddress().String(), id, string(argsAssetSerial), string(argsReceiver), string(argsTargetChain))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteSentAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-SentAsset [id] [AssetSerial] [Receiver] [TargetChain]",
		Short: "Delete a SentAsset by id",
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

			msg := types.NewMsgDeleteSentAsset(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
