/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { TimedOutAsset } from "../assets/TimedOutAsset";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { SentAsset } from "../assets/SentAsset";
import { TransferAsset } from "../assets/TransferAsset";
import { Asset } from "../assets/Asset";

export const protobufPackage = "sap200.shiaa3.assets";

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

const baseQueryGetTimedOutAssetRequest: object = { id: 0 };

export const QueryGetTimedOutAssetRequest = {
  encode(
    message: QueryGetTimedOutAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimedOutAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimedOutAssetRequest,
    } as QueryGetTimedOutAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimedOutAssetRequest {
    const message = {
      ...baseQueryGetTimedOutAssetRequest,
    } as QueryGetTimedOutAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTimedOutAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimedOutAssetRequest>
  ): QueryGetTimedOutAssetRequest {
    const message = {
      ...baseQueryGetTimedOutAssetRequest,
    } as QueryGetTimedOutAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTimedOutAssetResponse: object = {};

export const QueryGetTimedOutAssetResponse = {
  encode(
    message: QueryGetTimedOutAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TimedOutAsset !== undefined) {
      TimedOutAsset.encode(
        message.TimedOutAsset,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTimedOutAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTimedOutAssetResponse,
    } as QueryGetTimedOutAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimedOutAsset = TimedOutAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTimedOutAssetResponse {
    const message = {
      ...baseQueryGetTimedOutAssetResponse,
    } as QueryGetTimedOutAssetResponse;
    if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
      message.TimedOutAsset = TimedOutAsset.fromJSON(object.TimedOutAsset);
    } else {
      message.TimedOutAsset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTimedOutAssetResponse): unknown {
    const obj: any = {};
    message.TimedOutAsset !== undefined &&
      (obj.TimedOutAsset = message.TimedOutAsset
        ? TimedOutAsset.toJSON(message.TimedOutAsset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTimedOutAssetResponse>
  ): QueryGetTimedOutAssetResponse {
    const message = {
      ...baseQueryGetTimedOutAssetResponse,
    } as QueryGetTimedOutAssetResponse;
    if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
      message.TimedOutAsset = TimedOutAsset.fromPartial(object.TimedOutAsset);
    } else {
      message.TimedOutAsset = undefined;
    }
    return message;
  },
};

const baseQueryAllTimedOutAssetRequest: object = {};

export const QueryAllTimedOutAssetRequest = {
  encode(
    message: QueryAllTimedOutAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimedOutAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimedOutAssetRequest,
    } as QueryAllTimedOutAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimedOutAssetRequest {
    const message = {
      ...baseQueryAllTimedOutAssetRequest,
    } as QueryAllTimedOutAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimedOutAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimedOutAssetRequest>
  ): QueryAllTimedOutAssetRequest {
    const message = {
      ...baseQueryAllTimedOutAssetRequest,
    } as QueryAllTimedOutAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTimedOutAssetResponse: object = {};

export const QueryAllTimedOutAssetResponse = {
  encode(
    message: QueryAllTimedOutAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.TimedOutAsset) {
      TimedOutAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTimedOutAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTimedOutAssetResponse,
    } as QueryAllTimedOutAssetResponse;
    message.TimedOutAsset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TimedOutAsset.push(
            TimedOutAsset.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTimedOutAssetResponse {
    const message = {
      ...baseQueryAllTimedOutAssetResponse,
    } as QueryAllTimedOutAssetResponse;
    message.TimedOutAsset = [];
    if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
      for (const e of object.TimedOutAsset) {
        message.TimedOutAsset.push(TimedOutAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTimedOutAssetResponse): unknown {
    const obj: any = {};
    if (message.TimedOutAsset) {
      obj.TimedOutAsset = message.TimedOutAsset.map((e) =>
        e ? TimedOutAsset.toJSON(e) : undefined
      );
    } else {
      obj.TimedOutAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTimedOutAssetResponse>
  ): QueryAllTimedOutAssetResponse {
    const message = {
      ...baseQueryAllTimedOutAssetResponse,
    } as QueryAllTimedOutAssetResponse;
    message.TimedOutAsset = [];
    if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
      for (const e of object.TimedOutAsset) {
        message.TimedOutAsset.push(TimedOutAsset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetSentAssetRequest: object = { id: 0 };

export const QueryGetSentAssetRequest = {
  encode(
    message: QueryGetSentAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSentAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentAssetRequest,
    } as QueryGetSentAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentAssetRequest {
    const message = {
      ...baseQueryGetSentAssetRequest,
    } as QueryGetSentAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetSentAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentAssetRequest>
  ): QueryGetSentAssetRequest {
    const message = {
      ...baseQueryGetSentAssetRequest,
    } as QueryGetSentAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetSentAssetResponse: object = {};

export const QueryGetSentAssetResponse = {
  encode(
    message: QueryGetSentAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.SentAsset !== undefined) {
      SentAsset.encode(message.SentAsset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetSentAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetSentAssetResponse,
    } as QueryGetSentAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentAsset = SentAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetSentAssetResponse {
    const message = {
      ...baseQueryGetSentAssetResponse,
    } as QueryGetSentAssetResponse;
    if (object.SentAsset !== undefined && object.SentAsset !== null) {
      message.SentAsset = SentAsset.fromJSON(object.SentAsset);
    } else {
      message.SentAsset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetSentAssetResponse): unknown {
    const obj: any = {};
    message.SentAsset !== undefined &&
      (obj.SentAsset = message.SentAsset
        ? SentAsset.toJSON(message.SentAsset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetSentAssetResponse>
  ): QueryGetSentAssetResponse {
    const message = {
      ...baseQueryGetSentAssetResponse,
    } as QueryGetSentAssetResponse;
    if (object.SentAsset !== undefined && object.SentAsset !== null) {
      message.SentAsset = SentAsset.fromPartial(object.SentAsset);
    } else {
      message.SentAsset = undefined;
    }
    return message;
  },
};

const baseQueryAllSentAssetRequest: object = {};

export const QueryAllSentAssetRequest = {
  encode(
    message: QueryAllSentAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSentAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentAssetRequest,
    } as QueryAllSentAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentAssetRequest {
    const message = {
      ...baseQueryAllSentAssetRequest,
    } as QueryAllSentAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentAssetRequest>
  ): QueryAllSentAssetRequest {
    const message = {
      ...baseQueryAllSentAssetRequest,
    } as QueryAllSentAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllSentAssetResponse: object = {};

export const QueryAllSentAssetResponse = {
  encode(
    message: QueryAllSentAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.SentAsset) {
      SentAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllSentAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllSentAssetResponse,
    } as QueryAllSentAssetResponse;
    message.SentAsset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.SentAsset.push(SentAsset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllSentAssetResponse {
    const message = {
      ...baseQueryAllSentAssetResponse,
    } as QueryAllSentAssetResponse;
    message.SentAsset = [];
    if (object.SentAsset !== undefined && object.SentAsset !== null) {
      for (const e of object.SentAsset) {
        message.SentAsset.push(SentAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllSentAssetResponse): unknown {
    const obj: any = {};
    if (message.SentAsset) {
      obj.SentAsset = message.SentAsset.map((e) =>
        e ? SentAsset.toJSON(e) : undefined
      );
    } else {
      obj.SentAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllSentAssetResponse>
  ): QueryAllSentAssetResponse {
    const message = {
      ...baseQueryAllSentAssetResponse,
    } as QueryAllSentAssetResponse;
    message.SentAsset = [];
    if (object.SentAsset !== undefined && object.SentAsset !== null) {
      for (const e of object.SentAsset) {
        message.SentAsset.push(SentAsset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetTransferAssetRequest: object = { id: 0 };

export const QueryGetTransferAssetRequest = {
  encode(
    message: QueryGetTransferAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTransferAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransferAssetRequest,
    } as QueryGetTransferAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransferAssetRequest {
    const message = {
      ...baseQueryGetTransferAssetRequest,
    } as QueryGetTransferAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetTransferAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransferAssetRequest>
  ): QueryGetTransferAssetRequest {
    const message = {
      ...baseQueryGetTransferAssetRequest,
    } as QueryGetTransferAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetTransferAssetResponse: object = {};

export const QueryGetTransferAssetResponse = {
  encode(
    message: QueryGetTransferAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.TransferAsset !== undefined) {
      TransferAsset.encode(
        message.TransferAsset,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetTransferAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetTransferAssetResponse,
    } as QueryGetTransferAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TransferAsset = TransferAsset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetTransferAssetResponse {
    const message = {
      ...baseQueryGetTransferAssetResponse,
    } as QueryGetTransferAssetResponse;
    if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
      message.TransferAsset = TransferAsset.fromJSON(object.TransferAsset);
    } else {
      message.TransferAsset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetTransferAssetResponse): unknown {
    const obj: any = {};
    message.TransferAsset !== undefined &&
      (obj.TransferAsset = message.TransferAsset
        ? TransferAsset.toJSON(message.TransferAsset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetTransferAssetResponse>
  ): QueryGetTransferAssetResponse {
    const message = {
      ...baseQueryGetTransferAssetResponse,
    } as QueryGetTransferAssetResponse;
    if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
      message.TransferAsset = TransferAsset.fromPartial(object.TransferAsset);
    } else {
      message.TransferAsset = undefined;
    }
    return message;
  },
};

const baseQueryAllTransferAssetRequest: object = {};

export const QueryAllTransferAssetRequest = {
  encode(
    message: QueryAllTransferAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTransferAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransferAssetRequest,
    } as QueryAllTransferAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransferAssetRequest {
    const message = {
      ...baseQueryAllTransferAssetRequest,
    } as QueryAllTransferAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransferAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransferAssetRequest>
  ): QueryAllTransferAssetRequest {
    const message = {
      ...baseQueryAllTransferAssetRequest,
    } as QueryAllTransferAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllTransferAssetResponse: object = {};

export const QueryAllTransferAssetResponse = {
  encode(
    message: QueryAllTransferAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.TransferAsset) {
      TransferAsset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllTransferAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllTransferAssetResponse,
    } as QueryAllTransferAssetResponse;
    message.TransferAsset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.TransferAsset.push(
            TransferAsset.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllTransferAssetResponse {
    const message = {
      ...baseQueryAllTransferAssetResponse,
    } as QueryAllTransferAssetResponse;
    message.TransferAsset = [];
    if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
      for (const e of object.TransferAsset) {
        message.TransferAsset.push(TransferAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllTransferAssetResponse): unknown {
    const obj: any = {};
    if (message.TransferAsset) {
      obj.TransferAsset = message.TransferAsset.map((e) =>
        e ? TransferAsset.toJSON(e) : undefined
      );
    } else {
      obj.TransferAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllTransferAssetResponse>
  ): QueryAllTransferAssetResponse {
    const message = {
      ...baseQueryAllTransferAssetResponse,
    } as QueryAllTransferAssetResponse;
    message.TransferAsset = [];
    if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
      for (const e of object.TransferAsset) {
        message.TransferAsset.push(TransferAsset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAssetRequest: object = { id: 0 };

export const QueryGetAssetRequest = {
  encode(
    message: QueryGetAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAssetRequest } as QueryGetAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAssetRequest {
    const message = { ...baseQueryGetAssetRequest } as QueryGetAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetAssetRequest>): QueryGetAssetRequest {
    const message = { ...baseQueryGetAssetRequest } as QueryGetAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetAssetResponse: object = {};

export const QueryGetAssetResponse = {
  encode(
    message: QueryGetAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Asset !== undefined) {
      Asset.encode(message.Asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetAssetResponse } as QueryGetAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Asset = Asset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAssetResponse {
    const message = { ...baseQueryGetAssetResponse } as QueryGetAssetResponse;
    if (object.Asset !== undefined && object.Asset !== null) {
      message.Asset = Asset.fromJSON(object.Asset);
    } else {
      message.Asset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAssetResponse): unknown {
    const obj: any = {};
    message.Asset !== undefined &&
      (obj.Asset = message.Asset ? Asset.toJSON(message.Asset) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAssetResponse>
  ): QueryGetAssetResponse {
    const message = { ...baseQueryGetAssetResponse } as QueryGetAssetResponse;
    if (object.Asset !== undefined && object.Asset !== null) {
      message.Asset = Asset.fromPartial(object.Asset);
    } else {
      message.Asset = undefined;
    }
    return message;
  },
};

const baseQueryAllAssetRequest: object = {};

export const QueryAllAssetRequest = {
  encode(
    message: QueryAllAssetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAssetRequest } as QueryAllAssetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAssetRequest {
    const message = { ...baseQueryAllAssetRequest } as QueryAllAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllAssetRequest>): QueryAllAssetRequest {
    const message = { ...baseQueryAllAssetRequest } as QueryAllAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllAssetResponse: object = {};

export const QueryAllAssetResponse = {
  encode(
    message: QueryAllAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Asset) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllAssetResponse } as QueryAllAssetResponse;
    message.Asset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Asset.push(Asset.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAssetResponse {
    const message = { ...baseQueryAllAssetResponse } as QueryAllAssetResponse;
    message.Asset = [];
    if (object.Asset !== undefined && object.Asset !== null) {
      for (const e of object.Asset) {
        message.Asset.push(Asset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllAssetResponse): unknown {
    const obj: any = {};
    if (message.Asset) {
      obj.Asset = message.Asset.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.Asset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllAssetResponse>
  ): QueryAllAssetResponse {
    const message = { ...baseQueryAllAssetResponse } as QueryAllAssetResponse;
    message.Asset = [];
    if (object.Asset !== undefined && object.Asset !== null) {
      for (const e of object.Asset) {
        message.Asset.push(Asset.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  TimedOutAsset(
    request: QueryGetTimedOutAssetRequest
  ): Promise<QueryGetTimedOutAssetResponse>;
  TimedOutAssetAll(
    request: QueryAllTimedOutAssetRequest
  ): Promise<QueryAllTimedOutAssetResponse>;
  SentAsset(
    request: QueryGetSentAssetRequest
  ): Promise<QueryGetSentAssetResponse>;
  SentAssetAll(
    request: QueryAllSentAssetRequest
  ): Promise<QueryAllSentAssetResponse>;
  TransferAsset(
    request: QueryGetTransferAssetRequest
  ): Promise<QueryGetTransferAssetResponse>;
  TransferAssetAll(
    request: QueryAllTransferAssetRequest
  ): Promise<QueryAllTransferAssetResponse>;
  Asset(request: QueryGetAssetRequest): Promise<QueryGetAssetResponse>;
  AssetAll(request: QueryAllAssetRequest): Promise<QueryAllAssetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  TimedOutAsset(
    request: QueryGetTimedOutAssetRequest
  ): Promise<QueryGetTimedOutAssetResponse> {
    const data = QueryGetTimedOutAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "TimedOutAsset",
      data
    );
    return promise.then((data) =>
      QueryGetTimedOutAssetResponse.decode(new Reader(data))
    );
  }

  TimedOutAssetAll(
    request: QueryAllTimedOutAssetRequest
  ): Promise<QueryAllTimedOutAssetResponse> {
    const data = QueryAllTimedOutAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "TimedOutAssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllTimedOutAssetResponse.decode(new Reader(data))
    );
  }

  SentAsset(
    request: QueryGetSentAssetRequest
  ): Promise<QueryGetSentAssetResponse> {
    const data = QueryGetSentAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "SentAsset",
      data
    );
    return promise.then((data) =>
      QueryGetSentAssetResponse.decode(new Reader(data))
    );
  }

  SentAssetAll(
    request: QueryAllSentAssetRequest
  ): Promise<QueryAllSentAssetResponse> {
    const data = QueryAllSentAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "SentAssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllSentAssetResponse.decode(new Reader(data))
    );
  }

  TransferAsset(
    request: QueryGetTransferAssetRequest
  ): Promise<QueryGetTransferAssetResponse> {
    const data = QueryGetTransferAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "TransferAsset",
      data
    );
    return promise.then((data) =>
      QueryGetTransferAssetResponse.decode(new Reader(data))
    );
  }

  TransferAssetAll(
    request: QueryAllTransferAssetRequest
  ): Promise<QueryAllTransferAssetResponse> {
    const data = QueryAllTransferAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "TransferAssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllTransferAssetResponse.decode(new Reader(data))
    );
  }

  Asset(request: QueryGetAssetRequest): Promise<QueryGetAssetResponse> {
    const data = QueryGetAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "Asset",
      data
    );
    return promise.then((data) =>
      QueryGetAssetResponse.decode(new Reader(data))
    );
  }

  AssetAll(request: QueryAllAssetRequest): Promise<QueryAllAssetResponse> {
    const data = QueryAllAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Query",
      "AssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllAssetResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
