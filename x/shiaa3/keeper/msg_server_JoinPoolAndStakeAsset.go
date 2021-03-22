package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sap200/shiaa3/x/shiaa3/types"
	"github.com/tendermint/tendermint/crypto"
	"strconv"
	assetskeeper "github.com/sap200/shiaa3/x/assets/keeper"
)

func (k msgServer) CreateJoinPoolAndStakeAsset(goCtx context.Context, msg *types.MsgCreateJoinPoolAndStakeAsset) (*types.MsgCreateJoinPoolAndStakeAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// from Address
	// check in the JoinPool Store if no one with given address exists 
	isMember := k.Keeper.IsMember(ctx,msg.Creator)

	// Send the amount from module account to the user account
	moduleAcct := sdk.AccAddress(crypto.AddressHash([]byte(types.ModuleName)))

	// then deduct money and add them to the store
	if !isMember {
		payment, _ := sdk.ParseCoinsNormalized(strconv.FormatInt(int64(types.JOINFEE), 10) + "token")
		// send the tokens
		sdkCreator, err := sdk.AccAddressFromBech32(msg.Creator)
		if err != nil {
			return nil, types.ErrInvalidSender
		}

		if err := k.Keeper.CoinKeeper.SendCoins(ctx, sdkCreator, moduleAcct, payment); err != nil {
			return nil, err
		}

		// Append the member to the store
		member_id := k.Keeper.AppendMembers(ctx, moduleAcct.String(), msg.Creator)

		// ---------------------------------------------------
		// Emit an event saying you are member of Club now TODO
		//--------------------------------------------------
		memberEvent := types.EventMemberOfClub(member_id, moduleAcct.String())
		ctx.EventManager().EmitEvent(memberEvent)

	}

	// check if asset exists
	idAsset := assetskeeper.GetIDFromSerial(msg.AssetSerial)
	hasAsset := k.AssetsKeeper.HasAsset(ctx, idAsset) 

	if !hasAsset {
		return nil, types.ErrInvalidAsset
	}

	// If asset exists check if its owner is the given address string
	assetOwner := k.AssetsKeeper.GetAssetOwner(ctx, idAsset)
	if assetOwner != msg.Creator {
		return nil, types.ErrUnauthorized
	}

	// If yes stake the asset by changing its ownership to the module Account
	asset := k.AssetsKeeper.GetAsset(ctx, idAsset)
	newAsset := asset
	newAsset.Owner = moduleAcct.String()
	k.AssetsKeeper.SetAsset(ctx, newAsset)

	// Generate a new Pentate Shai Ticket
	shaiPlayer := types.NewShai(msg.Creator)
	shaiPlayer.PlayPentate()

	// Check if the pool is full then release the pool by declaring the winner
	if (msg.PoolNo != types.POOL0) && (msg.PoolNo != types.POOL1) && (msg.PoolNo != types.POOL2) && (msg.PoolNo != types.POOL3) && (msg.PoolNo != types.POOL4) {
		return nil, types.ErrInvalidPool
	}

	poolIndex := types.POOL_INDEX[msg.PoolNo]

	// Append to Pool and then check 
	lambdaValue := fmt.Sprintf("%.12f", shaiPlayer.GetLambdaValue())
	k.AppendToCorrespondingPool(ctx, poolIndex, moduleAcct.String(), msg.Creator, lambdaValue)

	// -------------------------------------------------------
	// TODO
	// Emit an event saying your ticket number 
	// -------------------------------------------------------
	ticketEvent := types.EventTicketNumberReceived(msg.Creator, lambdaValue, msg.PoolNo)
	ctx.EventManager().EmitEvent(ticketEvent)

	id := k.AppendJoinPoolAndStakeAsset(
		ctx,
		msg.Creator,
		msg.PoolNo,
		msg.AssetSerial,
	)

	poolCount := k.GetPoolCount(ctx, poolIndex)

	if poolCount >= uint64(types.POOL_CAPACITY[poolIndex]) {
		// Find the winner
		winner, winnerLambda := k.GetWinnerFromPool(ctx, poolIndex)

		// once the winner is found release the pool
		k.ReleasePool(ctx, poolIndex)

		// once the winner is declared transfer assets
		allStakedAssetOfPool := k.Keeper.GetAllStakedSerialForPool(ctx, msg.PoolNo)

		allWinnings := ""

		// change the ownership of all the stakes to winner
		for _, StakeSerialContainers := range allStakedAssetOfPool {
			serial := StakeSerialContainers.AssetSerial
			allWinnings += serial + "|"
			id_Asset_own := assetskeeper.GetIDFromSerial(serial)
			asset := k.AssetsKeeper.GetAsset(ctx, id_Asset_own)
			newAsset := asset
			newAsset.Owner = winner
			k.AssetsKeeper.SetAsset(ctx, newAsset)
		}

		// create a ledger writing the winner
		k.AppendWinners(ctx, moduleAcct.String(), winner, msg.PoolNo, allWinnings)

		// ------------------------------------------------------
		// Emit an event declaring winner
		// -------------------------------------------------------
		winnerEvent := types.EventWinnerDeclared(winner, allWinnings, msg.PoolNo, fmt.Sprintf("%v", winnerLambda))
		ctx.EventManager().EmitEvent(winnerEvent)
	}

	

	return &types.MsgCreateJoinPoolAndStakeAssetResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateJoinPoolAndStakeAsset(goCtx context.Context, msg *types.MsgUpdateJoinPoolAndStakeAsset) (*types.MsgUpdateJoinPoolAndStakeAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var JoinPoolAndStakeAsset = types.JoinPoolAndStakeAsset{
		Creator:     msg.Creator,
		Id:          msg.Id,
		PoolNo:      msg.PoolNo,
		AssetSerial: msg.AssetSerial,
	}

	// Checks that the element exists
	if !k.HasJoinPoolAndStakeAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetJoinPoolAndStakeAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetJoinPoolAndStakeAsset(ctx, JoinPoolAndStakeAsset)

	return &types.MsgUpdateJoinPoolAndStakeAssetResponse{}, nil
}

func (k msgServer) DeleteJoinPoolAndStakeAsset(goCtx context.Context, msg *types.MsgDeleteJoinPoolAndStakeAsset) (*types.MsgDeleteJoinPoolAndStakeAssetResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasJoinPoolAndStakeAsset(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetJoinPoolAndStakeAssetOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveJoinPoolAndStakeAsset(ctx, msg.Id)

	return &types.MsgDeleteJoinPoolAndStakeAssetResponse{}, nil
}

func (k msgServer) GetPoolCount(ctx sdk.Context, poolIndex int) uint64 {
	count := uint64(0)
	if poolIndex == 0 {
		count =  k.Keeper.GetPool0TicketCount(ctx)
	} else if poolIndex == 1 {
		count =  k.Keeper.GetPool1TicketCount(ctx)
	} else if poolIndex == 2 {
		count =  k.Keeper.GetPool2TicketCount(ctx)
	} else if poolIndex == 3 {
		count =  k.Keeper.GetPool3TicketCount(ctx)
	} else if poolIndex == 4 {
		count =  k.Keeper.GetPool4TicketCount(ctx)
	}

	return count
}

func (k msgServer) GetWinnerFromPool(ctx sdk.Context, poolIndex int) (string, float64) {
	winner := ""
	if poolIndex == 0 {
		allTicket := k.Keeper.GetAllPool0Ticket(ctx)
		winner = allTicket[0].AddressString
		leastLambda,_ := strconv.ParseFloat(allTicket[0].LambdaValue, 64)
		for _, ticket := range allTicket {
			ticketLambda, _ := strconv.ParseFloat(ticket.LambdaValue, 64)
			// Find the least lambda
			if	ticketLambda  < leastLambda {
				leastLambda = ticketLambda
				winner = ticket.AddressString
			}
		}
		
		return winner, leastLambda

	} else if poolIndex == 1 {
		allTicket := k.Keeper.GetAllPool1Ticket(ctx)
		winner = allTicket[0].AddressString
		leastLambda,_ := strconv.ParseFloat(allTicket[0].LambdaValue, 64)
		for _, ticket := range allTicket {
			ticketLambda, _ := strconv.ParseFloat(ticket.LambdaValue, 64)
			// Find the least lambda
			if	ticketLambda  < leastLambda {
				leastLambda = ticketLambda
				winner = ticket.AddressString
			}
		}
		
		return winner, leastLambda

	} else if poolIndex == 2 {
		allTicket := k.Keeper.GetAllPool2Ticket(ctx)
		winner = allTicket[0].AddressString
		leastLambda,_ := strconv.ParseFloat(allTicket[0].LambdaValue, 64)
		for _, ticket := range allTicket {
			ticketLambda, _ := strconv.ParseFloat(ticket.LambdaValue, 64)
			// Find the least lambda
			if	ticketLambda  < leastLambda {
				leastLambda = ticketLambda
				winner = ticket.AddressString
			}
		}
		
		return winner, leastLambda

	}  else if poolIndex == 3 {
		allTicket := k.Keeper.GetAllPool3Ticket(ctx)
		winner = allTicket[0].AddressString
		leastLambda,_ := strconv.ParseFloat(allTicket[0].LambdaValue, 64)
		for _, ticket := range allTicket {
			ticketLambda, _ := strconv.ParseFloat(ticket.LambdaValue, 64)
			// Find the least lambda
			if	ticketLambda  < leastLambda {
				leastLambda = ticketLambda
				winner = ticket.AddressString
			}
		}
		
		return winner, leastLambda

	} else if poolIndex == 4 {
		allTicket := k.Keeper.GetAllPool4Ticket(ctx)
		winner = allTicket[0].AddressString
		leastLambda,_ := strconv.ParseFloat(allTicket[0].LambdaValue, 64)
		for _, ticket := range allTicket {
			ticketLambda, _ := strconv.ParseFloat(ticket.LambdaValue, 64)
			// Find the least lambda
			if	ticketLambda  < leastLambda {
				leastLambda = ticketLambda
				winner = ticket.AddressString
			}
		}
		
		return winner, leastLambda
	}

	return winner, 0.0

}

func (k msgServer) ReleasePool(ctx sdk.Context, poolIndex int) {
	if poolIndex == 0 {
		// Get list of all the tickets
		allTicket := k.Keeper.GetAllPool0Ticket(ctx)
		for _, ticket := range allTicket {
			k.Keeper.RemovePool0Ticket(ctx, ticket.Id)
		}

	} else if poolIndex == 1 {
		// Get list of all the tickets
		allTicket := k.Keeper.GetAllPool1Ticket(ctx)
		for _, ticket := range allTicket {
			k.Keeper.RemovePool1Ticket(ctx, ticket.Id)
		}
		
 	} else if poolIndex == 2 {
		 // Get list of all the tickets
		allTicket := k.Keeper.GetAllPool2Ticket(ctx)
		for _, ticket := range allTicket {
			k.Keeper.RemovePool2Ticket(ctx, ticket.Id)
		}
		
	 } else if poolIndex == 3 {
		 // Get list of all the tickets
		allTicket := k.Keeper.GetAllPool3Ticket(ctx)
		for _, ticket := range allTicket {
			k.Keeper.RemovePool3Ticket(ctx, ticket.Id)
		}
		
	 } else if poolIndex == 4 {
		 // Get list of all the tickets
		allTicket := k.Keeper.GetAllPool4Ticket(ctx)
		for _, ticket := range allTicket {
			k.Keeper.RemovePool4Ticket(ctx, ticket.Id)
		}
		
	 }

}

func (k msgServer) AppendToCorrespondingPool(ctx sdk.Context, poolIndex int, creator, addressString, lambdaValue string) {
	if poolIndex == 0 {
		k.Keeper.AppendPool0Ticket(ctx, creator, addressString, lambdaValue)

	} else if poolIndex == 1 {
		k.Keeper.AppendPool1Ticket(ctx, creator, addressString, lambdaValue)

	} else if poolIndex == 2 {
		k.Keeper.AppendPool2Ticket(ctx, creator, addressString, lambdaValue)

	} else if poolIndex == 3 {
		k.Keeper.AppendPool3Ticket(ctx, creator, addressString, lambdaValue)

	} else if poolIndex == 4 {
		k.Keeper.AppendPool4Ticket(ctx, creator, addressString, lambdaValue)

	}
}
