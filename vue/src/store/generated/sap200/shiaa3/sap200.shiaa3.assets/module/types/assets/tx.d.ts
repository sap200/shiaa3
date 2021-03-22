import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.assets";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcAsset {
    sender: string;
    port: string;
    channelID: string;
    timeoutTimestamp: number;
    AssetSerial: string;
    Receiver: string;
}
export interface MsgSendIbcAssetResponse {
}
export interface MsgCreateTimedOutAsset {
    creator: string;
    AssetSerial: string;
    Receiver: string;
    TargetChain: string;
}
export interface MsgCreateTimedOutAssetResponse {
    id: number;
}
export interface MsgUpdateTimedOutAsset {
    creator: string;
    id: number;
    AssetSerial: string;
    Receiver: string;
    TargetChain: string;
}
export interface MsgUpdateTimedOutAssetResponse {
}
export interface MsgDeleteTimedOutAsset {
    creator: string;
    id: number;
}
export interface MsgDeleteTimedOutAssetResponse {
}
export interface MsgCreateSentAsset {
    creator: string;
    AssetSerial: string;
    Receiver: string;
    TargetChain: string;
}
export interface MsgCreateSentAssetResponse {
    id: number;
}
export interface MsgUpdateSentAsset {
    creator: string;
    id: number;
    AssetSerial: string;
    Receiver: string;
    TargetChain: string;
}
export interface MsgUpdateSentAssetResponse {
}
export interface MsgDeleteSentAsset {
    creator: string;
    id: number;
}
export interface MsgDeleteSentAssetResponse {
}
export interface MsgCreateTransferAsset {
    creator: string;
    AssetSerial: string;
    Receiver: string;
}
export interface MsgCreateTransferAssetResponse {
    id: number;
}
export interface MsgUpdateTransferAsset {
    creator: string;
    id: number;
    AssetSerial: string;
    Receiver: string;
}
export interface MsgUpdateTransferAssetResponse {
}
export interface MsgDeleteTransferAsset {
    creator: string;
    id: number;
}
export interface MsgDeleteTransferAssetResponse {
}
export interface MsgCreateAsset {
    creator: string;
    Serial: string;
    Name: string;
    AssetType: number;
    Tokens: number;
    Owner: string;
}
export interface MsgCreateAssetResponse {
    id: number;
}
export interface MsgUpdateAsset {
    creator: string;
    id: number;
    Serial: string;
    Name: string;
    AssetType: number;
    Tokens: number;
    Owner: string;
}
export interface MsgUpdateAssetResponse {
}
export interface MsgDeleteAsset {
    creator: string;
    id: number;
}
export interface MsgDeleteAssetResponse {
}
export declare const MsgSendIbcAsset: {
    encode(message: MsgSendIbcAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcAsset;
    fromJSON(object: any): MsgSendIbcAsset;
    toJSON(message: MsgSendIbcAsset): unknown;
    fromPartial(object: DeepPartial<MsgSendIbcAsset>): MsgSendIbcAsset;
};
export declare const MsgSendIbcAssetResponse: {
    encode(_: MsgSendIbcAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSendIbcAssetResponse;
    fromJSON(_: any): MsgSendIbcAssetResponse;
    toJSON(_: MsgSendIbcAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgSendIbcAssetResponse>): MsgSendIbcAssetResponse;
};
export declare const MsgCreateTimedOutAsset: {
    encode(message: MsgCreateTimedOutAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedOutAsset;
    fromJSON(object: any): MsgCreateTimedOutAsset;
    toJSON(message: MsgCreateTimedOutAsset): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedOutAsset>): MsgCreateTimedOutAsset;
};
export declare const MsgCreateTimedOutAssetResponse: {
    encode(message: MsgCreateTimedOutAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedOutAssetResponse;
    fromJSON(object: any): MsgCreateTimedOutAssetResponse;
    toJSON(message: MsgCreateTimedOutAssetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTimedOutAssetResponse>): MsgCreateTimedOutAssetResponse;
};
export declare const MsgUpdateTimedOutAsset: {
    encode(message: MsgUpdateTimedOutAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedOutAsset;
    fromJSON(object: any): MsgUpdateTimedOutAsset;
    toJSON(message: MsgUpdateTimedOutAsset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTimedOutAsset>): MsgUpdateTimedOutAsset;
};
export declare const MsgUpdateTimedOutAssetResponse: {
    encode(_: MsgUpdateTimedOutAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedOutAssetResponse;
    fromJSON(_: any): MsgUpdateTimedOutAssetResponse;
    toJSON(_: MsgUpdateTimedOutAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTimedOutAssetResponse>): MsgUpdateTimedOutAssetResponse;
};
export declare const MsgDeleteTimedOutAsset: {
    encode(message: MsgDeleteTimedOutAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedOutAsset;
    fromJSON(object: any): MsgDeleteTimedOutAsset;
    toJSON(message: MsgDeleteTimedOutAsset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTimedOutAsset>): MsgDeleteTimedOutAsset;
};
export declare const MsgDeleteTimedOutAssetResponse: {
    encode(_: MsgDeleteTimedOutAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedOutAssetResponse;
    fromJSON(_: any): MsgDeleteTimedOutAssetResponse;
    toJSON(_: MsgDeleteTimedOutAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTimedOutAssetResponse>): MsgDeleteTimedOutAssetResponse;
};
export declare const MsgCreateSentAsset: {
    encode(message: MsgCreateSentAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentAsset;
    fromJSON(object: any): MsgCreateSentAsset;
    toJSON(message: MsgCreateSentAsset): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentAsset>): MsgCreateSentAsset;
};
export declare const MsgCreateSentAssetResponse: {
    encode(message: MsgCreateSentAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSentAssetResponse;
    fromJSON(object: any): MsgCreateSentAssetResponse;
    toJSON(message: MsgCreateSentAssetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateSentAssetResponse>): MsgCreateSentAssetResponse;
};
export declare const MsgUpdateSentAsset: {
    encode(message: MsgUpdateSentAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentAsset;
    fromJSON(object: any): MsgUpdateSentAsset;
    toJSON(message: MsgUpdateSentAsset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSentAsset>): MsgUpdateSentAsset;
};
export declare const MsgUpdateSentAssetResponse: {
    encode(_: MsgUpdateSentAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentAssetResponse;
    fromJSON(_: any): MsgUpdateSentAssetResponse;
    toJSON(_: MsgUpdateSentAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSentAssetResponse>): MsgUpdateSentAssetResponse;
};
export declare const MsgDeleteSentAsset: {
    encode(message: MsgDeleteSentAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentAsset;
    fromJSON(object: any): MsgDeleteSentAsset;
    toJSON(message: MsgDeleteSentAsset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSentAsset>): MsgDeleteSentAsset;
};
export declare const MsgDeleteSentAssetResponse: {
    encode(_: MsgDeleteSentAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentAssetResponse;
    fromJSON(_: any): MsgDeleteSentAssetResponse;
    toJSON(_: MsgDeleteSentAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSentAssetResponse>): MsgDeleteSentAssetResponse;
};
export declare const MsgCreateTransferAsset: {
    encode(message: MsgCreateTransferAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransferAsset;
    fromJSON(object: any): MsgCreateTransferAsset;
    toJSON(message: MsgCreateTransferAsset): unknown;
    fromPartial(object: DeepPartial<MsgCreateTransferAsset>): MsgCreateTransferAsset;
};
export declare const MsgCreateTransferAssetResponse: {
    encode(message: MsgCreateTransferAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTransferAssetResponse;
    fromJSON(object: any): MsgCreateTransferAssetResponse;
    toJSON(message: MsgCreateTransferAssetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTransferAssetResponse>): MsgCreateTransferAssetResponse;
};
export declare const MsgUpdateTransferAsset: {
    encode(message: MsgUpdateTransferAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransferAsset;
    fromJSON(object: any): MsgUpdateTransferAsset;
    toJSON(message: MsgUpdateTransferAsset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTransferAsset>): MsgUpdateTransferAsset;
};
export declare const MsgUpdateTransferAssetResponse: {
    encode(_: MsgUpdateTransferAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransferAssetResponse;
    fromJSON(_: any): MsgUpdateTransferAssetResponse;
    toJSON(_: MsgUpdateTransferAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTransferAssetResponse>): MsgUpdateTransferAssetResponse;
};
export declare const MsgDeleteTransferAsset: {
    encode(message: MsgDeleteTransferAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransferAsset;
    fromJSON(object: any): MsgDeleteTransferAsset;
    toJSON(message: MsgDeleteTransferAsset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTransferAsset>): MsgDeleteTransferAsset;
};
export declare const MsgDeleteTransferAssetResponse: {
    encode(_: MsgDeleteTransferAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransferAssetResponse;
    fromJSON(_: any): MsgDeleteTransferAssetResponse;
    toJSON(_: MsgDeleteTransferAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTransferAssetResponse>): MsgDeleteTransferAssetResponse;
};
export declare const MsgCreateAsset: {
    encode(message: MsgCreateAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAsset;
    fromJSON(object: any): MsgCreateAsset;
    toJSON(message: MsgCreateAsset): unknown;
    fromPartial(object: DeepPartial<MsgCreateAsset>): MsgCreateAsset;
};
export declare const MsgCreateAssetResponse: {
    encode(message: MsgCreateAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateAssetResponse;
    fromJSON(object: any): MsgCreateAssetResponse;
    toJSON(message: MsgCreateAssetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateAssetResponse>): MsgCreateAssetResponse;
};
export declare const MsgUpdateAsset: {
    encode(message: MsgUpdateAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAsset;
    fromJSON(object: any): MsgUpdateAsset;
    toJSON(message: MsgUpdateAsset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset;
};
export declare const MsgUpdateAssetResponse: {
    encode(_: MsgUpdateAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateAssetResponse;
    fromJSON(_: any): MsgUpdateAssetResponse;
    toJSON(_: MsgUpdateAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse;
};
export declare const MsgDeleteAsset: {
    encode(message: MsgDeleteAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAsset;
    fromJSON(object: any): MsgDeleteAsset;
    toJSON(message: MsgDeleteAsset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteAsset>): MsgDeleteAsset;
};
export declare const MsgDeleteAssetResponse: {
    encode(_: MsgDeleteAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteAssetResponse;
    fromJSON(_: any): MsgDeleteAssetResponse;
    toJSON(_: MsgDeleteAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteAssetResponse>): MsgDeleteAssetResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendIbcAsset(request: MsgSendIbcAsset): Promise<MsgSendIbcAssetResponse>;
    CreateTimedOutAsset(request: MsgCreateTimedOutAsset): Promise<MsgCreateTimedOutAssetResponse>;
    UpdateTimedOutAsset(request: MsgUpdateTimedOutAsset): Promise<MsgUpdateTimedOutAssetResponse>;
    DeleteTimedOutAsset(request: MsgDeleteTimedOutAsset): Promise<MsgDeleteTimedOutAssetResponse>;
    CreateSentAsset(request: MsgCreateSentAsset): Promise<MsgCreateSentAssetResponse>;
    UpdateSentAsset(request: MsgUpdateSentAsset): Promise<MsgUpdateSentAssetResponse>;
    DeleteSentAsset(request: MsgDeleteSentAsset): Promise<MsgDeleteSentAssetResponse>;
    CreateTransferAsset(request: MsgCreateTransferAsset): Promise<MsgCreateTransferAssetResponse>;
    UpdateTransferAsset(request: MsgUpdateTransferAsset): Promise<MsgUpdateTransferAssetResponse>;
    DeleteTransferAsset(request: MsgDeleteTransferAsset): Promise<MsgDeleteTransferAssetResponse>;
    CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
    UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
    DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SendIbcAsset(request: MsgSendIbcAsset): Promise<MsgSendIbcAssetResponse>;
    CreateTimedOutAsset(request: MsgCreateTimedOutAsset): Promise<MsgCreateTimedOutAssetResponse>;
    UpdateTimedOutAsset(request: MsgUpdateTimedOutAsset): Promise<MsgUpdateTimedOutAssetResponse>;
    DeleteTimedOutAsset(request: MsgDeleteTimedOutAsset): Promise<MsgDeleteTimedOutAssetResponse>;
    CreateSentAsset(request: MsgCreateSentAsset): Promise<MsgCreateSentAssetResponse>;
    UpdateSentAsset(request: MsgUpdateSentAsset): Promise<MsgUpdateSentAssetResponse>;
    DeleteSentAsset(request: MsgDeleteSentAsset): Promise<MsgDeleteSentAssetResponse>;
    CreateTransferAsset(request: MsgCreateTransferAsset): Promise<MsgCreateTransferAssetResponse>;
    UpdateTransferAsset(request: MsgUpdateTransferAsset): Promise<MsgUpdateTransferAssetResponse>;
    DeleteTransferAsset(request: MsgDeleteTransferAsset): Promise<MsgDeleteTransferAssetResponse>;
    CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
    UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
    DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
