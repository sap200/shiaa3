/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Winners } from "../shiaa3/Winners";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { Members } from "../shiaa3/Members";
import { Pool4Ticket } from "../shiaa3/Pool4Ticket";
import { Pool3Ticket } from "../shiaa3/Pool3Ticket";
import { Pool2Ticket } from "../shiaa3/Pool2Ticket";
import { Pool1Ticket } from "../shiaa3/Pool1Ticket";
import { Pool0Ticket } from "../shiaa3/Pool0Ticket";
import { JoinPoolAndStakeAsset } from "../shiaa3/JoinPoolAndStakeAsset";
export const protobufPackage = "sap200.shiaa3.shiaa3";
const baseQueryGetWinnersRequest = { id: 0 };
export const QueryGetWinnersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetWinnersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetWinnersRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetWinnersRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetWinnersResponse = {};
export const QueryGetWinnersResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Winners !== undefined) {
            Winners.encode(message.Winners, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetWinnersResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetWinnersResponse,
        };
        if (object.Winners !== undefined && object.Winners !== null) {
            message.Winners = Winners.fromJSON(object.Winners);
        }
        else {
            message.Winners = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Winners !== undefined &&
            (obj.Winners = message.Winners
                ? Winners.toJSON(message.Winners)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetWinnersResponse,
        };
        if (object.Winners !== undefined && object.Winners !== null) {
            message.Winners = Winners.fromPartial(object.Winners);
        }
        else {
            message.Winners = undefined;
        }
        return message;
    },
};
const baseQueryAllWinnersRequest = {};
export const QueryAllWinnersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllWinnersRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllWinnersRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllWinnersRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllWinnersResponse = {};
export const QueryAllWinnersResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Winners) {
            Winners.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllWinnersResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllWinnersResponse,
        };
        message.Winners = [];
        if (object.Winners !== undefined && object.Winners !== null) {
            for (const e of object.Winners) {
                message.Winners.push(Winners.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Winners) {
            obj.Winners = message.Winners.map((e) => e ? Winners.toJSON(e) : undefined);
        }
        else {
            obj.Winners = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllWinnersResponse,
        };
        message.Winners = [];
        if (object.Winners !== undefined && object.Winners !== null) {
            for (const e of object.Winners) {
                message.Winners.push(Winners.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetMembersRequest = { id: 0 };
export const QueryGetMembersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetMembersRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetMembersRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetMembersRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetMembersResponse = {};
export const QueryGetMembersResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Members !== undefined) {
            Members.encode(message.Members, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetMembersResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetMembersResponse,
        };
        if (object.Members !== undefined && object.Members !== null) {
            message.Members = Members.fromJSON(object.Members);
        }
        else {
            message.Members = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Members !== undefined &&
            (obj.Members = message.Members
                ? Members.toJSON(message.Members)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetMembersResponse,
        };
        if (object.Members !== undefined && object.Members !== null) {
            message.Members = Members.fromPartial(object.Members);
        }
        else {
            message.Members = undefined;
        }
        return message;
    },
};
const baseQueryAllMembersRequest = {};
export const QueryAllMembersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllMembersRequest };
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
    fromJSON(object) {
        const message = { ...baseQueryAllMembersRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllMembersRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllMembersResponse = {};
export const QueryAllMembersResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Members) {
            Members.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllMembersResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllMembersResponse,
        };
        message.Members = [];
        if (object.Members !== undefined && object.Members !== null) {
            for (const e of object.Members) {
                message.Members.push(Members.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Members) {
            obj.Members = message.Members.map((e) => e ? Members.toJSON(e) : undefined);
        }
        else {
            obj.Members = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllMembersResponse,
        };
        message.Members = [];
        if (object.Members !== undefined && object.Members !== null) {
            for (const e of object.Members) {
                message.Members.push(Members.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPool4TicketRequest = { id: 0 };
export const QueryGetPool4TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool4TicketRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool4TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool4TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPool4TicketResponse = {};
export const QueryGetPool4TicketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool4Ticket !== undefined) {
            Pool4Ticket.encode(message.Pool4Ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool4TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool4TicketResponse,
        };
        if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
            message.Pool4Ticket = Pool4Ticket.fromJSON(object.Pool4Ticket);
        }
        else {
            message.Pool4Ticket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool4Ticket !== undefined &&
            (obj.Pool4Ticket = message.Pool4Ticket
                ? Pool4Ticket.toJSON(message.Pool4Ticket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool4TicketResponse,
        };
        if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
            message.Pool4Ticket = Pool4Ticket.fromPartial(object.Pool4Ticket);
        }
        else {
            message.Pool4Ticket = undefined;
        }
        return message;
    },
};
const baseQueryAllPool4TicketRequest = {};
export const QueryAllPool4TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool4TicketRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool4TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool4TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPool4TicketResponse = {};
export const QueryAllPool4TicketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Pool4Ticket) {
            Pool4Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool4TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool4TicketResponse,
        };
        message.Pool4Ticket = [];
        if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
            for (const e of object.Pool4Ticket) {
                message.Pool4Ticket.push(Pool4Ticket.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Pool4Ticket) {
            obj.Pool4Ticket = message.Pool4Ticket.map((e) => e ? Pool4Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool4Ticket = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool4TicketResponse,
        };
        message.Pool4Ticket = [];
        if (object.Pool4Ticket !== undefined && object.Pool4Ticket !== null) {
            for (const e of object.Pool4Ticket) {
                message.Pool4Ticket.push(Pool4Ticket.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPool3TicketRequest = { id: 0 };
export const QueryGetPool3TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool3TicketRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool3TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool3TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPool3TicketResponse = {};
export const QueryGetPool3TicketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool3Ticket !== undefined) {
            Pool3Ticket.encode(message.Pool3Ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool3TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool3TicketResponse,
        };
        if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
            message.Pool3Ticket = Pool3Ticket.fromJSON(object.Pool3Ticket);
        }
        else {
            message.Pool3Ticket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool3Ticket !== undefined &&
            (obj.Pool3Ticket = message.Pool3Ticket
                ? Pool3Ticket.toJSON(message.Pool3Ticket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool3TicketResponse,
        };
        if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
            message.Pool3Ticket = Pool3Ticket.fromPartial(object.Pool3Ticket);
        }
        else {
            message.Pool3Ticket = undefined;
        }
        return message;
    },
};
const baseQueryAllPool3TicketRequest = {};
export const QueryAllPool3TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool3TicketRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool3TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool3TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPool3TicketResponse = {};
export const QueryAllPool3TicketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Pool3Ticket) {
            Pool3Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool3TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool3TicketResponse,
        };
        message.Pool3Ticket = [];
        if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
            for (const e of object.Pool3Ticket) {
                message.Pool3Ticket.push(Pool3Ticket.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Pool3Ticket) {
            obj.Pool3Ticket = message.Pool3Ticket.map((e) => e ? Pool3Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool3Ticket = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool3TicketResponse,
        };
        message.Pool3Ticket = [];
        if (object.Pool3Ticket !== undefined && object.Pool3Ticket !== null) {
            for (const e of object.Pool3Ticket) {
                message.Pool3Ticket.push(Pool3Ticket.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPool2TicketRequest = { id: 0 };
export const QueryGetPool2TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool2TicketRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool2TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool2TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPool2TicketResponse = {};
export const QueryGetPool2TicketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool2Ticket !== undefined) {
            Pool2Ticket.encode(message.Pool2Ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool2TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool2TicketResponse,
        };
        if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
            message.Pool2Ticket = Pool2Ticket.fromJSON(object.Pool2Ticket);
        }
        else {
            message.Pool2Ticket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool2Ticket !== undefined &&
            (obj.Pool2Ticket = message.Pool2Ticket
                ? Pool2Ticket.toJSON(message.Pool2Ticket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool2TicketResponse,
        };
        if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
            message.Pool2Ticket = Pool2Ticket.fromPartial(object.Pool2Ticket);
        }
        else {
            message.Pool2Ticket = undefined;
        }
        return message;
    },
};
const baseQueryAllPool2TicketRequest = {};
export const QueryAllPool2TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool2TicketRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool2TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool2TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPool2TicketResponse = {};
export const QueryAllPool2TicketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Pool2Ticket) {
            Pool2Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool2TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool2TicketResponse,
        };
        message.Pool2Ticket = [];
        if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
            for (const e of object.Pool2Ticket) {
                message.Pool2Ticket.push(Pool2Ticket.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Pool2Ticket) {
            obj.Pool2Ticket = message.Pool2Ticket.map((e) => e ? Pool2Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool2Ticket = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool2TicketResponse,
        };
        message.Pool2Ticket = [];
        if (object.Pool2Ticket !== undefined && object.Pool2Ticket !== null) {
            for (const e of object.Pool2Ticket) {
                message.Pool2Ticket.push(Pool2Ticket.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPool1TicketRequest = { id: 0 };
export const QueryGetPool1TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool1TicketRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool1TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool1TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPool1TicketResponse = {};
export const QueryGetPool1TicketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool1Ticket !== undefined) {
            Pool1Ticket.encode(message.Pool1Ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool1TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool1TicketResponse,
        };
        if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
            message.Pool1Ticket = Pool1Ticket.fromJSON(object.Pool1Ticket);
        }
        else {
            message.Pool1Ticket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool1Ticket !== undefined &&
            (obj.Pool1Ticket = message.Pool1Ticket
                ? Pool1Ticket.toJSON(message.Pool1Ticket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool1TicketResponse,
        };
        if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
            message.Pool1Ticket = Pool1Ticket.fromPartial(object.Pool1Ticket);
        }
        else {
            message.Pool1Ticket = undefined;
        }
        return message;
    },
};
const baseQueryAllPool1TicketRequest = {};
export const QueryAllPool1TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool1TicketRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool1TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool1TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPool1TicketResponse = {};
export const QueryAllPool1TicketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Pool1Ticket) {
            Pool1Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool1TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool1TicketResponse,
        };
        message.Pool1Ticket = [];
        if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
            for (const e of object.Pool1Ticket) {
                message.Pool1Ticket.push(Pool1Ticket.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Pool1Ticket) {
            obj.Pool1Ticket = message.Pool1Ticket.map((e) => e ? Pool1Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool1Ticket = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool1TicketResponse,
        };
        message.Pool1Ticket = [];
        if (object.Pool1Ticket !== undefined && object.Pool1Ticket !== null) {
            for (const e of object.Pool1Ticket) {
                message.Pool1Ticket.push(Pool1Ticket.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPool0TicketRequest = { id: 0 };
export const QueryGetPool0TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool0TicketRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool0TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool0TicketRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetPool0TicketResponse = {};
export const QueryGetPool0TicketResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool0Ticket !== undefined) {
            Pool0Ticket.encode(message.Pool0Ticket, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPool0TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetPool0TicketResponse,
        };
        if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
            message.Pool0Ticket = Pool0Ticket.fromJSON(object.Pool0Ticket);
        }
        else {
            message.Pool0Ticket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool0Ticket !== undefined &&
            (obj.Pool0Ticket = message.Pool0Ticket
                ? Pool0Ticket.toJSON(message.Pool0Ticket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPool0TicketResponse,
        };
        if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
            message.Pool0Ticket = Pool0Ticket.fromPartial(object.Pool0Ticket);
        }
        else {
            message.Pool0Ticket = undefined;
        }
        return message;
    },
};
const baseQueryAllPool0TicketRequest = {};
export const QueryAllPool0TicketRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool0TicketRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool0TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool0TicketRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllPool0TicketResponse = {};
export const QueryAllPool0TicketResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Pool0Ticket) {
            Pool0Ticket.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllPool0TicketResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllPool0TicketResponse,
        };
        message.Pool0Ticket = [];
        if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
            for (const e of object.Pool0Ticket) {
                message.Pool0Ticket.push(Pool0Ticket.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Pool0Ticket) {
            obj.Pool0Ticket = message.Pool0Ticket.map((e) => e ? Pool0Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool0Ticket = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllPool0TicketResponse,
        };
        message.Pool0Ticket = [];
        if (object.Pool0Ticket !== undefined && object.Pool0Ticket !== null) {
            for (const e of object.Pool0Ticket) {
                message.Pool0Ticket.push(Pool0Ticket.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetJoinPoolAndStakeAssetRequest = { id: 0 };
export const QueryGetJoinPoolAndStakeAssetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetJoinPoolAndStakeAssetResponse = {};
export const QueryGetJoinPoolAndStakeAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.JoinPoolAndStakeAsset !== undefined) {
            JoinPoolAndStakeAsset.encode(message.JoinPoolAndStakeAsset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetResponse,
        };
        if (object.JoinPoolAndStakeAsset !== undefined &&
            object.JoinPoolAndStakeAsset !== null) {
            message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.fromJSON(object.JoinPoolAndStakeAsset);
        }
        else {
            message.JoinPoolAndStakeAsset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.JoinPoolAndStakeAsset !== undefined &&
            (obj.JoinPoolAndStakeAsset = message.JoinPoolAndStakeAsset
                ? JoinPoolAndStakeAsset.toJSON(message.JoinPoolAndStakeAsset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetJoinPoolAndStakeAssetResponse,
        };
        if (object.JoinPoolAndStakeAsset !== undefined &&
            object.JoinPoolAndStakeAsset !== null) {
            message.JoinPoolAndStakeAsset = JoinPoolAndStakeAsset.fromPartial(object.JoinPoolAndStakeAsset);
        }
        else {
            message.JoinPoolAndStakeAsset = undefined;
        }
        return message;
    },
};
const baseQueryAllJoinPoolAndStakeAssetRequest = {};
export const QueryAllJoinPoolAndStakeAssetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetRequest,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllJoinPoolAndStakeAssetResponse = {};
export const QueryAllJoinPoolAndStakeAssetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.JoinPoolAndStakeAsset) {
            JoinPoolAndStakeAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetResponse,
        };
        message.JoinPoolAndStakeAsset = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.JoinPoolAndStakeAsset.push(JoinPoolAndStakeAsset.decode(reader, reader.uint32()));
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetResponse,
        };
        message.JoinPoolAndStakeAsset = [];
        if (object.JoinPoolAndStakeAsset !== undefined &&
            object.JoinPoolAndStakeAsset !== null) {
            for (const e of object.JoinPoolAndStakeAsset) {
                message.JoinPoolAndStakeAsset.push(JoinPoolAndStakeAsset.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.JoinPoolAndStakeAsset) {
            obj.JoinPoolAndStakeAsset = message.JoinPoolAndStakeAsset.map((e) => e ? JoinPoolAndStakeAsset.toJSON(e) : undefined);
        }
        else {
            obj.JoinPoolAndStakeAsset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllJoinPoolAndStakeAssetResponse,
        };
        message.JoinPoolAndStakeAsset = [];
        if (object.JoinPoolAndStakeAsset !== undefined &&
            object.JoinPoolAndStakeAsset !== null) {
            for (const e of object.JoinPoolAndStakeAsset) {
                message.JoinPoolAndStakeAsset.push(JoinPoolAndStakeAsset.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Winners(request) {
        const data = QueryGetWinnersRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Winners", data);
        return promise.then((data) => QueryGetWinnersResponse.decode(new Reader(data)));
    }
    WinnersAll(request) {
        const data = QueryAllWinnersRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "WinnersAll", data);
        return promise.then((data) => QueryAllWinnersResponse.decode(new Reader(data)));
    }
    Members(request) {
        const data = QueryGetMembersRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Members", data);
        return promise.then((data) => QueryGetMembersResponse.decode(new Reader(data)));
    }
    MembersAll(request) {
        const data = QueryAllMembersRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "MembersAll", data);
        return promise.then((data) => QueryAllMembersResponse.decode(new Reader(data)));
    }
    Pool4Ticket(request) {
        const data = QueryGetPool4TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool4Ticket", data);
        return promise.then((data) => QueryGetPool4TicketResponse.decode(new Reader(data)));
    }
    Pool4TicketAll(request) {
        const data = QueryAllPool4TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool4TicketAll", data);
        return promise.then((data) => QueryAllPool4TicketResponse.decode(new Reader(data)));
    }
    Pool3Ticket(request) {
        const data = QueryGetPool3TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool3Ticket", data);
        return promise.then((data) => QueryGetPool3TicketResponse.decode(new Reader(data)));
    }
    Pool3TicketAll(request) {
        const data = QueryAllPool3TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool3TicketAll", data);
        return promise.then((data) => QueryAllPool3TicketResponse.decode(new Reader(data)));
    }
    Pool2Ticket(request) {
        const data = QueryGetPool2TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool2Ticket", data);
        return promise.then((data) => QueryGetPool2TicketResponse.decode(new Reader(data)));
    }
    Pool2TicketAll(request) {
        const data = QueryAllPool2TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool2TicketAll", data);
        return promise.then((data) => QueryAllPool2TicketResponse.decode(new Reader(data)));
    }
    Pool1Ticket(request) {
        const data = QueryGetPool1TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool1Ticket", data);
        return promise.then((data) => QueryGetPool1TicketResponse.decode(new Reader(data)));
    }
    Pool1TicketAll(request) {
        const data = QueryAllPool1TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool1TicketAll", data);
        return promise.then((data) => QueryAllPool1TicketResponse.decode(new Reader(data)));
    }
    Pool0Ticket(request) {
        const data = QueryGetPool0TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool0Ticket", data);
        return promise.then((data) => QueryGetPool0TicketResponse.decode(new Reader(data)));
    }
    Pool0TicketAll(request) {
        const data = QueryAllPool0TicketRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "Pool0TicketAll", data);
        return promise.then((data) => QueryAllPool0TicketResponse.decode(new Reader(data)));
    }
    JoinPoolAndStakeAsset(request) {
        const data = QueryGetJoinPoolAndStakeAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "JoinPoolAndStakeAsset", data);
        return promise.then((data) => QueryGetJoinPoolAndStakeAssetResponse.decode(new Reader(data)));
    }
    JoinPoolAndStakeAssetAll(request) {
        const data = QueryAllJoinPoolAndStakeAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Query", "JoinPoolAndStakeAssetAll", data);
        return promise.then((data) => QueryAllJoinPoolAndStakeAssetResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
