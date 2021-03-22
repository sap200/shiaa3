/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "sap200.shiaa3.assets";
const baseMsgSendIbcAsset = {
    sender: "",
    port: "",
    channelID: "",
    timeoutTimestamp: 0,
    AssetSerial: "",
    Receiver: "",
};
export const MsgSendIbcAsset = {
    encode(message, writer = Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.port !== "") {
            writer.uint32(18).string(message.port);
        }
        if (message.channelID !== "") {
            writer.uint32(26).string(message.channelID);
        }
        if (message.timeoutTimestamp !== 0) {
            writer.uint32(32).uint64(message.timeoutTimestamp);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(42).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(50).string(message.Receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSendIbcAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.port = reader.string();
                    break;
                case 3:
                    message.channelID = reader.string();
                    break;
                case 4:
                    message.timeoutTimestamp = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.AssetSerial = reader.string();
                    break;
                case 6:
                    message.Receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSendIbcAsset };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = String(object.port);
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = String(object.channelID);
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = Number(object.timeoutTimestamp);
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.port !== undefined && (obj.port = message.port);
        message.channelID !== undefined && (obj.channelID = message.channelID);
        message.timeoutTimestamp !== undefined &&
            (obj.timeoutTimestamp = message.timeoutTimestamp);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSendIbcAsset };
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.port !== undefined && object.port !== null) {
            message.port = object.port;
        }
        else {
            message.port = "";
        }
        if (object.channelID !== undefined && object.channelID !== null) {
            message.channelID = object.channelID;
        }
        else {
            message.channelID = "";
        }
        if (object.timeoutTimestamp !== undefined &&
            object.timeoutTimestamp !== null) {
            message.timeoutTimestamp = object.timeoutTimestamp;
        }
        else {
            message.timeoutTimestamp = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
};
const baseMsgSendIbcAssetResponse = {};
export const MsgSendIbcAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgSendIbcAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgSendIbcAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgSendIbcAssetResponse,
        };
        return message;
    },
};
const baseMsgCreateTimedOutAsset = {
    creator: "",
    AssetSerial: "",
    Receiver: "",
    TargetChain: "",
};
export const MsgCreateTimedOutAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(18).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(26).string(message.Receiver);
        }
        if (message.TargetChain !== "") {
            writer.uint32(34).string(message.TargetChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTimedOutAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AssetSerial = reader.string();
                    break;
                case 3:
                    message.Receiver = reader.string();
                    break;
                case 4:
                    message.TargetChain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = String(object.TargetChain);
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        message.TargetChain !== undefined &&
            (obj.TargetChain = message.TargetChain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = object.TargetChain;
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
};
const baseMsgCreateTimedOutAssetResponse = { id: 0 };
export const MsgCreateTimedOutAssetResponse = {
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
            ...baseMsgCreateTimedOutAssetResponse,
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
            ...baseMsgCreateTimedOutAssetResponse,
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
            ...baseMsgCreateTimedOutAssetResponse,
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
const baseMsgUpdateTimedOutAsset = {
    creator: "",
    id: 0,
    AssetSerial: "",
    Receiver: "",
    TargetChain: "",
};
export const MsgUpdateTimedOutAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(26).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(34).string(message.Receiver);
        }
        if (message.TargetChain !== "") {
            writer.uint32(42).string(message.TargetChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTimedOutAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.AssetSerial = reader.string();
                    break;
                case 4:
                    message.Receiver = reader.string();
                    break;
                case 5:
                    message.TargetChain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = String(object.TargetChain);
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        message.TargetChain !== undefined &&
            (obj.TargetChain = message.TargetChain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = object.TargetChain;
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
};
const baseMsgUpdateTimedOutAssetResponse = {};
export const MsgUpdateTimedOutAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTimedOutAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateTimedOutAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTimedOutAssetResponse,
        };
        return message;
    },
};
const baseMsgDeleteTimedOutAsset = { creator: "", id: 0 };
export const MsgDeleteTimedOutAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTimedOutAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteTimedOutAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteTimedOutAssetResponse = {};
export const MsgDeleteTimedOutAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteTimedOutAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteTimedOutAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteTimedOutAssetResponse,
        };
        return message;
    },
};
const baseMsgCreateSentAsset = {
    creator: "",
    AssetSerial: "",
    Receiver: "",
    TargetChain: "",
};
export const MsgCreateSentAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(18).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(26).string(message.Receiver);
        }
        if (message.TargetChain !== "") {
            writer.uint32(34).string(message.TargetChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateSentAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AssetSerial = reader.string();
                    break;
                case 3:
                    message.Receiver = reader.string();
                    break;
                case 4:
                    message.TargetChain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = String(object.TargetChain);
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        message.TargetChain !== undefined &&
            (obj.TargetChain = message.TargetChain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = object.TargetChain;
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
};
const baseMsgCreateSentAssetResponse = { id: 0 };
export const MsgCreateSentAssetResponse = {
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
            ...baseMsgCreateSentAssetResponse,
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
            ...baseMsgCreateSentAssetResponse,
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
            ...baseMsgCreateSentAssetResponse,
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
const baseMsgUpdateSentAsset = {
    creator: "",
    id: 0,
    AssetSerial: "",
    Receiver: "",
    TargetChain: "",
};
export const MsgUpdateSentAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(26).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(34).string(message.Receiver);
        }
        if (message.TargetChain !== "") {
            writer.uint32(42).string(message.TargetChain);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateSentAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.AssetSerial = reader.string();
                    break;
                case 4:
                    message.Receiver = reader.string();
                    break;
                case 5:
                    message.TargetChain = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = String(object.TargetChain);
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        message.TargetChain !== undefined &&
            (obj.TargetChain = message.TargetChain);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        if (object.TargetChain !== undefined && object.TargetChain !== null) {
            message.TargetChain = object.TargetChain;
        }
        else {
            message.TargetChain = "";
        }
        return message;
    },
};
const baseMsgUpdateSentAssetResponse = {};
export const MsgUpdateSentAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateSentAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateSentAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateSentAssetResponse,
        };
        return message;
    },
};
const baseMsgDeleteSentAsset = { creator: "", id: 0 };
export const MsgDeleteSentAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteSentAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteSentAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteSentAssetResponse = {};
export const MsgDeleteSentAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteSentAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteSentAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteSentAssetResponse,
        };
        return message;
    },
};
const baseMsgCreateTransferAsset = {
    creator: "",
    AssetSerial: "",
    Receiver: "",
};
export const MsgCreateTransferAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(18).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(26).string(message.Receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateTransferAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AssetSerial = reader.string();
                    break;
                case 3:
                    message.Receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
};
const baseMsgCreateTransferAssetResponse = { id: 0 };
export const MsgCreateTransferAssetResponse = {
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
            ...baseMsgCreateTransferAssetResponse,
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
            ...baseMsgCreateTransferAssetResponse,
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
            ...baseMsgCreateTransferAssetResponse,
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
const baseMsgUpdateTransferAsset = {
    creator: "",
    id: 0,
    AssetSerial: "",
    Receiver: "",
};
export const MsgUpdateTransferAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(26).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(34).string(message.Receiver);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTransferAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.AssetSerial = reader.string();
                    break;
                case 4:
                    message.Receiver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = String(object.Receiver);
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        if (object.Receiver !== undefined && object.Receiver !== null) {
            message.Receiver = object.Receiver;
        }
        else {
            message.Receiver = "";
        }
        return message;
    },
};
const baseMsgUpdateTransferAssetResponse = {};
export const MsgUpdateTransferAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTransferAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateTransferAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTransferAssetResponse,
        };
        return message;
    },
};
const baseMsgDeleteTransferAsset = { creator: "", id: 0 };
export const MsgDeleteTransferAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteTransferAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteTransferAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteTransferAssetResponse = {};
export const MsgDeleteTransferAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteTransferAssetResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = {
            ...baseMsgDeleteTransferAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteTransferAssetResponse,
        };
        return message;
    },
};
const baseMsgCreateAsset = {
    creator: "",
    Serial: "",
    Name: "",
    AssetType: 0,
    Tokens: 0,
    Owner: "",
};
export const MsgCreateAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.Serial !== "") {
            writer.uint32(18).string(message.Serial);
        }
        if (message.Name !== "") {
            writer.uint32(26).string(message.Name);
        }
        if (message.AssetType !== 0) {
            writer.uint32(32).int32(message.AssetType);
        }
        if (message.Tokens !== 0) {
            writer.uint32(40).int32(message.Tokens);
        }
        if (message.Owner !== "") {
            writer.uint32(50).string(message.Owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.Serial = reader.string();
                    break;
                case 3:
                    message.Name = reader.string();
                    break;
                case 4:
                    message.AssetType = reader.int32();
                    break;
                case 5:
                    message.Tokens = reader.int32();
                    break;
                case 6:
                    message.Owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.Serial !== undefined && object.Serial !== null) {
            message.Serial = String(object.Serial);
        }
        else {
            message.Serial = "";
        }
        if (object.Name !== undefined && object.Name !== null) {
            message.Name = String(object.Name);
        }
        else {
            message.Name = "";
        }
        if (object.AssetType !== undefined && object.AssetType !== null) {
            message.AssetType = Number(object.AssetType);
        }
        else {
            message.AssetType = 0;
        }
        if (object.Tokens !== undefined && object.Tokens !== null) {
            message.Tokens = Number(object.Tokens);
        }
        else {
            message.Tokens = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = String(object.Owner);
        }
        else {
            message.Owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.Serial !== undefined && (obj.Serial = message.Serial);
        message.Name !== undefined && (obj.Name = message.Name);
        message.AssetType !== undefined && (obj.AssetType = message.AssetType);
        message.Tokens !== undefined && (obj.Tokens = message.Tokens);
        message.Owner !== undefined && (obj.Owner = message.Owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.Serial !== undefined && object.Serial !== null) {
            message.Serial = object.Serial;
        }
        else {
            message.Serial = "";
        }
        if (object.Name !== undefined && object.Name !== null) {
            message.Name = object.Name;
        }
        else {
            message.Name = "";
        }
        if (object.AssetType !== undefined && object.AssetType !== null) {
            message.AssetType = object.AssetType;
        }
        else {
            message.AssetType = 0;
        }
        if (object.Tokens !== undefined && object.Tokens !== null) {
            message.Tokens = object.Tokens;
        }
        else {
            message.Tokens = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = object.Owner;
        }
        else {
            message.Owner = "";
        }
        return message;
    },
};
const baseMsgCreateAssetResponse = { id: 0 };
export const MsgCreateAssetResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateAssetResponse };
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
        const message = { ...baseMsgCreateAssetResponse };
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
        const message = { ...baseMsgCreateAssetResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgUpdateAsset = {
    creator: "",
    id: 0,
    Serial: "",
    Name: "",
    AssetType: 0,
    Tokens: 0,
    Owner: "",
};
export const MsgUpdateAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.Serial !== "") {
            writer.uint32(26).string(message.Serial);
        }
        if (message.Name !== "") {
            writer.uint32(34).string(message.Name);
        }
        if (message.AssetType !== 0) {
            writer.uint32(40).int32(message.AssetType);
        }
        if (message.Tokens !== 0) {
            writer.uint32(48).int32(message.Tokens);
        }
        if (message.Owner !== "") {
            writer.uint32(58).string(message.Owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.Serial = reader.string();
                    break;
                case 4:
                    message.Name = reader.string();
                    break;
                case 5:
                    message.AssetType = reader.int32();
                    break;
                case 6:
                    message.Tokens = reader.int32();
                    break;
                case 7:
                    message.Owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.Serial !== undefined && object.Serial !== null) {
            message.Serial = String(object.Serial);
        }
        else {
            message.Serial = "";
        }
        if (object.Name !== undefined && object.Name !== null) {
            message.Name = String(object.Name);
        }
        else {
            message.Name = "";
        }
        if (object.AssetType !== undefined && object.AssetType !== null) {
            message.AssetType = Number(object.AssetType);
        }
        else {
            message.AssetType = 0;
        }
        if (object.Tokens !== undefined && object.Tokens !== null) {
            message.Tokens = Number(object.Tokens);
        }
        else {
            message.Tokens = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = String(object.Owner);
        }
        else {
            message.Owner = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.Serial !== undefined && (obj.Serial = message.Serial);
        message.Name !== undefined && (obj.Name = message.Name);
        message.AssetType !== undefined && (obj.AssetType = message.AssetType);
        message.Tokens !== undefined && (obj.Tokens = message.Tokens);
        message.Owner !== undefined && (obj.Owner = message.Owner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.Serial !== undefined && object.Serial !== null) {
            message.Serial = object.Serial;
        }
        else {
            message.Serial = "";
        }
        if (object.Name !== undefined && object.Name !== null) {
            message.Name = object.Name;
        }
        else {
            message.Name = "";
        }
        if (object.AssetType !== undefined && object.AssetType !== null) {
            message.AssetType = object.AssetType;
        }
        else {
            message.AssetType = 0;
        }
        if (object.Tokens !== undefined && object.Tokens !== null) {
            message.Tokens = object.Tokens;
        }
        else {
            message.Tokens = 0;
        }
        if (object.Owner !== undefined && object.Owner !== null) {
            message.Owner = object.Owner;
        }
        else {
            message.Owner = "";
        }
        return message;
    },
};
const baseMsgUpdateAssetResponse = {};
export const MsgUpdateAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateAssetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateAssetResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateAssetResponse };
        return message;
    },
};
const baseMsgDeleteAsset = { creator: "", id: 0 };
export const MsgDeleteAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAsset };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
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
        const message = { ...baseMsgDeleteAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
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
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteAsset };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseMsgDeleteAssetResponse = {};
export const MsgDeleteAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteAssetResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteAssetResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteAssetResponse };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SendIbcAsset(request) {
        const data = MsgSendIbcAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "SendIbcAsset", data);
        return promise.then((data) => MsgSendIbcAssetResponse.decode(new Reader(data)));
    }
    CreateTimedOutAsset(request) {
        const data = MsgCreateTimedOutAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "CreateTimedOutAsset", data);
        return promise.then((data) => MsgCreateTimedOutAssetResponse.decode(new Reader(data)));
    }
    UpdateTimedOutAsset(request) {
        const data = MsgUpdateTimedOutAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "UpdateTimedOutAsset", data);
        return promise.then((data) => MsgUpdateTimedOutAssetResponse.decode(new Reader(data)));
    }
    DeleteTimedOutAsset(request) {
        const data = MsgDeleteTimedOutAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "DeleteTimedOutAsset", data);
        return promise.then((data) => MsgDeleteTimedOutAssetResponse.decode(new Reader(data)));
    }
    CreateSentAsset(request) {
        const data = MsgCreateSentAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "CreateSentAsset", data);
        return promise.then((data) => MsgCreateSentAssetResponse.decode(new Reader(data)));
    }
    UpdateSentAsset(request) {
        const data = MsgUpdateSentAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "UpdateSentAsset", data);
        return promise.then((data) => MsgUpdateSentAssetResponse.decode(new Reader(data)));
    }
    DeleteSentAsset(request) {
        const data = MsgDeleteSentAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "DeleteSentAsset", data);
        return promise.then((data) => MsgDeleteSentAssetResponse.decode(new Reader(data)));
    }
    CreateTransferAsset(request) {
        const data = MsgCreateTransferAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "CreateTransferAsset", data);
        return promise.then((data) => MsgCreateTransferAssetResponse.decode(new Reader(data)));
    }
    UpdateTransferAsset(request) {
        const data = MsgUpdateTransferAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "UpdateTransferAsset", data);
        return promise.then((data) => MsgUpdateTransferAssetResponse.decode(new Reader(data)));
    }
    DeleteTransferAsset(request) {
        const data = MsgDeleteTransferAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "DeleteTransferAsset", data);
        return promise.then((data) => MsgDeleteTransferAssetResponse.decode(new Reader(data)));
    }
    CreateAsset(request) {
        const data = MsgCreateAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "CreateAsset", data);
        return promise.then((data) => MsgCreateAssetResponse.decode(new Reader(data)));
    }
    UpdateAsset(request) {
        const data = MsgUpdateAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "UpdateAsset", data);
        return promise.then((data) => MsgUpdateAssetResponse.decode(new Reader(data)));
    }
    DeleteAsset(request) {
        const data = MsgDeleteAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.assets.Msg", "DeleteAsset", data);
        return promise.then((data) => MsgDeleteAssetResponse.decode(new Reader(data)));
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
