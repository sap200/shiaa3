package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sap200/shiaa3/x/assets/types"
)

func CmdCreateTransferAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-Asset [AssetSerial] [Receiver]",
		Short: "Send your asset to other users and get 20% of the asset-value as a reward ",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAssetSerial := string(args[0])
			argsReceiver := string(args[1])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateTransferAsset(clientCtx.GetFromAddress().String(), string(argsAssetSerial), string(argsReceiver))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateTransferAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-TransferAsset [id] [AssetSerial] [Receiver]",
		Short: "Update a TransferAsset",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAssetSerial := string(args[1])
			argsReceiver := string(args[2])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateTransferAsset(clientCtx.GetFromAddress().String(), id, string(argsAssetSerial), string(argsReceiver))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteTransferAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-TransferAsset [id] [AssetSerial] [Receiver]",
		Short: "Delete a TransferAsset by id",
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

			msg := types.NewMsgDeleteTransferAsset(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
