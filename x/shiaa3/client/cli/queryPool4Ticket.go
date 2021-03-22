package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"github.com/spf13/cobra"
)

func CmdListPool4Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-Pool4Ticket",
		Short: "list all Pool4Ticket",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPool4TicketRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.Pool4TicketAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPool4Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-Pool4Ticket [id]",
		Short: "shows a Pool4Ticket",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetPool4TicketRequest{
				Id: id,
			}

			res, err := queryClient.Pool4Ticket(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
