// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateMembers } from "./types/shiaa3/tx";
import { MsgUpdatePool3Ticket } from "./types/shiaa3/tx";
import { MsgCreatePool4Ticket } from "./types/shiaa3/tx";
import { MsgCreateWinners } from "./types/shiaa3/tx";
import { MsgDeletePool1Ticket } from "./types/shiaa3/tx";
import { MsgCreateMembers } from "./types/shiaa3/tx";
import { MsgCreatePool2Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool2Ticket } from "./types/shiaa3/tx";
import { MsgDeleteWinners } from "./types/shiaa3/tx";
import { MsgDeletePool3Ticket } from "./types/shiaa3/tx";
import { MsgDeletePool0Ticket } from "./types/shiaa3/tx";
import { MsgCreatePool0Ticket } from "./types/shiaa3/tx";
import { MsgCreatePool1Ticket } from "./types/shiaa3/tx";
import { MsgUpdateWinners } from "./types/shiaa3/tx";
import { MsgUpdateJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
import { MsgUpdatePool1Ticket } from "./types/shiaa3/tx";
import { MsgDeletePool4Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool0Ticket } from "./types/shiaa3/tx";
import { MsgDeletePool2Ticket } from "./types/shiaa3/tx";
import { MsgUpdatePool4Ticket } from "./types/shiaa3/tx";
import { MsgDeleteMembers } from "./types/shiaa3/tx";
import { MsgCreatePool3Ticket } from "./types/shiaa3/tx";
import { MsgDeleteJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
import { MsgCreateJoinPoolAndStakeAsset } from "./types/shiaa3/tx";
const types = [
    ["/sap200.shiaa3.shiaa3.MsgUpdateMembers", MsgUpdateMembers],
    ["/sap200.shiaa3.shiaa3.MsgUpdatePool3Ticket", MsgUpdatePool3Ticket],
    ["/sap200.shiaa3.shiaa3.MsgCreatePool4Ticket", MsgCreatePool4Ticket],
    ["/sap200.shiaa3.shiaa3.MsgCreateWinners", MsgCreateWinners],
    ["/sap200.shiaa3.shiaa3.MsgDeletePool1Ticket", MsgDeletePool1Ticket],
    ["/sap200.shiaa3.shiaa3.MsgCreateMembers", MsgCreateMembers],
    ["/sap200.shiaa3.shiaa3.MsgCreatePool2Ticket", MsgCreatePool2Ticket],
    ["/sap200.shiaa3.shiaa3.MsgUpdatePool2Ticket", MsgUpdatePool2Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeleteWinners", MsgDeleteWinners],
    ["/sap200.shiaa3.shiaa3.MsgDeletePool3Ticket", MsgDeletePool3Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeletePool0Ticket", MsgDeletePool0Ticket],
    ["/sap200.shiaa3.shiaa3.MsgCreatePool0Ticket", MsgCreatePool0Ticket],
    ["/sap200.shiaa3.shiaa3.MsgCreatePool1Ticket", MsgCreatePool1Ticket],
    ["/sap200.shiaa3.shiaa3.MsgUpdateWinners", MsgUpdateWinners],
    ["/sap200.shiaa3.shiaa3.MsgUpdateJoinPoolAndStakeAsset", MsgUpdateJoinPoolAndStakeAsset],
    ["/sap200.shiaa3.shiaa3.MsgUpdatePool1Ticket", MsgUpdatePool1Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeletePool4Ticket", MsgDeletePool4Ticket],
    ["/sap200.shiaa3.shiaa3.MsgUpdatePool0Ticket", MsgUpdatePool0Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeletePool2Ticket", MsgDeletePool2Ticket],
    ["/sap200.shiaa3.shiaa3.MsgUpdatePool4Ticket", MsgUpdatePool4Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeleteMembers", MsgDeleteMembers],
    ["/sap200.shiaa3.shiaa3.MsgCreatePool3Ticket", MsgCreatePool3Ticket],
    ["/sap200.shiaa3.shiaa3.MsgDeleteJoinPoolAndStakeAsset", MsgDeleteJoinPoolAndStakeAsset],
    ["/sap200.shiaa3.shiaa3.MsgCreateJoinPoolAndStakeAsset", MsgCreateJoinPoolAndStakeAsset],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgUpdateMembers: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdateMembers", value: data }),
        msgUpdatePool3Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdatePool3Ticket", value: data }),
        msgCreatePool4Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreatePool4Ticket", value: data }),
        msgCreateWinners: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreateWinners", value: data }),
        msgDeletePool1Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeletePool1Ticket", value: data }),
        msgCreateMembers: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreateMembers", value: data }),
        msgCreatePool2Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreatePool2Ticket", value: data }),
        msgUpdatePool2Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdatePool2Ticket", value: data }),
        msgDeleteWinners: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeleteWinners", value: data }),
        msgDeletePool3Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeletePool3Ticket", value: data }),
        msgDeletePool0Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeletePool0Ticket", value: data }),
        msgCreatePool0Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreatePool0Ticket", value: data }),
        msgCreatePool1Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreatePool1Ticket", value: data }),
        msgUpdateWinners: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdateWinners", value: data }),
        msgUpdateJoinPoolAndStakeAsset: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdateJoinPoolAndStakeAsset", value: data }),
        msgUpdatePool1Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdatePool1Ticket", value: data }),
        msgDeletePool4Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeletePool4Ticket", value: data }),
        msgUpdatePool0Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdatePool0Ticket", value: data }),
        msgDeletePool2Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeletePool2Ticket", value: data }),
        msgUpdatePool4Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgUpdatePool4Ticket", value: data }),
        msgDeleteMembers: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeleteMembers", value: data }),
        msgCreatePool3Ticket: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreatePool3Ticket", value: data }),
        msgDeleteJoinPoolAndStakeAsset: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgDeleteJoinPoolAndStakeAsset", value: data }),
        msgCreateJoinPoolAndStakeAsset: (data) => ({ typeUrl: "/sap200.shiaa3.shiaa3.MsgCreateJoinPoolAndStakeAsset", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
