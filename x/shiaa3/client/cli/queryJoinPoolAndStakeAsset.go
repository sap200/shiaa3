package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"github.com/spf13/cobra"
)

func CmdListJoinPoolAndStakeAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-JoinPoolAndStakeAsset",
		Short: "list all JoinPoolAndStakeAsset",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllJoinPoolAndStakeAssetRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.JoinPoolAndStakeAssetAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowJoinPoolAndStakeAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-JoinPoolAndStakeAsset [id]",
		Short: "shows a JoinPoolAndStakeAsset",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetJoinPoolAndStakeAssetRequest{
				Id: id,
			}

			res, err := queryClient.JoinPoolAndStakeAsset(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
