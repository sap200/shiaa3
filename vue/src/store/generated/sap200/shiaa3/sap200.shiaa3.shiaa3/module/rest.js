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
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
})(ContentType || (ContentType = {}));
export class HttpClient {
    constructor(apiConfig = {}) {
        this.baseUrl = "";
        this.securityData = null;
        this.securityWorker = null;
        this.abortControllers = new Map();
        this.baseApiParams = {
            credentials: "same-origin",
            headers: {},
            redirect: "follow",
            referrerPolicy: "no-referrer",
        };
        this.setSecurityData = (data) => {
            this.securityData = data;
        };
        this.contentFormatters = {
            [ContentType.Json]: (input) => input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
            [ContentType.FormData]: (input) => Object.keys(input || {}).reduce((data, key) => {
                data.append(key, input[key]);
                return data;
            }, new FormData()),
            [ContentType.UrlEncoded]: (input) => this.toQueryString(input),
        };
        this.createAbortSignal = (cancelToken) => {
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
        this.abortRequest = (cancelToken) => {
            const abortController = this.abortControllers.get(cancelToken);
            if (abortController) {
                abortController.abort();
                this.abortControllers.delete(cancelToken);
            }
        };
        this.request = ({ body, secure, path, type, query, format = "json", baseUrl, cancelToken, ...params }) => {
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
                const r = response;
                r.data = null;
                r.error = null;
                const data = await response[format]()
                    .then((data) => {
                    if (r.ok) {
                        r.data = data;
                    }
                    else {
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
                if (!response.ok)
                    throw data;
                return data;
            });
        };
        Object.assign(this, apiConfig);
    }
    addQueryParam(query, key) {
        const value = query[key];
        return (encodeURIComponent(key) +
            "=" +
            encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`));
    }
    toQueryString(rawQuery) {
        const query = rawQuery || {};
        const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
        return keys
            .map((key) => typeof query[key] === "object" && !Array.isArray(query[key])
            ? this.toQueryString(query[key])
            : this.addQueryParam(query, key))
            .join("&");
    }
    addQueryParams(rawQuery) {
        const queryString = this.toQueryString(rawQuery);
        return queryString ? `?${queryString}` : "";
    }
    mergeRequestParams(params1, params2) {
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
}
/**
 * @title shiaa3/Pool3Ticket.proto
 * @version version not set
 */
export class Api extends HttpClient {
    constructor() {
        super(...arguments);
        /**
         * No description
         *
         * @tags Query
         * @name QueryJoinPoolAndStakeAssetAll
         * @request GET:/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset
         */
        this.queryJoinPoolAndStakeAssetAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryJoinPoolAndStakeAsset
         * @request GET:/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset/{id}
         */
        this.queryJoinPoolAndStakeAsset = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/JoinPoolAndStakeAsset/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryMembersAll
         * @request GET:/sap200/shiaa3/shiaa3/Members
         */
        this.queryMembersAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Members`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryMembers
         * @request GET:/sap200/shiaa3/shiaa3/Members/{id}
         */
        this.queryMembers = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Members/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool0TicketAll
         * @request GET:/sap200/shiaa3/shiaa3/Pool0Ticket
         */
        this.queryPool0TicketAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool0Ticket`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool0Ticket
         * @request GET:/sap200/shiaa3/shiaa3/Pool0Ticket/{id}
         */
        this.queryPool0Ticket = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool0Ticket/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool1TicketAll
         * @request GET:/sap200/shiaa3/shiaa3/Pool1Ticket
         */
        this.queryPool1TicketAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool1Ticket`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool1Ticket
         * @request GET:/sap200/shiaa3/shiaa3/Pool1Ticket/{id}
         */
        this.queryPool1Ticket = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool1Ticket/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool2TicketAll
         * @request GET:/sap200/shiaa3/shiaa3/Pool2Ticket
         */
        this.queryPool2TicketAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool2Ticket`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool2Ticket
         * @request GET:/sap200/shiaa3/shiaa3/Pool2Ticket/{id}
         */
        this.queryPool2Ticket = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool2Ticket/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool3TicketAll
         * @request GET:/sap200/shiaa3/shiaa3/Pool3Ticket
         */
        this.queryPool3TicketAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool3Ticket`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool3Ticket
         * @request GET:/sap200/shiaa3/shiaa3/Pool3Ticket/{id}
         */
        this.queryPool3Ticket = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool3Ticket/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool4TicketAll
         * @request GET:/sap200/shiaa3/shiaa3/Pool4Ticket
         */
        this.queryPool4TicketAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool4Ticket`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryPool4Ticket
         * @request GET:/sap200/shiaa3/shiaa3/Pool4Ticket/{id}
         */
        this.queryPool4Ticket = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Pool4Ticket/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryWinnersAll
         * @request GET:/sap200/shiaa3/shiaa3/Winners
         */
        this.queryWinnersAll = (query, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Winners`,
            method: "GET",
            query: query,
            format: "json",
            ...params,
        });
        /**
         * No description
         *
         * @tags Query
         * @name QueryWinners
         * @summary this line is used by starport scaffolding # 2
         * @request GET:/sap200/shiaa3/shiaa3/Winners/{id}
         */
        this.queryWinners = (id, params = {}) => this.request({
            path: `/sap200/shiaa3/shiaa3/Winners/${id}`,
            method: "GET",
            format: "json",
            ...params,
        });
    }
}
