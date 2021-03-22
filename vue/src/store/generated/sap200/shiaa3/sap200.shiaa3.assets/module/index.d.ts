import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateTimedOutAsset } from "./types/assets/tx";
import { MsgCreateSentAsset } from "./types/assets/tx";
import { MsgDeleteAsset } from "./types/assets/tx";
import { MsgUpdateSentAsset } from "./types/assets/tx";
import { MsgDeleteSentAsset } from "./types/assets/tx";
import { MsgDeleteTimedOutAsset } from "./types/assets/tx";
import { MsgCreateTransferAsset } from "./types/assets/tx";
import { MsgUpdateTransferAsset } from "./types/assets/tx";
import { MsgDeleteTransferAsset } from "./types/assets/tx";
import { MsgUpdateTimedOutAsset } from "./types/assets/tx";
import { MsgCreateAsset } from "./types/assets/tx";
import { MsgUpdateAsset } from "./types/assets/tx";
import { MsgSendIbcAsset } from "./types/assets/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateTimedOutAsset: (data: MsgCreateTimedOutAsset) => EncodeObject;
    msgCreateSentAsset: (data: MsgCreateSentAsset) => EncodeObject;
    msgDeleteAsset: (data: MsgDeleteAsset) => EncodeObject;
    msgUpdateSentAsset: (data: MsgUpdateSentAsset) => EncodeObject;
    msgDeleteSentAsset: (data: MsgDeleteSentAsset) => EncodeObject;
    msgDeleteTimedOutAsset: (data: MsgDeleteTimedOutAsset) => EncodeObject;
    msgCreateTransferAsset: (data: MsgCreateTransferAsset) => EncodeObject;
    msgUpdateTransferAsset: (data: MsgUpdateTransferAsset) => EncodeObject;
    msgDeleteTransferAsset: (data: MsgDeleteTransferAsset) => EncodeObject;
    msgUpdateTimedOutAsset: (data: MsgUpdateTimedOutAsset) => EncodeObject;
    msgCreateAsset: (data: MsgCreateAsset) => EncodeObject;
    msgUpdateAsset: (data: MsgUpdateAsset) => EncodeObject;
    msgSendIbcAsset: (data: MsgSendIbcAsset) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
