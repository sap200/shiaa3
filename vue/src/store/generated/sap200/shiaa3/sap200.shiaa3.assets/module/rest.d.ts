export interface AssetsAsset {
    creator?: string;
    /** @format uint64 */
    id?: string;
    Serial?: string;
    Name?: string;
    /** @format int32 */
    AssetType?: number;
    /** @format int32 */
    Tokens?: number;
    Owner?: string;
}
export interface AssetsMsgCreateAssetResponse {
    /** @format uint64 */
    id?: string;
}
export interface AssetsMsgCreateSentAssetResponse {
    /** @format uint64 */
    id?: string;
}
export interface AssetsMsgCreateTimedOutAssetResponse {
    /** @format uint64 */
    id?: string;
}
export interface AssetsMsgCreateTransferAssetResponse {
    /** @format uint64 */
    id?: string;
}
export declare type AssetsMsgDeleteAssetResponse = object;
export declare type AssetsMsgDeleteSentAssetResponse = object;
export declare type AssetsMsgDeleteTimedOutAssetResponse = object;
export declare type AssetsMsgDeleteTransferAssetResponse = object;
export declare type AssetsMsgSendIbcAssetResponse = object;
export declare type AssetsMsgUpdateAssetResponse = object;
export declare type AssetsMsgUpdateSentAssetResponse = object;
export declare type AssetsMsgUpdateTimedOutAssetResponse = object;
export declare type AssetsMsgUpdateTransferAssetResponse = object;
export interface AssetsQueryAllAssetResponse {
    Asset?: AssetsAsset[];
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
export interface AssetsQueryAllSentAssetResponse {
    SentAsset?: AssetsSentAsset[];
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
export interface AssetsQueryAllTimedOutAssetResponse {
    TimedOutAsset?: AssetsTimedOutAsset[];
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
export interface AssetsQueryAllTransferAssetResponse {
    TransferAsset?: AssetsTransferAsset[];
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
export interface AssetsQueryGetAssetResponse {
    Asset?: AssetsAsset;
}
export interface AssetsQueryGetSentAssetResponse {
    SentAsset?: AssetsSentAsset;
}
export interface AssetsQueryGetTimedOutAssetResponse {
    TimedOutAsset?: AssetsTimedOutAsset;
}
export interface AssetsQueryGetTransferAssetResponse {
    TransferAsset?: AssetsTransferAsset;
}
export interface AssetsSentAsset {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AssetSerial?: string;
    Receiver?: string;
    TargetChain?: string;
}
export interface AssetsTimedOutAsset {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AssetSerial?: string;
    Receiver?: string;
    TargetChain?: string;
}
export interface AssetsTransferAsset {
    creator?: string;
    /** @format uint64 */
    id?: string;
    AssetSerial?: string;
    Receiver?: string;
}
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
 * @title assets/SentAsset.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryAssetAll
     * @request GET:/sap200/shiaa3/assets/Asset
     */
    queryAssetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<AssetsQueryAllAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAsset
     * @request GET:/sap200/shiaa3/assets/Asset/{id}
     */
    queryAsset: (id: string, params?: RequestParams) => Promise<HttpResponse<AssetsQueryGetAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentAssetAll
     * @request GET:/sap200/shiaa3/assets/SentAsset
     */
    querySentAssetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<AssetsQueryAllSentAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySentAsset
     * @request GET:/sap200/shiaa3/assets/SentAsset/{id}
     */
    querySentAsset: (id: string, params?: RequestParams) => Promise<HttpResponse<AssetsQueryGetSentAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTimedOutAssetAll
     * @request GET:/sap200/shiaa3/assets/TimedOutAsset
     */
    queryTimedOutAssetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<AssetsQueryAllTimedOutAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTimedOutAsset
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/sap200/shiaa3/assets/TimedOutAsset/{id}
     */
    queryTimedOutAsset: (id: string, params?: RequestParams) => Promise<HttpResponse<AssetsQueryGetTimedOutAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTransferAssetAll
     * @request GET:/sap200/shiaa3/assets/TransferAsset
     */
    queryTransferAssetAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<AssetsQueryAllTransferAssetResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTransferAsset
     * @request GET:/sap200/shiaa3/assets/TransferAsset/{id}
     */
    queryTransferAsset: (id: string, params?: RequestParams) => Promise<HttpResponse<AssetsQueryGetTransferAssetResponse, RpcStatus>>;
}
export {};
