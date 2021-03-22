/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { TimedOutAsset } from "../assets/TimedOutAsset";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { SentAsset } from "../assets/SentAsset";
import { TransferAsset } from "../assets/TransferAsset";
import { Asset } from "../assets/Asset";
export const protobufPackage = "sap200.shiaa3.assets";
const baseQueryGetTimedOutAssetRequest = { id: 0 };
export const QueryGetTimedOutAssetRequest = {
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
            ...baseQueryGetTimedOutAssetRequest,
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
            ...baseQueryGetTimedOutAssetRequest,
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
            ...baseQueryGetTimedOutAssetRequest,
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
const baseQueryGetTimedOutAssetResponse = {};
export const QueryGetTimedOutAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.TimedOutAsset !== undefined) {
            TimedOutAsset.encode(message.TimedOutAsset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTimedOutAssetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetTimedOutAssetResponse,
        };
        if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
            message.TimedOutAsset = TimedOutAsset.fromJSON(object.TimedOutAsset);
        }
        else {
            message.TimedOutAsset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.TimedOutAsset !== undefined &&
            (obj.TimedOutAsset = message.TimedOutAsset
                ? TimedOutAsset.toJSON(message.TimedOutAsset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTimedOutAssetResponse,
        };
        if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
            message.TimedOutAsset = TimedOutAsset.fromPartial(object.TimedOutAsset);
        }
        else {
            message.TimedOutAsset = undefined;
        }
        return message;
    },
};
const baseQueryAllTimedOutAssetRequest = {};
export const QueryAllTimedOutAssetRequest = {
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
            ...baseQueryAllTimedOutAssetRequest,
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
            ...baseQueryAllTimedOutAssetRequest,
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
            ...baseQueryAllTimedOutAssetRequest,
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
const baseQueryAllTimedOutAssetResponse = {};
export const QueryAllTimedOutAssetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TimedOutAsset) {
            TimedOutAsset.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllTimedOutAssetResponse,
        };
        message.TimedOutAsset = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TimedOutAsset.push(TimedOutAsset.decode(reader, reader.uint32()));
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
            ...baseQueryAllTimedOutAssetResponse,
        };
        message.TimedOutAsset = [];
        if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
            for (const e of object.TimedOutAsset) {
                message.TimedOutAsset.push(TimedOutAsset.fromJSON(e));
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
        if (message.TimedOutAsset) {
            obj.TimedOutAsset = message.TimedOutAsset.map((e) => e ? TimedOutAsset.toJSON(e) : undefined);
        }
        else {
            obj.TimedOutAsset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTimedOutAssetResponse,
        };
        message.TimedOutAsset = [];
        if (object.TimedOutAsset !== undefined && object.TimedOutAsset !== null) {
            for (const e of object.TimedOutAsset) {
                message.TimedOutAsset.push(TimedOutAsset.fromPartial(e));
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
const baseQueryGetSentAssetRequest = { id: 0 };
export const QueryGetSentAssetRequest = {
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
            ...baseQueryGetSentAssetRequest,
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
            ...baseQueryGetSentAssetRequest,
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
            ...baseQueryGetSentAssetRequest,
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
const baseQueryGetSentAssetResponse = {};
export const QueryGetSentAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.SentAsset !== undefined) {
            SentAsset.encode(message.SentAsset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSentAssetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetSentAssetResponse,
        };
        if (object.SentAsset !== undefined && object.SentAsset !== null) {
            message.SentAsset = SentAsset.fromJSON(object.SentAsset);
        }
        else {
            message.SentAsset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.SentAsset !== undefined &&
            (obj.SentAsset = message.SentAsset
                ? SentAsset.toJSON(message.SentAsset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSentAssetResponse,
        };
        if (object.SentAsset !== undefined && object.SentAsset !== null) {
            message.SentAsset = SentAsset.fromPartial(object.SentAsset);
        }
        else {
            message.SentAsset = undefined;
        }
        return message;
    },
};
const baseQueryAllSentAssetRequest = {};
export const QueryAllSentAssetRequest = {
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
            ...baseQueryAllSentAssetRequest,
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
            ...baseQueryAllSentAssetRequest,
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
            ...baseQueryAllSentAssetRequest,
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
const baseQueryAllSentAssetResponse = {};
export const QueryAllSentAssetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.SentAsset) {
            SentAsset.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllSentAssetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryAllSentAssetResponse,
        };
        message.SentAsset = [];
        if (object.SentAsset !== undefined && object.SentAsset !== null) {
            for (const e of object.SentAsset) {
                message.SentAsset.push(SentAsset.fromJSON(e));
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
        if (message.SentAsset) {
            obj.SentAsset = message.SentAsset.map((e) => e ? SentAsset.toJSON(e) : undefined);
        }
        else {
            obj.SentAsset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSentAssetResponse,
        };
        message.SentAsset = [];
        if (object.SentAsset !== undefined && object.SentAsset !== null) {
            for (const e of object.SentAsset) {
                message.SentAsset.push(SentAsset.fromPartial(e));
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
const baseQueryGetTransferAssetRequest = { id: 0 };
export const QueryGetTransferAssetRequest = {
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
            ...baseQueryGetTransferAssetRequest,
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
            ...baseQueryGetTransferAssetRequest,
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
            ...baseQueryGetTransferAssetRequest,
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
const baseQueryGetTransferAssetResponse = {};
export const QueryGetTransferAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.TransferAsset !== undefined) {
            TransferAsset.encode(message.TransferAsset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetTransferAssetResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseQueryGetTransferAssetResponse,
        };
        if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
            message.TransferAsset = TransferAsset.fromJSON(object.TransferAsset);
        }
        else {
            message.TransferAsset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.TransferAsset !== undefined &&
            (obj.TransferAsset = message.TransferAsset
                ? TransferAsset.toJSON(message.TransferAsset)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetTransferAssetResponse,
        };
        if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
            message.TransferAsset = TransferAsset.fromPartial(object.TransferAsset);
        }
        else {
            message.TransferAsset = undefined;
        }
        return message;
    },
};
const baseQueryAllTransferAssetRequest = {};
export const QueryAllTransferAssetRequest = {
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
            ...baseQueryAllTransferAssetRequest,
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
            ...baseQueryAllTransferAssetRequest,
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
            ...baseQueryAllTransferAssetRequest,
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
const baseQueryAllTransferAssetResponse = {};
export const QueryAllTransferAssetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.TransferAsset) {
            TransferAsset.encode(v, writer.uint32(10).fork()).ldelim();
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
            ...baseQueryAllTransferAssetResponse,
        };
        message.TransferAsset = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.TransferAsset.push(TransferAsset.decode(reader, reader.uint32()));
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
            ...baseQueryAllTransferAssetResponse,
        };
        message.TransferAsset = [];
        if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
            for (const e of object.TransferAsset) {
                message.TransferAsset.push(TransferAsset.fromJSON(e));
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
        if (message.TransferAsset) {
            obj.TransferAsset = message.TransferAsset.map((e) => e ? TransferAsset.toJSON(e) : undefined);
        }
        else {
            obj.TransferAsset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllTransferAssetResponse,
        };
        message.TransferAsset = [];
        if (object.TransferAsset !== undefined && object.TransferAsset !== null) {
            for (const e of object.TransferAsset) {
                message.TransferAsset.push(TransferAsset.fromPartial(e));
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
const baseQueryGetAssetRequest = { id: 0 };
export const QueryGetAssetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAssetRequest };
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
        const message = { ...baseQueryGetAssetRequest };
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
        const message = { ...baseQueryGetAssetRequest };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetAssetResponse = {};
export const QueryGetAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Asset !== undefined) {
            Asset.encode(message.Asset, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetAssetResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryGetAssetResponse };
        if (object.Asset !== undefined && object.Asset !== null) {
            message.Asset = Asset.fromJSON(object.Asset);
        }
        else {
            message.Asset = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Asset !== undefined &&
            (obj.Asset = message.Asset ? Asset.toJSON(message.Asset) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetAssetResponse };
        if (object.Asset !== undefined && object.Asset !== null) {
            message.Asset = Asset.fromPartial(object.Asset);
        }
        else {
            message.Asset = undefined;
        }
        return message;
    },
};
const baseQueryAllAssetRequest = {};
export const QueryAllAssetRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAssetRequest };
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
        const message = { ...baseQueryAllAssetRequest };
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
        const message = { ...baseQueryAllAssetRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllAssetResponse = {};
export const QueryAllAssetResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Asset) {
            Asset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllAssetResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryAllAssetResponse };
        message.Asset = [];
        if (object.Asset !== undefined && object.Asset !== null) {
            for (const e of object.Asset) {
                message.Asset.push(Asset.fromJSON(e));
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
        if (message.Asset) {
            obj.Asset = message.Asset.map((e) => (e ? Asset.toJSON(e) : undefined));
        }
        else {
            obj.Asset = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllAssetResponse };
        message.Asset = [];
        if (object.Asset !== undefined && object.Asset !== null) {
            for (const e of object.Asset) {
                message.Asset.push(Asset.fromPartial(e));
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
    TimedOutAsset(request) {
        const data = QueryGetTimedOutAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "TimedOutAsset", data);
        return promise.then((data) => QueryGetTimedOutAssetResponse.decode(new Reader(data)));
    }
    TimedOutAssetAll(request) {
        const data = QueryAllTimedOutAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "TimedOutAssetAll", data);
        return promise.then((data) => QueryAllTimedOutAssetResponse.decode(new Reader(data)));
    }
    SentAsset(request) {
        const data = QueryGetSentAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "SentAsset", data);
        return promise.then((data) => QueryGetSentAssetResponse.decode(new Reader(data)));
    }
    SentAssetAll(request) {
        const data = QueryAllSentAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "SentAssetAll", data);
        return promise.then((data) => QueryAllSentAssetResponse.decode(new Reader(data)));
    }
    TransferAsset(request) {
        const data = QueryGetTransferAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "TransferAsset", data);
        return promise.then((data) => QueryGetTransferAssetResponse.decode(new Reader(data)));
    }
    TransferAssetAll(request) {
        const data = QueryAllTransferAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "TransferAssetAll", data);
        return promise.then((data) => QueryAllTransferAssetResponse.decode(new Reader(data)));
    }
    Asset(request) {
        const data = QueryGetAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "Asset", data);
        return promise.then((data) => QueryGetAssetResponse.decode(new Reader(data)));
    }
    AssetAll(request) {
        const data = QueryAllAssetRequest.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Query", "AssetAll", data);
        return promise.then((data) => QueryAllAssetResponse.decode(new Reader(data)));
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
