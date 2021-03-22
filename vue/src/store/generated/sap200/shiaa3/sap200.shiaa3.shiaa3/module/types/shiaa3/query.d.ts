import { Reader, Writer } from "protobufjs/minimal";
import { Winners } from "../shiaa3/Winners";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Members } from "../shiaa3/Members";
import { Pool4Ticket } from "../shiaa3/Pool4Ticket";
import { Pool3Ticket } from "../shiaa3/Pool3Ticket";
import { Pool2Ticket } from "../shiaa3/Pool2Ticket";
import { Pool1Ticket } from "../shiaa3/Pool1Ticket";
import { Pool0Ticket } from "../shiaa3/Pool0Ticket";
import { JoinPoolAndStakeAsset } from "../shiaa3/JoinPoolAndStakeAsset";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetWinnersRequest {
    id: number;
}
export interface QueryGetWinnersResponse {
    Winners: Winners | undefined;
}
export interface QueryAllWinnersRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllWinnersResponse {
    Winners: Winners[];
    pagination: PageResponse | undefined;
}
export interface QueryGetMembersRequest {
    id: number;
}
export interface QueryGetMembersResponse {
    Members: Members | undefined;
}
export interface QueryAllMembersRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllMembersResponse {
    Members: Members[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPool4TicketRequest {
    id: number;
}
export interface QueryGetPool4TicketResponse {
    Pool4Ticket: Pool4Ticket | undefined;
}
export interface QueryAllPool4TicketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPool4TicketResponse {
    Pool4Ticket: Pool4Ticket[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPool3TicketRequest {
    id: number;
}
export interface QueryGetPool3TicketResponse {
    Pool3Ticket: Pool3Ticket | undefined;
}
export interface QueryAllPool3TicketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPool3TicketResponse {
    Pool3Ticket: Pool3Ticket[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPool2TicketRequest {
    id: number;
}
export interface QueryGetPool2TicketResponse {
    Pool2Ticket: Pool2Ticket | undefined;
}
export interface QueryAllPool2TicketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPool2TicketResponse {
    Pool2Ticket: Pool2Ticket[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPool1TicketRequest {
    id: number;
}
export interface QueryGetPool1TicketResponse {
    Pool1Ticket: Pool1Ticket | undefined;
}
export interface QueryAllPool1TicketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPool1TicketResponse {
    Pool1Ticket: Pool1Ticket[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPool0TicketRequest {
    id: number;
}
export interface QueryGetPool0TicketResponse {
    Pool0Ticket: Pool0Ticket | undefined;
}
export interface QueryAllPool0TicketRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPool0TicketResponse {
    Pool0Ticket: Pool0Ticket[];
    pagination: PageResponse | undefined;
}
export interface QueryGetJoinPoolAndStakeAssetRequest {
    id: number;
}
export interface QueryGetJoinPoolAndStakeAssetResponse {
    JoinPoolAndStakeAsset: JoinPoolAndStakeAsset | undefined;
}
export interface QueryAllJoinPoolAndStakeAssetRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllJoinPoolAndStakeAssetResponse {
    JoinPoolAndStakeAsset: JoinPoolAndStakeAsset[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetWinnersRequest: {
    encode(message: QueryGetWinnersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWinnersRequest;
    fromJSON(object: any): QueryGetWinnersRequest;
    toJSON(message: QueryGetWinnersRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetWinnersRequest>): QueryGetWinnersRequest;
};
export declare const QueryGetWinnersResponse: {
    encode(message: QueryGetWinnersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetWinnersResponse;
    fromJSON(object: any): QueryGetWinnersResponse;
    toJSON(message: QueryGetWinnersResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetWinnersResponse>): QueryGetWinnersResponse;
};
export declare const QueryAllWinnersRequest: {
    encode(message: QueryAllWinnersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWinnersRequest;
    fromJSON(object: any): QueryAllWinnersRequest;
    toJSON(message: QueryAllWinnersRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllWinnersRequest>): QueryAllWinnersRequest;
};
export declare const QueryAllWinnersResponse: {
    encode(message: QueryAllWinnersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllWinnersResponse;
    fromJSON(object: any): QueryAllWinnersResponse;
    toJSON(message: QueryAllWinnersResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllWinnersResponse>): QueryAllWinnersResponse;
};
export declare const QueryGetMembersRequest: {
    encode(message: QueryGetMembersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMembersRequest;
    fromJSON(object: any): QueryGetMembersRequest;
    toJSON(message: QueryGetMembersRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetMembersRequest>): QueryGetMembersRequest;
};
export declare const QueryGetMembersResponse: {
    encode(message: QueryGetMembersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetMembersResponse;
    fromJSON(object: any): QueryGetMembersResponse;
    toJSON(message: QueryGetMembersResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetMembersResponse>): QueryGetMembersResponse;
};
export declare const QueryAllMembersRequest: {
    encode(message: QueryAllMembersRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMembersRequest;
    fromJSON(object: any): QueryAllMembersRequest;
    toJSON(message: QueryAllMembersRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllMembersRequest>): QueryAllMembersRequest;
};
export declare const QueryAllMembersResponse: {
    encode(message: QueryAllMembersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllMembersResponse;
    fromJSON(object: any): QueryAllMembersResponse;
    toJSON(message: QueryAllMembersResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllMembersResponse>): QueryAllMembersResponse;
};
export declare const QueryGetPool4TicketRequest: {
    encode(message: QueryGetPool4TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool4TicketRequest;
    fromJSON(object: any): QueryGetPool4TicketRequest;
    toJSON(message: QueryGetPool4TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPool4TicketRequest>): QueryGetPool4TicketRequest;
};
export declare const QueryGetPool4TicketResponse: {
    encode(message: QueryGetPool4TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool4TicketResponse;
    fromJSON(object: any): QueryGetPool4TicketResponse;
    toJSON(message: QueryGetPool4TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPool4TicketResponse>): QueryGetPool4TicketResponse;
};
export declare const QueryAllPool4TicketRequest: {
    encode(message: QueryAllPool4TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool4TicketRequest;
    fromJSON(object: any): QueryAllPool4TicketRequest;
    toJSON(message: QueryAllPool4TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPool4TicketRequest>): QueryAllPool4TicketRequest;
};
export declare const QueryAllPool4TicketResponse: {
    encode(message: QueryAllPool4TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool4TicketResponse;
    fromJSON(object: any): QueryAllPool4TicketResponse;
    toJSON(message: QueryAllPool4TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPool4TicketResponse>): QueryAllPool4TicketResponse;
};
export declare const QueryGetPool3TicketRequest: {
    encode(message: QueryGetPool3TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool3TicketRequest;
    fromJSON(object: any): QueryGetPool3TicketRequest;
    toJSON(message: QueryGetPool3TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPool3TicketRequest>): QueryGetPool3TicketRequest;
};
export declare const QueryGetPool3TicketResponse: {
    encode(message: QueryGetPool3TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool3TicketResponse;
    fromJSON(object: any): QueryGetPool3TicketResponse;
    toJSON(message: QueryGetPool3TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPool3TicketResponse>): QueryGetPool3TicketResponse;
};
export declare const QueryAllPool3TicketRequest: {
    encode(message: QueryAllPool3TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool3TicketRequest;
    fromJSON(object: any): QueryAllPool3TicketRequest;
    toJSON(message: QueryAllPool3TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPool3TicketRequest>): QueryAllPool3TicketRequest;
};
export declare const QueryAllPool3TicketResponse: {
    encode(message: QueryAllPool3TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool3TicketResponse;
    fromJSON(object: any): QueryAllPool3TicketResponse;
    toJSON(message: QueryAllPool3TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPool3TicketResponse>): QueryAllPool3TicketResponse;
};
export declare const QueryGetPool2TicketRequest: {
    encode(message: QueryGetPool2TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool2TicketRequest;
    fromJSON(object: any): QueryGetPool2TicketRequest;
    toJSON(message: QueryGetPool2TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPool2TicketRequest>): QueryGetPool2TicketRequest;
};
export declare const QueryGetPool2TicketResponse: {
    encode(message: QueryGetPool2TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool2TicketResponse;
    fromJSON(object: any): QueryGetPool2TicketResponse;
    toJSON(message: QueryGetPool2TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPool2TicketResponse>): QueryGetPool2TicketResponse;
};
export declare const QueryAllPool2TicketRequest: {
    encode(message: QueryAllPool2TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool2TicketRequest;
    fromJSON(object: any): QueryAllPool2TicketRequest;
    toJSON(message: QueryAllPool2TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPool2TicketRequest>): QueryAllPool2TicketRequest;
};
export declare const QueryAllPool2TicketResponse: {
    encode(message: QueryAllPool2TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool2TicketResponse;
    fromJSON(object: any): QueryAllPool2TicketResponse;
    toJSON(message: QueryAllPool2TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPool2TicketResponse>): QueryAllPool2TicketResponse;
};
export declare const QueryGetPool1TicketRequest: {
    encode(message: QueryGetPool1TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool1TicketRequest;
    fromJSON(object: any): QueryGetPool1TicketRequest;
    toJSON(message: QueryGetPool1TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPool1TicketRequest>): QueryGetPool1TicketRequest;
};
export declare const QueryGetPool1TicketResponse: {
    encode(message: QueryGetPool1TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool1TicketResponse;
    fromJSON(object: any): QueryGetPool1TicketResponse;
    toJSON(message: QueryGetPool1TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPool1TicketResponse>): QueryGetPool1TicketResponse;
};
export declare const QueryAllPool1TicketRequest: {
    encode(message: QueryAllPool1TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool1TicketRequest;
    fromJSON(object: any): QueryAllPool1TicketRequest;
    toJSON(message: QueryAllPool1TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPool1TicketRequest>): QueryAllPool1TicketRequest;
};
export declare const QueryAllPool1TicketResponse: {
    encode(message: QueryAllPool1TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool1TicketResponse;
    fromJSON(object: any): QueryAllPool1TicketResponse;
    toJSON(message: QueryAllPool1TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPool1TicketResponse>): QueryAllPool1TicketResponse;
};
export declare const QueryGetPool0TicketRequest: {
    encode(message: QueryGetPool0TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool0TicketRequest;
    fromJSON(object: any): QueryGetPool0TicketRequest;
    toJSON(message: QueryGetPool0TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPool0TicketRequest>): QueryGetPool0TicketRequest;
};
export declare const QueryGetPool0TicketResponse: {
    encode(message: QueryGetPool0TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPool0TicketResponse;
    fromJSON(object: any): QueryGetPool0TicketResponse;
    toJSON(message: QueryGetPool0TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPool0TicketResponse>): QueryGetPool0TicketResponse;
};
export declare const QueryAllPool0TicketRequest: {
    encode(message: QueryAllPool0TicketRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool0TicketRequest;
    fromJSON(object: any): QueryAllPool0TicketRequest;
    toJSON(message: QueryAllPool0TicketRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPool0TicketRequest>): QueryAllPool0TicketRequest;
};
export declare const QueryAllPool0TicketResponse: {
    encode(message: QueryAllPool0TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPool0TicketResponse;
    fromJSON(object: any): QueryAllPool0TicketResponse;
    toJSON(message: QueryAllPool0TicketResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPool0TicketResponse>): QueryAllPool0TicketResponse;
};
export declare const QueryGetJoinPoolAndStakeAssetRequest: {
    encode(message: QueryGetJoinPoolAndStakeAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetJoinPoolAndStakeAssetRequest;
    fromJSON(object: any): QueryGetJoinPoolAndStakeAssetRequest;
    toJSON(message: QueryGetJoinPoolAndStakeAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetJoinPoolAndStakeAssetRequest>): QueryGetJoinPoolAndStakeAssetRequest;
};
export declare const QueryGetJoinPoolAndStakeAssetResponse: {
    encode(message: QueryGetJoinPoolAndStakeAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetJoinPoolAndStakeAssetResponse;
    fromJSON(object: any): QueryGetJoinPoolAndStakeAssetResponse;
    toJSON(message: QueryGetJoinPoolAndStakeAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetJoinPoolAndStakeAssetResponse>): QueryGetJoinPoolAndStakeAssetResponse;
};
export declare const QueryAllJoinPoolAndStakeAssetRequest: {
    encode(message: QueryAllJoinPoolAndStakeAssetRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllJoinPoolAndStakeAssetRequest;
    fromJSON(object: any): QueryAllJoinPoolAndStakeAssetRequest;
    toJSON(message: QueryAllJoinPoolAndStakeAssetRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllJoinPoolAndStakeAssetRequest>): QueryAllJoinPoolAndStakeAssetRequest;
};
export declare const QueryAllJoinPoolAndStakeAssetResponse: {
    encode(message: QueryAllJoinPoolAndStakeAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllJoinPoolAndStakeAssetResponse;
    fromJSON(object: any): QueryAllJoinPoolAndStakeAssetResponse;
    toJSON(message: QueryAllJoinPoolAndStakeAssetResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllJoinPoolAndStakeAssetResponse>): QueryAllJoinPoolAndStakeAssetResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Winners(request: QueryGetWinnersRequest): Promise<QueryGetWinnersResponse>;
    WinnersAll(request: QueryAllWinnersRequest): Promise<QueryAllWinnersResponse>;
    Members(request: QueryGetMembersRequest): Promise<QueryGetMembersResponse>;
    MembersAll(request: QueryAllMembersRequest): Promise<QueryAllMembersResponse>;
    Pool4Ticket(request: QueryGetPool4TicketRequest): Promise<QueryGetPool4TicketResponse>;
    Pool4TicketAll(request: QueryAllPool4TicketRequest): Promise<QueryAllPool4TicketResponse>;
    Pool3Ticket(request: QueryGetPool3TicketRequest): Promise<QueryGetPool3TicketResponse>;
    Pool3TicketAll(request: QueryAllPool3TicketRequest): Promise<QueryAllPool3TicketResponse>;
    Pool2Ticket(request: QueryGetPool2TicketRequest): Promise<QueryGetPool2TicketResponse>;
    Pool2TicketAll(request: QueryAllPool2TicketRequest): Promise<QueryAllPool2TicketResponse>;
    Pool1Ticket(request: QueryGetPool1TicketRequest): Promise<QueryGetPool1TicketResponse>;
    Pool1TicketAll(request: QueryAllPool1TicketRequest): Promise<QueryAllPool1TicketResponse>;
    Pool0Ticket(request: QueryGetPool0TicketRequest): Promise<QueryGetPool0TicketResponse>;
    Pool0TicketAll(request: QueryAllPool0TicketRequest): Promise<QueryAllPool0TicketResponse>;
    JoinPoolAndStakeAsset(request: QueryGetJoinPoolAndStakeAssetRequest): Promise<QueryGetJoinPoolAndStakeAssetResponse>;
    JoinPoolAndStakeAssetAll(request: QueryAllJoinPoolAndStakeAssetRequest): Promise<QueryAllJoinPoolAndStakeAssetResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Winners(request: QueryGetWinnersRequest): Promise<QueryGetWinnersResponse>;
    WinnersAll(request: QueryAllWinnersRequest): Promise<QueryAllWinnersResponse>;
    Members(request: QueryGetMembersRequest): Promise<QueryGetMembersResponse>;
    MembersAll(request: QueryAllMembersRequest): Promise<QueryAllMembersResponse>;
    Pool4Ticket(request: QueryGetPool4TicketRequest): Promise<QueryGetPool4TicketResponse>;
    Pool4TicketAll(request: QueryAllPool4TicketRequest): Promise<QueryAllPool4TicketResponse>;
    Pool3Ticket(request: QueryGetPool3TicketRequest): Promise<QueryGetPool3TicketResponse>;
    Pool3TicketAll(request: QueryAllPool3TicketRequest): Promise<QueryAllPool3TicketResponse>;
    Pool2Ticket(request: QueryGetPool2TicketRequest): Promise<QueryGetPool2TicketResponse>;
    Pool2TicketAll(request: QueryAllPool2TicketRequest): Promise<QueryAllPool2TicketResponse>;
    Pool1Ticket(request: QueryGetPool1TicketRequest): Promise<QueryGetPool1TicketResponse>;
    Pool1TicketAll(request: QueryAllPool1TicketRequest): Promise<QueryAllPool1TicketResponse>;
    Pool0Ticket(request: QueryGetPool0TicketRequest): Promise<QueryGetPool0TicketResponse>;
    Pool0TicketAll(request: QueryAllPool0TicketRequest): Promise<QueryAllPool0TicketResponse>;
    JoinPoolAndStakeAsset(request: QueryGetJoinPoolAndStakeAssetRequest): Promise<QueryGetJoinPoolAndStakeAssetResponse>;
    JoinPoolAndStakeAssetAll(request: QueryAllJoinPoolAndStakeAssetRequest): Promise<QueryAllJoinPoolAndStakeAssetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
