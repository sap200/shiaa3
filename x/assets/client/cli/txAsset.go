package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/google/uuid"
	"github.com/sap200/shiaa3/x/assets/keeper"
	"github.com/sap200/shiaa3/x/assets/types"
	"strings"
)

func CmdCreateAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "buy-Asset [AssetType]",
		Short: "Buy an Asset from Asset Store that contains infinite amount of assets.\nAsset types are\n0 - CAMEL (50 TOKEN)\n1 - HOUSE (200 TOKEN)\n2 - FOSSIL NECKLACE (100 TOKEN)\n3 - CERAMIC PLATE (10 TOKEN)\n4 - TERACOTTA LAMP (5 TOKEN)",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAssetType, _ := strconv.ParseInt(args[0], 10, 64)
			argsName := types.NAME_OF[argsAssetType]
			argsSerial := argsName + uuid.New().String()
			argsTokens := types.PRICE_OF[argsAssetType]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			argsOwner := clientCtx.GetFromAddress().String()

			msg := types.NewMsgCreateAsset(clientCtx.GetFromAddress().String(), string(argsSerial), string(argsName), int32(argsAssetType), int32(argsTokens), string(argsOwner))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-Asset [id] [Serial] [Name] [AssetType] [Tokens] [Owner]",
		Short: "Update a Asset",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsSerial := string(args[1])
			argsName := string(args[2])
			argsAssetType, _ := strconv.ParseInt(args[3], 10, 64)
			argsTokens, _ := strconv.ParseInt(args[4], 10, 64)
			argsOwner := string(args[5])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateAsset(clientCtx.GetFromAddress().String(), id, string(argsSerial), string(argsName), int32(argsAssetType), int32(argsTokens), string(argsOwner))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "burn-Asset [Serial]",
		Short: "Burns an Asset by serial, It costs money as burning is not easy !",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			serial := strings.TrimSpace(args[0])
			id := keeper.GetIDFromSerial(serial)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteAsset(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
