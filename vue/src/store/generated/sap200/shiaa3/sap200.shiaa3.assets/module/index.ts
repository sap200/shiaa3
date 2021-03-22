// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendIbcAsset } from "./types/assets/tx";
import { MsgDeleteTransferAsset } from "./types/assets/tx";
import { MsgUpdateSentAsset } from "./types/assets/tx";
import { MsgUpdateAsset } from "./types/assets/tx";
import { MsgCreateTransferAsset } from "./types/assets/tx";
import { MsgDeleteTimedOutAsset } from "./types/assets/tx";
import { MsgCreateAsset } from "./types/assets/tx";
import { MsgDeleteSentAsset } from "./types/assets/tx";
import { MsgCreateTimedOutAsset } from "./types/assets/tx";
import { MsgCreateSentAsset } from "./types/assets/tx";
import { MsgDeleteAsset } from "./types/assets/tx";
import { MsgUpdateTransferAsset } from "./types/assets/tx";
import { MsgUpdateTimedOutAsset } from "./types/assets/tx";


const types = [
  ["/sap200.shiaa3.assets.MsgSendIbcAsset", MsgSendIbcAsset],
  ["/sap200.shiaa3.assets.MsgDeleteTransferAsset", MsgDeleteTransferAsset],
  ["/sap200.shiaa3.assets.MsgUpdateSentAsset", MsgUpdateSentAsset],
  ["/sap200.shiaa3.assets.MsgUpdateAsset", MsgUpdateAsset],
  ["/sap200.shiaa3.assets.MsgCreateTransferAsset", MsgCreateTransferAsset],
  ["/sap200.shiaa3.assets.MsgDeleteTimedOutAsset", MsgDeleteTimedOutAsset],
  ["/sap200.shiaa3.assets.MsgCreateAsset", MsgCreateAsset],
  ["/sap200.shiaa3.assets.MsgDeleteSentAsset", MsgDeleteSentAsset],
  ["/sap200.shiaa3.assets.MsgCreateTimedOutAsset", MsgCreateTimedOutAsset],
  ["/sap200.shiaa3.assets.MsgCreateSentAsset", MsgCreateSentAsset],
  ["/sap200.shiaa3.assets.MsgDeleteAsset", MsgDeleteAsset],
  ["/sap200.shiaa3.assets.MsgUpdateTransferAsset", MsgUpdateTransferAsset],
  ["/sap200.shiaa3.assets.MsgUpdateTimedOutAsset", MsgUpdateTimedOutAsset],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgSendIbcAsset: (data: MsgSendIbcAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgSendIbcAsset", value: data }),
    msgDeleteTransferAsset: (data: MsgDeleteTransferAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgDeleteTransferAsset", value: data }),
    msgUpdateSentAsset: (data: MsgUpdateSentAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgUpdateSentAsset", value: data }),
    msgUpdateAsset: (data: MsgUpdateAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgUpdateAsset", value: data }),
    msgCreateTransferAsset: (data: MsgCreateTransferAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgCreateTransferAsset", value: data }),
    msgDeleteTimedOutAsset: (data: MsgDeleteTimedOutAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgDeleteTimedOutAsset", value: data }),
    msgCreateAsset: (data: MsgCreateAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgCreateAsset", value: data }),
    msgDeleteSentAsset: (data: MsgDeleteSentAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgDeleteSentAsset", value: data }),
    msgCreateTimedOutAsset: (data: MsgCreateTimedOutAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgCreateTimedOutAsset", value: data }),
    msgCreateSentAsset: (data: MsgCreateSentAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgCreateSentAsset", value: data }),
    msgDeleteAsset: (data: MsgDeleteAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgDeleteAsset", value: data }),
    msgUpdateTransferAsset: (data: MsgUpdateTransferAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgUpdateTransferAsset", value: data }),
    msgUpdateTimedOutAsset: (data: MsgUpdateTimedOutAsset): EncodeObject => ({ typeUrl: "/sap200.shiaa3.assets.MsgUpdateTimedOutAsset", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
