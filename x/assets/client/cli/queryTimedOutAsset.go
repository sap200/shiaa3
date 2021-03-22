package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/assets/types"
	"github.com/spf13/cobra"
)

func CmdListTimedOutAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-TimedOutAsset",
		Short: "list all TimedOutAsset",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllTimedOutAssetRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.TimedOutAssetAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowTimedOutAsset() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-TimedOutAsset [id]",
		Short: "shows a TimedOutAsset",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetTimedOutAssetRequest{
				Id: id,
			}

			res, err := queryClient.TimedOutAsset(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
