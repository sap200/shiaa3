export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
export interface Shiaa3JoinPoolAndStakeAsset {
    creator?: string;
    /** @format uint64 */
    id?: string;
    PoolNo?: string;
    AssetSerial?: string;
}
export interface Shiaa3Members {
    creator?: string;
    /** @format uint64 */
    id?: string;
    address?: string;
}
export interface Shiaa3MsgCreateJoinPoolAndStakeAssetResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreateMembersResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreatePool0TicketResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreatePool1TicketResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreatePool2TicketResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreatePool3TicketResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreatePool4TicketResponse {
    /** @format uint64 */
    id?: string;
}
export interface Shiaa3MsgCreateWinnersResponse {
    /** @format uint64 */
    id?: string;
}
export declare type Shiaa3MsgDeleteJoinPoolAndStakeAssetResponse = object;
export declare type Shiaa3MsgDeleteMembersResponse = object;
export declare type Shiaa3MsgDeletePool0TicketResponse = object;
export declare type Shiaa3MsgDeletePool1TicketResponse = object;
export declare type Shiaa3MsgDeletePool2TicketResponse = object;
export declare type Shiaa3MsgDeletePool3TicketResponse = object;
export declare type Shiaa3MsgDeletePool4TicketResponse = object;
export declare type Shiaa3MsgDeleteWinnersResponse = object;
export declare type Shiaa3MsgUpdateJoinPoolAndStakeAssetResponse = object;
export declare type Shiaa3MsgUpdateMembersResponse = object;
export declare type Shiaa3MsgUpdatePool0TicketResponse = object;
export declare type Shiaa3MsgUpdatePool1TicketResponse = object;
export declare type Shiaa3MsgUpdatePool2TicketResponse = object;
export declare type Shiaa3MsgUpdatePool3TicketResponse = object;
export declare type Shiaa3MsgUpdatePool4TicketResponse = object;
export declare type Shiaa3MsgUpdateWinnersResponse = object;
export interface Shiaa3Pool0Ticket {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    LambdaValue?: string;
}
export interface Shiaa3Pool1Ticket {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    LambdaValue?: string;
}
export interface Shiaa3Pool2Ticket {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    LambdaValue?: string;
}
export interface Shiaa3Pool3Ticket {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    LambdaValue?: string;
}
export interface Shiaa3Pool4Ticket {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    LambdaValue?: string;
}
export interface Shiaa3QueryAllJoinPoolAndStakeAssetResponse {
    JoinPoolAndStakeAsset?: Shiaa3JoinPoolAndStakeAsset[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllMembersResponse {
    Members?: Shiaa3Members[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllPool0TicketResponse {
    Pool0Ticket?: Shiaa3Pool0Ticket[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllPool1TicketResponse {
    Pool1Ticket?: Shiaa3Pool1Ticket[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllPool2TicketResponse {
    Pool2Ticket?: Shiaa3Pool2Ticket[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllPool3TicketResponse {
    Pool3Ticket?: Shiaa3Pool3Ticket[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllPool4TicketResponse {
    Pool4Ticket?: Shiaa3Pool4Ticket[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryAllWinnersResponse {
    Winners?: Shiaa3Winners[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface Shiaa3QueryGetJoinPoolAndStakeAssetResponse {
    JoinPoolAndStakeAsset?: Shiaa3JoinPoolAndStakeAsset;
}
export interface Shiaa3QueryGetMembersResponse {
    Members?: Shiaa3Members;
}
export interface Shiaa3QueryGetPool0TicketResponse {
    Pool0Ticket?: Shiaa3Pool0Ticket;
}
export interface Shiaa3QueryGetPool1TicketResponse {
    Pool1Ticket?: Shiaa3Pool1Ticket;
}
export interface Shiaa3QueryGetPool2TicketResponse {
    Pool2Ticket?: Shiaa3Pool2Ticket;
}
export interface Shiaa3QueryGetPool3TicketResponse {
    Pool3Ticket?: Shiaa3Pool3Ticket;
}
export interface Shiaa3QueryGetPool4TicketResponse {
    Pool4Ticket?: Shiaa3Pool4Ticket;
}
export interface Shiaa3QueryGetWinnersResponse {
    Winners?: Shiaa3Winners;
}
export interface Shiaa3Winners {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AddressString?: string;
    PoolNo?: string;
    Winnings?: string;
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title shiaa3/Pool3Ticket.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryJoinPoolAndStakeAssetAll
     * @request GET:/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset
     */
    queryJoinPoolAndStakeAssetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllJoinPoolAndStakeAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryJoinPoolAndStakeAsset
     * @request GET:/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset/{id}
     */
    queryJoinPoolAndStakeAsset: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetJoinPoolAndStakeAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMembersAll
     * @request GET:/sap200/shiaa3/shiaa3/Members
     */
    queryMembersAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllMembersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryMembers
     * @request GET:/sap200/shiaa3/shiaa3/Members/{id}
     */
    queryMembers: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetMembersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool0TicketAll
     * @request GET:/sap200/shiaa3/shiaa3/Pool0Ticket
     */
    queryPool0TicketAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllPool0TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool0Ticket
     * @request GET:/sap200/shiaa3/shiaa3/Pool0Ticket/{id}
     */
    queryPool0Ticket: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetPool0TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool1TicketAll
     * @request GET:/sap200/shiaa3/shiaa3/Pool1Ticket
     */
    queryPool1TicketAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllPool1TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool1Ticket
     * @request GET:/sap200/shiaa3/shiaa3/Pool1Ticket/{id}
     */
    queryPool1Ticket: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetPool1TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool2TicketAll
     * @request GET:/sap200/shiaa3/shiaa3/Pool2Ticket
     */
    queryPool2TicketAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllPool2TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool2Ticket
     * @request GET:/sap200/shiaa3/shiaa3/Pool2Ticket/{id}
     */
    queryPool2Ticket: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetPool2TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool3TicketAll
     * @request GET:/sap200/shiaa3/shiaa3/Pool3Ticket
     */
    queryPool3TicketAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllPool3TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool3Ticket
     * @request GET:/sap200/shiaa3/shiaa3/Pool3Ticket/{id}
     */
    queryPool3Ticket: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetPool3TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool4TicketAll
     * @request GET:/sap200/shiaa3/shiaa3/Pool4Ticket
     */
    queryPool4TicketAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllPool4TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPool4Ticket
     * @request GET:/sap200/shiaa3/shiaa3/Pool4Ticket/{id}
     */
    queryPool4Ticket: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetPool4TicketResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWinnersAll
     * @request GET:/sap200/shiaa3/shiaa3/Winners
     */
    queryWinnersAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryAllWinnersResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWinners
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/sap200/shiaa3/shiaa3/Winners/{id}
     */
    queryWinners: (id: string, params?: RequestParams) => Promise<HttpResponse<Shiaa3QueryGetWinnersResponse, RpcStatus>>;
}
export {};
