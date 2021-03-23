import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteTransferAsset } from "./types/assets/tx";
import { MsgDeleteTimedOutAsset } from "./types/assets/tx";
import { MsgDeleteSentAsset } from "./types/assets/tx";
import { MsgUpdateTransferAsset } from "./types/assets/tx";
import { MsgCreateAsset } from "./types/assets/tx";
import { MsgUpdateAsset } from "./types/assets/tx";
import { MsgUpdateSentAsset } from "./types/assets/tx";
import { MsgDeleteAsset } from "./types/assets/tx";
import { MsgCreateSentAsset } from "./types/assets/tx";
import { MsgSendIbcAsset } from "./types/assets/tx";
import { MsgCreateTransferAsset } from "./types/assets/tx";
import { MsgCreateTimedOutAsset } from "./types/assets/tx";
import { MsgUpdateTimedOutAsset } from "./types/assets/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgDeleteTransferAsset: (data: MsgDeleteTransferAsset) => EncodeObject;
    msgDeleteTimedOutAsset: (data: MsgDeleteTimedOutAsset) => EncodeObject;
    msgDeleteSentAsset: (data: MsgDeleteSentAsset) => EncodeObject;
    msgUpdateTransferAsset: (data: MsgUpdateTransferAsset) => EncodeObject;
    msgCreateAsset: (data: MsgCreateAsset) => EncodeObject;
    msgUpdateAsset: (data: MsgUpdateAsset) => EncodeObject;
    msgUpdateSentAsset: (data: MsgUpdateSentAsset) => EncodeObject;
    msgDeleteAsset: (data: MsgDeleteAsset) => EncodeObject;
    msgCreateSentAsset: (data: MsgCreateSentAsset) => EncodeObject;
    msgSendIbcAsset: (data: MsgSendIbcAsset) => EncodeObject;
    msgCreateTransferAsset: (data: MsgCreateTransferAsset) => EncodeObject;
    msgCreateTimedOutAsset: (data: MsgCreateTimedOutAsset) => EncodeObject;
    msgUpdateTimedOutAsset: (data: MsgUpdateTimedOutAsset) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
