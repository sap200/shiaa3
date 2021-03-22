/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

export type AssetsMsgDeleteAssetResponse = object;

export type AssetsMsgDeleteSentAssetResponse = object;

export type AssetsMsgDeleteTimedOutAssetResponse = object;

export type AssetsMsgDeleteTransferAssetResponse = object;

export type AssetsMsgSendIbcAssetResponse = object;

export type AssetsMsgUpdateAssetResponse = object;

export type AssetsMsgUpdateSentAssetResponse = object;

export type AssetsMsgUpdateTimedOutAssetResponse = object;

export type AssetsMsgUpdateTransferAssetResponse = object;

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

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title assets/SentAsset.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryAssetAll
   * @request GET:/sap200/shiaa3/assets/Asset
   */
  queryAssetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/Asset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryAsset
   * @request GET:/sap200/shiaa3/assets/Asset/{id}
   */
  queryAsset = (id: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/Asset/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySentAssetAll
   * @request GET:/sap200/shiaa3/assets/SentAsset
   */
  querySentAssetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllSentAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/SentAsset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySentAsset
   * @request GET:/sap200/shiaa3/assets/SentAsset/{id}
   */
  querySentAsset = (id: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetSentAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/SentAsset/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTimedOutAssetAll
   * @request GET:/sap200/shiaa3/assets/TimedOutAsset
   */
  queryTimedOutAssetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllTimedOutAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/TimedOutAsset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTimedOutAsset
   * @summary this line is used by starport scaffolding # 2
   * @request GET:/sap200/shiaa3/assets/TimedOutAsset/{id}
   */
  queryTimedOutAsset = (id: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetTimedOutAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/TimedOutAsset/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransferAssetAll
   * @request GET:/sap200/shiaa3/assets/TransferAsset
   */
  queryTransferAssetAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.countTotal"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<AssetsQueryAllTransferAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/TransferAsset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryTransferAsset
   * @request GET:/sap200/shiaa3/assets/TransferAsset/{id}
   */
  queryTransferAsset = (id: string, params: RequestParams = {}) =>
    this.request<AssetsQueryGetTransferAssetResponse, RpcStatus>({
      path: `/sap200/shiaa3/assets/TransferAsset/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
}
