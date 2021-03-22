/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Winners } from "../shiaa3/Winners";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Members } from "../shiaa3/Members";
import { Pool4Ticket } from "../shiaa3/Pool4Ticket";
import { Pool3Ticket } from "../shiaa3/Pool3Ticket";
import { Pool2Ticket } from "../shiaa3/Pool2Ticket";
import { Pool1Ticket } from "../shiaa3/Pool1Ticket";
import { Pool0Ticket } from "../shiaa3/Pool0Ticket";
import { JoinPoolAndStakeAsset } from "../shiaa3/JoinPoolAndStakeAsset";

export const protobufPackage = "sap200.shiaa3.shiaa3";

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

const baseQueryGetWinnersRequest: object = { id: 0 };

export const QueryGetWinnersRequest = {
  encode(
    message: QueryGetWinnersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWinnersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetWinnersRequest } as QueryGetWinnersRequest;
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

  fromJSON(object: any): QueryGetWinnersRequest {
    const message = { ...baseQueryGetWinnersRequest } as QueryGetWinnersRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetWinnersRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWinnersRequest>
  ): QueryGetWinnersRequest {
    const message = { ...baseQueryGetWinnersRequest } as QueryGetWinnersRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetWinnersResponse: object = {};

export const QueryGetWinnersResponse = {
  encode(
    message: QueryGetWinnersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Winners !== undefined) {
      Winners.encode(message.Winners, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetWinnersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetWinnersResponse,
    } as QueryGetWinnersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Winners = Winners.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetWinnersResponse {
    const message = {
      ...baseQueryGetWinnersResponse,
    } as QueryGetWinnersResponse;
    if (object.Winners !== undefined && object.Winners !== null) {
      message.Winners = Winners.fromJSON(object.Winners);
    } else {
      message.Winners = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetWinnersResponse): unknown {
    const obj: any = {};
    message.Winners !== undefined &&
      (obj.Winners = message.Winners
        ? Winners.toJSON(message.Winners)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetWinnersResponse>
  ): QueryGetWinnersResponse {
    const message = {
      ...baseQueryGetWinnersResponse,
    } as QueryGetWinnersResponse;
    if (object.Winners !== undefined && object.Winners !== null) {
      message.Winners = Winners.fromPartial(object.Winners);
    } else {
      message.Winners = undefined;
    }
    return message;
  },
};

const baseQueryAllWinnersRequest: object = {};

export const QueryAllWinnersRequest = {
  encode(
    message: QueryAllWinnersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWinnersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllWinnersRequest } as QueryAllWinnersRequest;
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

  fromJSON(object: any): QueryAllWinnersRequest {
    const message = { ...baseQueryAllWinnersRequest } as QueryAllWinnersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWinnersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWinnersRequest>
  ): QueryAllWinnersRequest {
    const message = { ...baseQueryAllWinnersRequest } as QueryAllWinnersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllWinnersResponse: object = {};

export const QueryAllWinnersResponse = {
  encode(
    message: QueryAllWinnersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Winners) {
      Winners.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllWinnersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllWinnersResponse,
    } as QueryAllWinnersResponse;
    message.Winners = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Winners.push(Winners.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllWinnersResponse {
    const message = {
      ...baseQueryAllWinnersResponse,
    } as QueryAllWinnersResponse;
    message.Winners = [];
    if (object.Winners !== undefined && object.Winners !== null) {
      for (const e of object.Winners) {
        message.Winners.push(Winners.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllWinnersResponse): unknown {
    const obj: any = {};
    if (message.Winners) {
      obj.Winners = message.Winners.map((e) =>
        e ? Winners.toJSON(e) : undefined
      );
    } else {
      obj.Winners = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllWinnersResponse>
  ): QueryAllWinnersResponse {
    const message = {
      ...baseQueryAllWinnersResponse,
    } as QueryAllWinnersResponse;
    message.Winners = [];
    if (object.Winners !== undefined && object.Winners !== null) {
      for (const e of object.Winners) {
        message.Winners.push(Winners.fromPartial(e));
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

const baseQueryGetMembersRequest: object = { id: 0 };

export const QueryGetMembersRequest = {
  encode(
    message: QueryGetMembersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMembersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetMembersRequest } as QueryGetMembersRequest;
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

  fromJSON(object: any): QueryGetMembersRequest {
    const message = { ...baseQueryGetMembersRequest } as QueryGetMembersRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetMembersRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMembersRequest>
  ): QueryGetMembersRequest {
    const message = { ...baseQueryGetMembersRequest } as QueryGetMembersRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetMembersResponse: object = {};

export const QueryGetMembersResponse = {
  encode(
    message: QueryGetMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Members !== undefined) {
      Members.encode(message.Members, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMembersResponse,
    } as QueryGetMembersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Members = Members.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMembersResponse {
    const message = {
      ...baseQueryGetMembersResponse,
    } as QueryGetMembersResponse;
    if (object.Members !== undefined && object.Members !== null) {
      message.Members = Members.fromJSON(object.Members);
    } else {
      message.Members = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMembersResponse): unknown {
    const obj: any = {};
    message.Members !== undefined &&
      (obj.Members = message.Members
        ? Members.toJSON(message.Members)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMembersResponse>
  ): QueryGetMembersResponse {
    const message = {
      ...baseQueryGetMembersResponse,
    } as QueryGetMembersResponse;
    if (object.Members !== undefined && object.Members !== null) {
      message.Members = Members.fromPartial(object.Members);
    } else {
      message.Members = undefined;
    }
    return message;
  },
};

const baseQueryAllMembersRequest: object = {};

export const QueryAllMembersRequest = {
  encode(
    message: QueryAllMembersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMembersRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllMembersRequest } as QueryAllMembersRequest;
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

  fromJSON(object: any): QueryAllMembersRequest {
    const message = { ...baseQueryAllMembersRequest } as QueryAllMembersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMembersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMembersRequest>
  ): QueryAllMembersRequest {
    const message = { ...baseQueryAllMembersRequest } as QueryAllMembersRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMembersResponse: object = {};

export const QueryAllMembersResponse = {
  encode(
    message: QueryAllMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Members) {
      Members.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMembersResponse,
    } as QueryAllMembersResponse;
    message.Members = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Members.push(Members.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllMembersResponse {
    const message = {
      ...baseQueryAllMembersResponse,
    } as QueryAllMembersResponse;
    message.Members = [];
    if (object.Members !== undefined && object.Members !== null) {
      for (const e of object.Members) {
        message.Members.push(Members.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMembersResponse): unknown {
    const obj: any = {};
    if (message.Members) {
      obj.Members = message.Members.map((e) =>
        e ? Members.toJSON(e) : undefined
      );
    } else {
      obj.Members = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMembersResponse>
  ): QueryAllMembersResponse {
    const message = {
      ...baseQueryAllMembersResponse,
    } as QueryAllMembersResponse;
    message.Members = [];
    if (object.Members !== undefined && object.Members !== null) {
      for (const e of object.Members) {
        message.Members.push(Members.fromPartial(e));
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

const baseQueryGetPool4TicketRequest: object = { id: 0 };

export const QueryGetPool4TicketRequest = {
  encode(
    message: QueryGetPool4TicketRequest,
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
  ): QueryGetPool4TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool4TicketRequest,
    } as QueryGetPool4TicketRequest;
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

  fromJSON(object: any): QueryGetPool4TicketRequest {
    const message = {
      ...baseQueryGetPool4TicketRequest,
    } as QueryGetPool4TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPool4TicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool4TicketRequest>
  ): QueryGetPool4TicketRequest {
    const message = {
      ...baseQueryGetPool4TicketRequest,
    } as QueryGetPool4TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPool4TicketResponse: object = {};

export const QueryGetPool4TicketResponse = {
  encode(
    message: QueryGetPool4TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool4Ticket !== undefined) {
      Pool4Ticket.encode(
        message.Pool4Ticket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPool4TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool4TicketResponse,
    } as QueryGetPool4TicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool4Ticket = Pool4Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPool4TicketResponse {
    const message = {
      ...baseQueryGetPool4TicketResponse,
    } as QueryGetPool4TicketResponse;
    if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
      message.Pool4Ticket = Pool4Ticket.fromJSON(object.Pool4Ticket);
    } else {
      message.Pool4Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPool4TicketResponse): unknown {
    const obj: any = {};
    message.Pool4Ticket !== undefined &&
      (obj.Pool4Ticket = message.Pool4Ticket
        ? Pool4Ticket.toJSON(message.Pool4Ticket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool4TicketResponse>
  ): QueryGetPool4TicketResponse {
    const message = {
      ...baseQueryGetPool4TicketResponse,
    } as QueryGetPool4TicketResponse;
    if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
      message.Pool4Ticket = Pool4Ticket.fromPartial(object.Pool4Ticket);
    } else {
      message.Pool4Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllPool4TicketRequest: object = {};

export const QueryAllPool4TicketRequest = {
  encode(
    message: QueryAllPool4TicketRequest,
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
  ): QueryAllPool4TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool4TicketRequest,
    } as QueryAllPool4TicketRequest;
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

  fromJSON(object: any): QueryAllPool4TicketRequest {
    const message = {
      ...baseQueryAllPool4TicketRequest,
    } as QueryAllPool4TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool4TicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool4TicketRequest>
  ): QueryAllPool4TicketRequest {
    const message = {
      ...baseQueryAllPool4TicketRequest,
    } as QueryAllPool4TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPool4TicketResponse: object = {};

export const QueryAllPool4TicketResponse = {
  encode(
    message: QueryAllPool4TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool4Ticket) {
      Pool4Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPool4TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool4TicketResponse,
    } as QueryAllPool4TicketResponse;
    message.Pool4Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool4Ticket.push(Pool4Ticket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPool4TicketResponse {
    const message = {
      ...baseQueryAllPool4TicketResponse,
    } as QueryAllPool4TicketResponse;
    message.Pool4Ticket = [];
    if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
      for (const e of object.Pool4Ticket) {
        message.Pool4Ticket.push(Pool4Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool4TicketResponse): unknown {
    const obj: any = {};
    if (message.Pool4Ticket) {
      obj.Pool4Ticket = message.Pool4Ticket.map((e) =>
        e ? Pool4Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Pool4Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool4TicketResponse>
  ): QueryAllPool4TicketResponse {
    const message = {
      ...baseQueryAllPool4TicketResponse,
    } as QueryAllPool4TicketResponse;
    message.Pool4Ticket = [];
    if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
      for (const e of object.Pool4Ticket) {
        message.Pool4Ticket.push(Pool4Ticket.fromPartial(e));
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

const baseQueryGetPool3TicketRequest: object = { id: 0 };

export const QueryGetPool3TicketRequest = {
  encode(
    message: QueryGetPool3TicketRequest,
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
  ): QueryGetPool3TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool3TicketRequest,
    } as QueryGetPool3TicketRequest;
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

  fromJSON(object: any): QueryGetPool3TicketRequest {
    const message = {
      ...baseQueryGetPool3TicketRequest,
    } as QueryGetPool3TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPool3TicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool3TicketRequest>
  ): QueryGetPool3TicketRequest {
    const message = {
      ...baseQueryGetPool3TicketRequest,
    } as QueryGetPool3TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPool3TicketResponse: object = {};

export const QueryGetPool3TicketResponse = {
  encode(
    message: QueryGetPool3TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool3Ticket !== undefined) {
      Pool3Ticket.encode(
        message.Pool3Ticket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPool3TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool3TicketResponse,
    } as QueryGetPool3TicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool3Ticket = Pool3Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPool3TicketResponse {
    const message = {
      ...baseQueryGetPool3TicketResponse,
    } as QueryGetPool3TicketResponse;
    if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
      message.Pool3Ticket = Pool3Ticket.fromJSON(object.Pool3Ticket);
    } else {
      message.Pool3Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPool3TicketResponse): unknown {
    const obj: any = {};
    message.Pool3Ticket !== undefined &&
      (obj.Pool3Ticket = message.Pool3Ticket
        ? Pool3Ticket.toJSON(message.Pool3Ticket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool3TicketResponse>
  ): QueryGetPool3TicketResponse {
    const message = {
      ...baseQueryGetPool3TicketResponse,
    } as QueryGetPool3TicketResponse;
    if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
      message.Pool3Ticket = Pool3Ticket.fromPartial(object.Pool3Ticket);
    } else {
      message.Pool3Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllPool3TicketRequest: object = {};

export const QueryAllPool3TicketRequest = {
  encode(
    message: QueryAllPool3TicketRequest,
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
  ): QueryAllPool3TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool3TicketRequest,
    } as QueryAllPool3TicketRequest;
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

  fromJSON(object: any): QueryAllPool3TicketRequest {
    const message = {
      ...baseQueryAllPool3TicketRequest,
    } as QueryAllPool3TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool3TicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool3TicketRequest>
  ): QueryAllPool3TicketRequest {
    const message = {
      ...baseQueryAllPool3TicketRequest,
    } as QueryAllPool3TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPool3TicketResponse: object = {};

export const QueryAllPool3TicketResponse = {
  encode(
    message: QueryAllPool3TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool3Ticket) {
      Pool3Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPool3TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool3TicketResponse,
    } as QueryAllPool3TicketResponse;
    message.Pool3Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool3Ticket.push(Pool3Ticket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPool3TicketResponse {
    const message = {
      ...baseQueryAllPool3TicketResponse,
    } as QueryAllPool3TicketResponse;
    message.Pool3Ticket = [];
    if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
      for (const e of object.Pool3Ticket) {
        message.Pool3Ticket.push(Pool3Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool3TicketResponse): unknown {
    const obj: any = {};
    if (message.Pool3Ticket) {
      obj.Pool3Ticket = message.Pool3Ticket.map((e) =>
        e ? Pool3Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Pool3Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool3TicketResponse>
  ): QueryAllPool3TicketResponse {
    const message = {
      ...baseQueryAllPool3TicketResponse,
    } as QueryAllPool3TicketResponse;
    message.Pool3Ticket = [];
    if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
      for (const e of object.Pool3Ticket) {
        message.Pool3Ticket.push(Pool3Ticket.fromPartial(e));
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

const baseQueryGetPool2TicketRequest: object = { id: 0 };

export const QueryGetPool2TicketRequest = {
  encode(
    message: QueryGetPool2TicketRequest,
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
  ): QueryGetPool2TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool2TicketRequest,
    } as QueryGetPool2TicketRequest;
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

  fromJSON(object: any): QueryGetPool2TicketRequest {
    const message = {
      ...baseQueryGetPool2TicketRequest,
    } as QueryGetPool2TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPool2TicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool2TicketRequest>
  ): QueryGetPool2TicketRequest {
    const message = {
      ...baseQueryGetPool2TicketRequest,
    } as QueryGetPool2TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPool2TicketResponse: object = {};

export const QueryGetPool2TicketResponse = {
  encode(
    message: QueryGetPool2TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool2Ticket !== undefined) {
      Pool2Ticket.encode(
        message.Pool2Ticket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPool2TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool2TicketResponse,
    } as QueryGetPool2TicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool2Ticket = Pool2Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPool2TicketResponse {
    const message = {
      ...baseQueryGetPool2TicketResponse,
    } as QueryGetPool2TicketResponse;
    if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
      message.Pool2Ticket = Pool2Ticket.fromJSON(object.Pool2Ticket);
    } else {
      message.Pool2Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPool2TicketResponse): unknown {
    const obj: any = {};
    message.Pool2Ticket !== undefined &&
      (obj.Pool2Ticket = message.Pool2Ticket
        ? Pool2Ticket.toJSON(message.Pool2Ticket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool2TicketResponse>
  ): QueryGetPool2TicketResponse {
    const message = {
      ...baseQueryGetPool2TicketResponse,
    } as QueryGetPool2TicketResponse;
    if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
      message.Pool2Ticket = Pool2Ticket.fromPartial(object.Pool2Ticket);
    } else {
      message.Pool2Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllPool2TicketRequest: object = {};

export const QueryAllPool2TicketRequest = {
  encode(
    message: QueryAllPool2TicketRequest,
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
  ): QueryAllPool2TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool2TicketRequest,
    } as QueryAllPool2TicketRequest;
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

  fromJSON(object: any): QueryAllPool2TicketRequest {
    const message = {
      ...baseQueryAllPool2TicketRequest,
    } as QueryAllPool2TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool2TicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool2TicketRequest>
  ): QueryAllPool2TicketRequest {
    const message = {
      ...baseQueryAllPool2TicketRequest,
    } as QueryAllPool2TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPool2TicketResponse: object = {};

export const QueryAllPool2TicketResponse = {
  encode(
    message: QueryAllPool2TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool2Ticket) {
      Pool2Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPool2TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool2TicketResponse,
    } as QueryAllPool2TicketResponse;
    message.Pool2Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool2Ticket.push(Pool2Ticket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPool2TicketResponse {
    const message = {
      ...baseQueryAllPool2TicketResponse,
    } as QueryAllPool2TicketResponse;
    message.Pool2Ticket = [];
    if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
      for (const e of object.Pool2Ticket) {
        message.Pool2Ticket.push(Pool2Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool2TicketResponse): unknown {
    const obj: any = {};
    if (message.Pool2Ticket) {
      obj.Pool2Ticket = message.Pool2Ticket.map((e) =>
        e ? Pool2Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Pool2Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool2TicketResponse>
  ): QueryAllPool2TicketResponse {
    const message = {
      ...baseQueryAllPool2TicketResponse,
    } as QueryAllPool2TicketResponse;
    message.Pool2Ticket = [];
    if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
      for (const e of object.Pool2Ticket) {
        message.Pool2Ticket.push(Pool2Ticket.fromPartial(e));
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

const baseQueryGetPool1TicketRequest: object = { id: 0 };

export const QueryGetPool1TicketRequest = {
  encode(
    message: QueryGetPool1TicketRequest,
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
  ): QueryGetPool1TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool1TicketRequest,
    } as QueryGetPool1TicketRequest;
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

  fromJSON(object: any): QueryGetPool1TicketRequest {
    const message = {
      ...baseQueryGetPool1TicketRequest,
    } as QueryGetPool1TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPool1TicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool1TicketRequest>
  ): QueryGetPool1TicketRequest {
    const message = {
      ...baseQueryGetPool1TicketRequest,
    } as QueryGetPool1TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPool1TicketResponse: object = {};

export const QueryGetPool1TicketResponse = {
  encode(
    message: QueryGetPool1TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool1Ticket !== undefined) {
      Pool1Ticket.encode(
        message.Pool1Ticket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPool1TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool1TicketResponse,
    } as QueryGetPool1TicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool1Ticket = Pool1Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPool1TicketResponse {
    const message = {
      ...baseQueryGetPool1TicketResponse,
    } as QueryGetPool1TicketResponse;
    if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
      message.Pool1Ticket = Pool1Ticket.fromJSON(object.Pool1Ticket);
    } else {
      message.Pool1Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPool1TicketResponse): unknown {
    const obj: any = {};
    message.Pool1Ticket !== undefined &&
      (obj.Pool1Ticket = message.Pool1Ticket
        ? Pool1Ticket.toJSON(message.Pool1Ticket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool1TicketResponse>
  ): QueryGetPool1TicketResponse {
    const message = {
      ...baseQueryGetPool1TicketResponse,
    } as QueryGetPool1TicketResponse;
    if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
      message.Pool1Ticket = Pool1Ticket.fromPartial(object.Pool1Ticket);
    } else {
      message.Pool1Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllPool1TicketRequest: object = {};

export const QueryAllPool1TicketRequest = {
  encode(
    message: QueryAllPool1TicketRequest,
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
  ): QueryAllPool1TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool1TicketRequest,
    } as QueryAllPool1TicketRequest;
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

  fromJSON(object: any): QueryAllPool1TicketRequest {
    const message = {
      ...baseQueryAllPool1TicketRequest,
    } as QueryAllPool1TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool1TicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool1TicketRequest>
  ): QueryAllPool1TicketRequest {
    const message = {
      ...baseQueryAllPool1TicketRequest,
    } as QueryAllPool1TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPool1TicketResponse: object = {};

export const QueryAllPool1TicketResponse = {
  encode(
    message: QueryAllPool1TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool1Ticket) {
      Pool1Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPool1TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool1TicketResponse,
    } as QueryAllPool1TicketResponse;
    message.Pool1Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool1Ticket.push(Pool1Ticket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPool1TicketResponse {
    const message = {
      ...baseQueryAllPool1TicketResponse,
    } as QueryAllPool1TicketResponse;
    message.Pool1Ticket = [];
    if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
      for (const e of object.Pool1Ticket) {
        message.Pool1Ticket.push(Pool1Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool1TicketResponse): unknown {
    const obj: any = {};
    if (message.Pool1Ticket) {
      obj.Pool1Ticket = message.Pool1Ticket.map((e) =>
        e ? Pool1Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Pool1Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool1TicketResponse>
  ): QueryAllPool1TicketResponse {
    const message = {
      ...baseQueryAllPool1TicketResponse,
    } as QueryAllPool1TicketResponse;
    message.Pool1Ticket = [];
    if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
      for (const e of object.Pool1Ticket) {
        message.Pool1Ticket.push(Pool1Ticket.fromPartial(e));
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

const baseQueryGetPool0TicketRequest: object = { id: 0 };

export const QueryGetPool0TicketRequest = {
  encode(
    message: QueryGetPool0TicketRequest,
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
  ): QueryGetPool0TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool0TicketRequest,
    } as QueryGetPool0TicketRequest;
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

  fromJSON(object: any): QueryGetPool0TicketRequest {
    const message = {
      ...baseQueryGetPool0TicketRequest,
    } as QueryGetPool0TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPool0TicketRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool0TicketRequest>
  ): QueryGetPool0TicketRequest {
    const message = {
      ...baseQueryGetPool0TicketRequest,
    } as QueryGetPool0TicketRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPool0TicketResponse: object = {};

export const QueryGetPool0TicketResponse = {
  encode(
    message: QueryGetPool0TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Pool0Ticket !== undefined) {
      Pool0Ticket.encode(
        message.Pool0Ticket,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPool0TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPool0TicketResponse,
    } as QueryGetPool0TicketResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool0Ticket = Pool0Ticket.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPool0TicketResponse {
    const message = {
      ...baseQueryGetPool0TicketResponse,
    } as QueryGetPool0TicketResponse;
    if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
      message.Pool0Ticket = Pool0Ticket.fromJSON(object.Pool0Ticket);
    } else {
      message.Pool0Ticket = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPool0TicketResponse): unknown {
    const obj: any = {};
    message.Pool0Ticket !== undefined &&
      (obj.Pool0Ticket = message.Pool0Ticket
        ? Pool0Ticket.toJSON(message.Pool0Ticket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPool0TicketResponse>
  ): QueryGetPool0TicketResponse {
    const message = {
      ...baseQueryGetPool0TicketResponse,
    } as QueryGetPool0TicketResponse;
    if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
      message.Pool0Ticket = Pool0Ticket.fromPartial(object.Pool0Ticket);
    } else {
      message.Pool0Ticket = undefined;
    }
    return message;
  },
};

const baseQueryAllPool0TicketRequest: object = {};

export const QueryAllPool0TicketRequest = {
  encode(
    message: QueryAllPool0TicketRequest,
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
  ): QueryAllPool0TicketRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool0TicketRequest,
    } as QueryAllPool0TicketRequest;
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

  fromJSON(object: any): QueryAllPool0TicketRequest {
    const message = {
      ...baseQueryAllPool0TicketRequest,
    } as QueryAllPool0TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool0TicketRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool0TicketRequest>
  ): QueryAllPool0TicketRequest {
    const message = {
      ...baseQueryAllPool0TicketRequest,
    } as QueryAllPool0TicketRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPool0TicketResponse: object = {};

export const QueryAllPool0TicketResponse = {
  encode(
    message: QueryAllPool0TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Pool0Ticket) {
      Pool0Ticket.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllPool0TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllPool0TicketResponse,
    } as QueryAllPool0TicketResponse;
    message.Pool0Ticket = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Pool0Ticket.push(Pool0Ticket.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllPool0TicketResponse {
    const message = {
      ...baseQueryAllPool0TicketResponse,
    } as QueryAllPool0TicketResponse;
    message.Pool0Ticket = [];
    if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
      for (const e of object.Pool0Ticket) {
        message.Pool0Ticket.push(Pool0Ticket.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPool0TicketResponse): unknown {
    const obj: any = {};
    if (message.Pool0Ticket) {
      obj.Pool0Ticket = message.Pool0Ticket.map((e) =>
        e ? Pool0Ticket.toJSON(e) : undefined
      );
    } else {
      obj.Pool0Ticket = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllPool0TicketResponse>
  ): QueryAllPool0TicketResponse {
    const message = {
      ...baseQueryAllPool0TicketResponse,
    } as QueryAllPool0TicketResponse;
    message.Pool0Ticket = [];
    if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
      for (const e of object.Pool0Ticket) {
        message.Pool0Ticket.push(Pool0Ticket.fromPartial(e));
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

const baseQueryGetJoinPoolAndStakeAssetRequest: object = { id: 0 };

export const QueryGetJoinPoolAndStakeAssetRequest = {
  encode(
    message: QueryGetJoinPoolAndStakeAssetRequest,
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
  ): QueryGetJoinPoolAndStakeAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetRequest,
    } as QueryGetJoinPoolAndStakeAssetRequest;
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

  fromJSON(object: any): QueryGetJoinPoolAndStakeAssetRequest {
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetRequest,
    } as QueryGetJoinPoolAndStakeAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetJoinPoolAndStakeAssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetJoinPoolAndStakeAssetRequest>
  ): QueryGetJoinPoolAndStakeAssetRequest {
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetRequest,
    } as QueryGetJoinPoolAndStakeAssetRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetJoinPoolAndStakeAssetResponse: object = {};

export const QueryGetJoinPoolAndStakeAssetResponse = {
  encode(
    message: QueryGetJoinPoolAndStakeAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.JoinPoolAndStakeAsset !== undefined) {
      JoinPoolAndStakeAsset.encode(
        message.JoinPoolAndStakeAsset,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetJoinPoolAndStakeAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetResponse,
    } as QueryGetJoinPoolAndStakeAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetResponse,
    } as QueryGetJoinPoolAndStakeAssetResponse;
    if (
      object.JoinPoolAndStakeAsset !== undefined &&
      object.JoinPoolAndStakeAsset !== null
    ) {
      message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.fromJSON(
        object.JoinPoolAndStakeAsset
      );
    } else {
      message.JoinPoolAndStakeAsset = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetJoinPoolAndStakeAssetResponse): unknown {
    const obj: any = {};
    message.JoinPoolAndStakeAsset !== undefined &&
      (obj.JoinPoolAndStakeAsset = message.JoinPoolAndStakeAsset
        ? JoinPoolAndStakeAsset.toJSON(message.JoinPoolAndStakeAsset)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetJoinPoolAndStakeAssetResponse>
  ): QueryGetJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseQueryGetJoinPoolAndStakeAssetResponse,
    } as QueryGetJoinPoolAndStakeAssetResponse;
    if (
      object.JoinPoolAndStakeAsset !== undefined &&
      object.JoinPoolAndStakeAsset !== null
    ) {
      message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.fromPartial(
        object.JoinPoolAndStakeAsset
      );
    } else {
      message.JoinPoolAndStakeAsset = undefined;
    }
    return message;
  },
};

const baseQueryAllJoinPoolAndStakeAssetRequest: object = {};

export const QueryAllJoinPoolAndStakeAssetRequest = {
  encode(
    message: QueryAllJoinPoolAndStakeAssetRequest,
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
  ): QueryAllJoinPoolAndStakeAssetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetRequest,
    } as QueryAllJoinPoolAndStakeAssetRequest;
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

  fromJSON(object: any): QueryAllJoinPoolAndStakeAssetRequest {
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetRequest,
    } as QueryAllJoinPoolAndStakeAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllJoinPoolAndStakeAssetRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllJoinPoolAndStakeAssetRequest>
  ): QueryAllJoinPoolAndStakeAssetRequest {
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetRequest,
    } as QueryAllJoinPoolAndStakeAssetRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllJoinPoolAndStakeAssetResponse: object = {};

export const QueryAllJoinPoolAndStakeAssetResponse = {
  encode(
    message: QueryAllJoinPoolAndStakeAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.JoinPoolAndStakeAsset) {
      JoinPoolAndStakeAsset.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryAllJoinPoolAndStakeAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetResponse,
    } as QueryAllJoinPoolAndStakeAssetResponse;
    message.JoinPoolAndStakeAsset = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.JoinPoolAndStakeAsset.push(
            JoinPoolAndStakeAsset.decode(reader, reader.uint32())
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

  fromJSON(object: any): QueryAllJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetResponse,
    } as QueryAllJoinPoolAndStakeAssetResponse;
    message.JoinPoolAndStakeAsset = [];
    if (
      object.JoinPoolAndStakeAsset !== undefined &&
      object.JoinPoolAndStakeAsset !== null
    ) {
      for (const e of object.JoinPoolAndStakeAsset) {
        message.JoinPoolAndStakeAsset.push(JoinPoolAndStakeAsset.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllJoinPoolAndStakeAssetResponse): unknown {
    const obj: any = {};
    if (message.JoinPoolAndStakeAsset) {
      obj.JoinPoolAndStakeAsset = message.JoinPoolAndStakeAsset.map((e) =>
        e ? JoinPoolAndStakeAsset.toJSON(e) : undefined
      );
    } else {
      obj.JoinPoolAndStakeAsset = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllJoinPoolAndStakeAssetResponse>
  ): QueryAllJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseQueryAllJoinPoolAndStakeAssetResponse,
    } as QueryAllJoinPoolAndStakeAssetResponse;
    message.JoinPoolAndStakeAsset = [];
    if (
      object.JoinPoolAndStakeAsset !== undefined &&
      object.JoinPoolAndStakeAsset !== null
    ) {
      for (const e of object.JoinPoolAndStakeAsset) {
        message.JoinPoolAndStakeAsset.push(
          JoinPoolAndStakeAsset.fromPartial(e)
        );
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
  Winners(request: QueryGetWinnersRequest): Promise<QueryGetWinnersResponse>;
  WinnersAll(request: QueryAllWinnersRequest): Promise<QueryAllWinnersResponse>;
  Members(request: QueryGetMembersRequest): Promise<QueryGetMembersResponse>;
  MembersAll(request: QueryAllMembersRequest): Promise<QueryAllMembersResponse>;
  Pool4Ticket(
    request: QueryGetPool4TicketRequest
  ): Promise<QueryGetPool4TicketResponse>;
  Pool4TicketAll(
    request: QueryAllPool4TicketRequest
  ): Promise<QueryAllPool4TicketResponse>;
  Pool3Ticket(
    request: QueryGetPool3TicketRequest
  ): Promise<QueryGetPool3TicketResponse>;
  Pool3TicketAll(
    request: QueryAllPool3TicketRequest
  ): Promise<QueryAllPool3TicketResponse>;
  Pool2Ticket(
    request: QueryGetPool2TicketRequest
  ): Promise<QueryGetPool2TicketResponse>;
  Pool2TicketAll(
    request: QueryAllPool2TicketRequest
  ): Promise<QueryAllPool2TicketResponse>;
  Pool1Ticket(
    request: QueryGetPool1TicketRequest
  ): Promise<QueryGetPool1TicketResponse>;
  Pool1TicketAll(
    request: QueryAllPool1TicketRequest
  ): Promise<QueryAllPool1TicketResponse>;
  Pool0Ticket(
    request: QueryGetPool0TicketRequest
  ): Promise<QueryGetPool0TicketResponse>;
  Pool0TicketAll(
    request: QueryAllPool0TicketRequest
  ): Promise<QueryAllPool0TicketResponse>;
  JoinPoolAndStakeAsset(
    request: QueryGetJoinPoolAndStakeAssetRequest
  ): Promise<QueryGetJoinPoolAndStakeAssetResponse>;
  JoinPoolAndStakeAssetAll(
    request: QueryAllJoinPoolAndStakeAssetRequest
  ): Promise<QueryAllJoinPoolAndStakeAssetResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Winners(request: QueryGetWinnersRequest): Promise<QueryGetWinnersResponse> {
    const data = QueryGetWinnersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Winners",
      data
    );
    return promise.then((data) =>
      QueryGetWinnersResponse.decode(new Reader(data))
    );
  }

  WinnersAll(
    request: QueryAllWinnersRequest
  ): Promise<QueryAllWinnersResponse> {
    const data = QueryAllWinnersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "WinnersAll",
      data
    );
    return promise.then((data) =>
      QueryAllWinnersResponse.decode(new Reader(data))
    );
  }

  Members(request: QueryGetMembersRequest): Promise<QueryGetMembersResponse> {
    const data = QueryGetMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Members",
      data
    );
    return promise.then((data) =>
      QueryGetMembersResponse.decode(new Reader(data))
    );
  }

  MembersAll(
    request: QueryAllMembersRequest
  ): Promise<QueryAllMembersResponse> {
    const data = QueryAllMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "MembersAll",
      data
    );
    return promise.then((data) =>
      QueryAllMembersResponse.decode(new Reader(data))
    );
  }

  Pool4Ticket(
    request: QueryGetPool4TicketRequest
  ): Promise<QueryGetPool4TicketResponse> {
    const data = QueryGetPool4TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool4Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetPool4TicketResponse.decode(new Reader(data))
    );
  }

  Pool4TicketAll(
    request: QueryAllPool4TicketRequest
  ): Promise<QueryAllPool4TicketResponse> {
    const data = QueryAllPool4TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool4TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllPool4TicketResponse.decode(new Reader(data))
    );
  }

  Pool3Ticket(
    request: QueryGetPool3TicketRequest
  ): Promise<QueryGetPool3TicketResponse> {
    const data = QueryGetPool3TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool3Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetPool3TicketResponse.decode(new Reader(data))
    );
  }

  Pool3TicketAll(
    request: QueryAllPool3TicketRequest
  ): Promise<QueryAllPool3TicketResponse> {
    const data = QueryAllPool3TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool3TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllPool3TicketResponse.decode(new Reader(data))
    );
  }

  Pool2Ticket(
    request: QueryGetPool2TicketRequest
  ): Promise<QueryGetPool2TicketResponse> {
    const data = QueryGetPool2TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool2Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetPool2TicketResponse.decode(new Reader(data))
    );
  }

  Pool2TicketAll(
    request: QueryAllPool2TicketRequest
  ): Promise<QueryAllPool2TicketResponse> {
    const data = QueryAllPool2TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool2TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllPool2TicketResponse.decode(new Reader(data))
    );
  }

  Pool1Ticket(
    request: QueryGetPool1TicketRequest
  ): Promise<QueryGetPool1TicketResponse> {
    const data = QueryGetPool1TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool1Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetPool1TicketResponse.decode(new Reader(data))
    );
  }

  Pool1TicketAll(
    request: QueryAllPool1TicketRequest
  ): Promise<QueryAllPool1TicketResponse> {
    const data = QueryAllPool1TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool1TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllPool1TicketResponse.decode(new Reader(data))
    );
  }

  Pool0Ticket(
    request: QueryGetPool0TicketRequest
  ): Promise<QueryGetPool0TicketResponse> {
    const data = QueryGetPool0TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool0Ticket",
      data
    );
    return promise.then((data) =>
      QueryGetPool0TicketResponse.decode(new Reader(data))
    );
  }

  Pool0TicketAll(
    request: QueryAllPool0TicketRequest
  ): Promise<QueryAllPool0TicketResponse> {
    const data = QueryAllPool0TicketRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "Pool0TicketAll",
      data
    );
    return promise.then((data) =>
      QueryAllPool0TicketResponse.decode(new Reader(data))
    );
  }

  JoinPoolAndStakeAsset(
    request: QueryGetJoinPoolAndStakeAssetRequest
  ): Promise<QueryGetJoinPoolAndStakeAssetResponse> {
    const data = QueryGetJoinPoolAndStakeAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "JoinPoolAndStakeAsset",
      data
    );
    return promise.then((data) =>
      QueryGetJoinPoolAndStakeAssetResponse.decode(new Reader(data))
    );
  }

  JoinPoolAndStakeAssetAll(
    request: QueryAllJoinPoolAndStakeAssetRequest
  ): Promise<QueryAllJoinPoolAndStakeAssetResponse> {
    const data = QueryAllJoinPoolAndStakeAssetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Query",
      "JoinPoolAndStakeAssetAll",
      data
    );
    return promise.then((data) =>
      QueryAllJoinPoolAndStakeAssetResponse.decode(new Reader(data))
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
