package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"github.com/spf13/cobra"
)

func CmdListPool1Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-Pool1Ticket",
		Short: "list all Pool1Ticket",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllPool1TicketRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.Pool1TicketAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowPool1Ticket() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-Pool1Ticket [id]",
		Short: "shows a Pool1Ticket",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			params := &types.QueryGetPool1TicketRequest{
				Id: id,
			}

			res, err := queryClient.Pool1Ticket(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
