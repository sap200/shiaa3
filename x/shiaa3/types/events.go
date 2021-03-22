package types

import (
	"github.com/cosmos/cosmos-sdk/types"
	"fmt"
)

// Member of Pool event
func EventMemberOfClub(id uint64, Address string) types.Event {
	return types.NewEvent("Member_Of_Club", 
	types.NewAttribute("Membership ID", fmt.Sprintf("%v", id)), 
	types.NewAttribute("Address Added", Address))
}

// Ticket number event
func EventTicketNumberReceived(Address string, lambdaValue string, poolName string) types.Event {
	return types.NewEvent("Ticket_Generated", 
	types.NewAttribute("Ticket Owner's Address", Address), 
	types.NewAttribute("LambdaValue", lambdaValue),
	types.NewAttribute("Pool Name", poolName))
}

func EventWinnerDeclared(WinnerAddress, AssetsOwned, PoolNo, winnerLambda string) types.Event {
	return types.NewEvent("Winner_Declared", 
	types.NewAttribute("Winner Address", WinnerAddress), 
	types.NewAttribute("Assets Owned", AssetsOwned), 
	types.NewAttribute("Pool Name", PoolNo), 
	types.NewAttribute("Winner Lambda Value", winnerLambda))
}	