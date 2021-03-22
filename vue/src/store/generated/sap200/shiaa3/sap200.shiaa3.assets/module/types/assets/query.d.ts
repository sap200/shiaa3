import { Reader, Writer } from "protobufjs/minimal";
import { TimedOutAsset } from "../assets/TimedOutAsset";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { SentAsset } from "../assets/SentAsset";
import { TransferAsset } from "../assets/TransferAsset";
import { Asset } from "../assets/Asset";
export declare const protobufPackage = "sap200.shiaa3.assets";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTimedOutAssetRequest {
    id: number;
}
export interface QueryGetTimedOutAssetResponse {
    TimedOutAsset: TimedOutAsset | undefined;
}
export interface QueryAllTimedOutAssetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTimedOutAssetResponse {
    TimedOutAsset: TimedOutAsset[];
    pagination: PageResponse | undefined;
}
export interface QueryGetSentAssetRequest {
    id: number;
}
export interface QueryGetSentAssetResponse {
    SentAsset: SentAsset | undefined;
}
export interface QueryAllSentAssetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSentAssetResponse {
    SentAsset: SentAsset[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTransferAssetRequest {
    id: number;
}
export interface QueryGetTransferAssetResponse {
    TransferAsset: TransferAsset | undefined;
}
export interface QueryAllTransferAssetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTransferAssetResponse {
    TransferAsset: TransferAsset[];
    pagination: PageResponse | undefined;
}
export interface QueryGetAssetRequest {
    id: number;
}
export interface QueryGetAssetResponse {
    Asset: Asset | undefined;
}
export interface QueryAllAssetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllAssetResponse {
    Asset: Asset[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetTimedOutAssetRequest: {
    encode(message: QueryGetTimedOutAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedOutAssetRequest;
    fromJSON(object: any): QueryGetTimedOutAssetRequest;
    toJSON(message: QueryGetTimedOutAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedOutAssetRequest>): QueryGetTimedOutAssetRequest;
};
export declare const QueryGetTimedOutAssetResponse: {
    encode(message: QueryGetTimedOutAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTimedOutAssetResponse;
    fromJSON(object: any): QueryGetTimedOutAssetResponse;
    toJSON(message: QueryGetTimedOutAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTimedOutAssetResponse>): QueryGetTimedOutAssetResponse;
};
export declare const QueryAllTimedOutAssetRequest: {
    encode(message: QueryAllTimedOutAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedOutAssetRequest;
    fromJSON(object: any): QueryAllTimedOutAssetRequest;
    toJSON(message: QueryAllTimedOutAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedOutAssetRequest>): QueryAllTimedOutAssetRequest;
};
export declare const QueryAllTimedOutAssetResponse: {
    encode(message: QueryAllTimedOutAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTimedOutAssetResponse;
    fromJSON(object: any): QueryAllTimedOutAssetResponse;
    toJSON(message: QueryAllTimedOutAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTimedOutAssetResponse>): QueryAllTimedOutAssetResponse;
};
export declare const QueryGetSentAssetRequest: {
    encode(message: QueryGetSentAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentAssetRequest;
    fromJSON(object: any): QueryGetSentAssetRequest;
    toJSON(message: QueryGetSentAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSentAssetRequest>): QueryGetSentAssetRequest;
};
export declare const QueryGetSentAssetResponse: {
    encode(message: QueryGetSentAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSentAssetResponse;
    fromJSON(object: any): QueryGetSentAssetResponse;
    toJSON(message: QueryGetSentAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSentAssetResponse>): QueryGetSentAssetResponse;
};
export declare const QueryAllSentAssetRequest: {
    encode(message: QueryAllSentAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentAssetRequest;
    fromJSON(object: any): QueryAllSentAssetRequest;
    toJSON(message: QueryAllSentAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSentAssetRequest>): QueryAllSentAssetRequest;
};
export declare const QueryAllSentAssetResponse: {
    encode(message: QueryAllSentAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSentAssetResponse;
    fromJSON(object: any): QueryAllSentAssetResponse;
    toJSON(message: QueryAllSentAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSentAssetResponse>): QueryAllSentAssetResponse;
};
export declare const QueryGetTransferAssetRequest: {
    encode(message: QueryGetTransferAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransferAssetRequest;
    fromJSON(object: any): QueryGetTransferAssetRequest;
    toJSON(message: QueryGetTransferAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTransferAssetRequest>): QueryGetTransferAssetRequest;
};
export declare const QueryGetTransferAssetResponse: {
    encode(message: QueryGetTransferAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTransferAssetResponse;
    fromJSON(object: any): QueryGetTransferAssetResponse;
    toJSON(message: QueryGetTransferAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTransferAssetResponse>): QueryGetTransferAssetResponse;
};
export declare const QueryAllTransferAssetRequest: {
    encode(message: QueryAllTransferAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransferAssetRequest;
    fromJSON(object: any): QueryAllTransferAssetRequest;
    toJSON(message: QueryAllTransferAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTransferAssetRequest>): QueryAllTransferAssetRequest;
};
export declare const QueryAllTransferAssetResponse: {
    encode(message: QueryAllTransferAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTransferAssetResponse;
    fromJSON(object: any): QueryAllTransferAssetResponse;
    toJSON(message: QueryAllTransferAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTransferAssetResponse>): QueryAllTransferAssetResponse;
};
export declare const QueryGetAssetRequest: {
    encode(message: QueryGetAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAssetRequest;
    fromJSON(object: any): QueryGetAssetRequest;
    toJSON(message: QueryGetAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetAssetRequest>): QueryGetAssetRequest;
};
export declare const QueryGetAssetResponse: {
    encode(message: QueryGetAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetAssetResponse;
    fromJSON(object: any): QueryGetAssetResponse;
    toJSON(message: QueryGetAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetAssetResponse>): QueryGetAssetResponse;
};
export declare const QueryAllAssetRequest: {
    encode(message: QueryAllAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAssetRequest;
    fromJSON(object: any): QueryAllAssetRequest;
    toJSON(message: QueryAllAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllAssetRequest>): QueryAllAssetRequest;
};
export declare const QueryAllAssetResponse: {
    encode(message: QueryAllAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllAssetResponse;
    fromJSON(object: any): QueryAllAssetResponse;
    toJSON(message: QueryAllAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllAssetResponse>): QueryAllAssetResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    TimedOutAsset(request: QueryGetTimedOutAssetRequest): Promise<QueryGetTimedOutAssetResponse>;
    TimedOutAssetAll(request: QueryAllTimedOutAssetRequest): Promise<QueryAllTimedOutAssetResponse>;
    SentAsset(request: QueryGetSentAssetRequest): Promise<QueryGetSentAssetResponse>;
    SentAssetAll(request: QueryAllSentAssetRequest): Promise<QueryAllSentAssetResponse>;
    TransferAsset(request: QueryGetTransferAssetRequest): Promise<QueryGetTransferAssetResponse>;
    TransferAssetAll(request: QueryAllTransferAssetRequest): Promise<QueryAllTransferAssetResponse>;
    Asset(request: QueryGetAssetRequest): Promise<QueryGetAssetResponse>;
    AssetAll(request: QueryAllAssetRequest): Promise<QueryAllAssetResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TimedOutAsset(request: QueryGetTimedOutAssetRequest): Promise<QueryGetTimedOutAssetResponse>;
    TimedOutAssetAll(request: QueryAllTimedOutAssetRequest): Promise<QueryAllTimedOutAssetResponse>;
    SentAsset(request: QueryGetSentAssetRequest): Promise<QueryGetSentAssetResponse>;
    SentAssetAll(request: QueryAllSentAssetRequest): Promise<QueryAllSentAssetResponse>;
    TransferAsset(request: QueryGetTransferAssetRequest): Promise<QueryGetTransferAssetResponse>;
    TransferAssetAll(request: QueryAllTransferAssetRequest): Promise<QueryAllTransferAssetResponse>;
    Asset(request: QueryGetAssetRequest): Promise<QueryGetAssetResponse>;
    AssetAll(request: QueryAllAssetRequest): Promise<QueryAllAssetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
