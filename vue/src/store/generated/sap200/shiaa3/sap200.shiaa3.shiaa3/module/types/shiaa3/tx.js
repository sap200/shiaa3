/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
export const protobufPackage = "sap200.shiaa3.shiaa3";
const baseMsgCreateWinners = {
    creator: "",
    AddressString: "",
    PoolNo: "",
    Winnings: "",
};
export const MsgCreateWinners = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.PoolNo !== "") {
            writer.uint32(26).string(message.PoolNo);
        }
        if (message.Winnings !== "") {
            writer.uint32(34).string(message.Winnings);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateWinners };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.PoolNo = reader.string();
                    break;
                case 4:
                    message.Winnings = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateWinners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = String(object.PoolNo);
        }
        else {
            message.PoolNo = "";
        }
        if (object.Winnings !== undefined && object.Winnings !== null) {
            message.Winnings = String(object.Winnings);
        }
        else {
            message.Winnings = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
        message.Winnings !== undefined && (obj.Winnings = message.Winnings);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateWinners };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = object.PoolNo;
        }
        else {
            message.PoolNo = "";
        }
        if (object.Winnings !== undefined && object.Winnings !== null) {
            message.Winnings = object.Winnings;
        }
        else {
            message.Winnings = "";
        }
        return message;
    },
};
const baseMsgCreateWinnersResponse = { id: 0 };
export const MsgCreateWinnersResponse = {
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
            ...baseMsgCreateWinnersResponse,
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
            ...baseMsgCreateWinnersResponse,
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
            ...baseMsgCreateWinnersResponse,
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
const baseMsgUpdateWinners = {
    creator: "",
    id: 0,
    AddressString: "",
    PoolNo: "",
    Winnings: "",
};
export const MsgUpdateWinners = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.PoolNo !== "") {
            writer.uint32(34).string(message.PoolNo);
        }
        if (message.Winnings !== "") {
            writer.uint32(42).string(message.Winnings);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateWinners };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.PoolNo = reader.string();
                    break;
                case 5:
                    message.Winnings = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateWinners };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = String(object.PoolNo);
        }
        else {
            message.PoolNo = "";
        }
        if (object.Winnings !== undefined && object.Winnings !== null) {
            message.Winnings = String(object.Winnings);
        }
        else {
            message.Winnings = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
        message.Winnings !== undefined && (obj.Winnings = message.Winnings);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateWinners };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = object.PoolNo;
        }
        else {
            message.PoolNo = "";
        }
        if (object.Winnings !== undefined && object.Winnings !== null) {
            message.Winnings = object.Winnings;
        }
        else {
            message.Winnings = "";
        }
        return message;
    },
};
const baseMsgUpdateWinnersResponse = {};
export const MsgUpdateWinnersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateWinnersResponse,
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
            ...baseMsgUpdateWinnersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateWinnersResponse,
        };
        return message;
    },
};
const baseMsgDeleteWinners = { creator: "", id: 0 };
export const MsgDeleteWinners = {
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
        const message = { ...baseMsgDeleteWinners };
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
        const message = { ...baseMsgDeleteWinners };
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
        const message = { ...baseMsgDeleteWinners };
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
const baseMsgDeleteWinnersResponse = {};
export const MsgDeleteWinnersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteWinnersResponse,
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
            ...baseMsgDeleteWinnersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteWinnersResponse,
        };
        return message;
    },
};
const baseMsgCreateMembers = { creator: "", address: "" };
export const MsgCreateMembers = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateMembers };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateMembers };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateMembers };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgCreateMembersResponse = { id: 0 };
export const MsgCreateMembersResponse = {
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
            ...baseMsgCreateMembersResponse,
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
            ...baseMsgCreateMembersResponse,
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
            ...baseMsgCreateMembersResponse,
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
const baseMsgUpdateMembers = { creator: "", id: 0, address: "" };
export const MsgUpdateMembers = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.address !== "") {
            writer.uint32(26).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateMembers };
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
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateMembers };
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
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateMembers };
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
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgUpdateMembersResponse = {};
export const MsgUpdateMembersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateMembersResponse,
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
            ...baseMsgUpdateMembersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateMembersResponse,
        };
        return message;
    },
};
const baseMsgDeleteMembers = { creator: "", id: 0 };
export const MsgDeleteMembers = {
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
        const message = { ...baseMsgDeleteMembers };
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
        const message = { ...baseMsgDeleteMembers };
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
        const message = { ...baseMsgDeleteMembers };
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
const baseMsgDeleteMembersResponse = {};
export const MsgDeleteMembersResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteMembersResponse,
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
            ...baseMsgDeleteMembersResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteMembersResponse,
        };
        return message;
    },
};
const baseMsgCreatePool4Ticket = {
    creator: "",
    AddressString: "",
    LambdaValue: "",
};
export const MsgCreatePool4Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(26).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool4Ticket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool4Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool4Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgCreatePool4TicketResponse = { id: 0 };
export const MsgCreatePool4TicketResponse = {
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
            ...baseMsgCreatePool4TicketResponse,
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
            ...baseMsgCreatePool4TicketResponse,
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
            ...baseMsgCreatePool4TicketResponse,
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
const baseMsgUpdatePool4Ticket = {
    creator: "",
    id: 0,
    AddressString: "",
    LambdaValue: "",
};
export const MsgUpdatePool4Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(34).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool4Ticket };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool4Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool4Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgUpdatePool4TicketResponse = {};
export const MsgUpdatePool4TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePool4TicketResponse,
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
            ...baseMsgUpdatePool4TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePool4TicketResponse,
        };
        return message;
    },
};
const baseMsgDeletePool4Ticket = { creator: "", id: 0 };
export const MsgDeletePool4Ticket = {
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
        const message = { ...baseMsgDeletePool4Ticket };
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
        const message = { ...baseMsgDeletePool4Ticket };
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
        const message = { ...baseMsgDeletePool4Ticket };
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
const baseMsgDeletePool4TicketResponse = {};
export const MsgDeletePool4TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePool4TicketResponse,
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
            ...baseMsgDeletePool4TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePool4TicketResponse,
        };
        return message;
    },
};
const baseMsgCreatePool3Ticket = {
    creator: "",
    AddressString: "",
    LambdaValue: "",
};
export const MsgCreatePool3Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(26).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool3Ticket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool3Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool3Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgCreatePool3TicketResponse = { id: 0 };
export const MsgCreatePool3TicketResponse = {
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
            ...baseMsgCreatePool3TicketResponse,
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
            ...baseMsgCreatePool3TicketResponse,
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
            ...baseMsgCreatePool3TicketResponse,
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
const baseMsgUpdatePool3Ticket = {
    creator: "",
    id: 0,
    AddressString: "",
    LambdaValue: "",
};
export const MsgUpdatePool3Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(34).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool3Ticket };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool3Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool3Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgUpdatePool3TicketResponse = {};
export const MsgUpdatePool3TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePool3TicketResponse,
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
            ...baseMsgUpdatePool3TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePool3TicketResponse,
        };
        return message;
    },
};
const baseMsgDeletePool3Ticket = { creator: "", id: 0 };
export const MsgDeletePool3Ticket = {
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
        const message = { ...baseMsgDeletePool3Ticket };
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
        const message = { ...baseMsgDeletePool3Ticket };
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
        const message = { ...baseMsgDeletePool3Ticket };
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
const baseMsgDeletePool3TicketResponse = {};
export const MsgDeletePool3TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePool3TicketResponse,
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
            ...baseMsgDeletePool3TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePool3TicketResponse,
        };
        return message;
    },
};
const baseMsgCreatePool2Ticket = {
    creator: "",
    AddressString: "",
    LambdaValue: "",
};
export const MsgCreatePool2Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(26).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool2Ticket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool2Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool2Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgCreatePool2TicketResponse = { id: 0 };
export const MsgCreatePool2TicketResponse = {
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
            ...baseMsgCreatePool2TicketResponse,
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
            ...baseMsgCreatePool2TicketResponse,
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
            ...baseMsgCreatePool2TicketResponse,
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
const baseMsgUpdatePool2Ticket = {
    creator: "",
    id: 0,
    AddressString: "",
    LambdaValue: "",
};
export const MsgUpdatePool2Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(34).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool2Ticket };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool2Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool2Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgUpdatePool2TicketResponse = {};
export const MsgUpdatePool2TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePool2TicketResponse,
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
            ...baseMsgUpdatePool2TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePool2TicketResponse,
        };
        return message;
    },
};
const baseMsgDeletePool2Ticket = { creator: "", id: 0 };
export const MsgDeletePool2Ticket = {
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
        const message = { ...baseMsgDeletePool2Ticket };
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
        const message = { ...baseMsgDeletePool2Ticket };
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
        const message = { ...baseMsgDeletePool2Ticket };
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
const baseMsgDeletePool2TicketResponse = {};
export const MsgDeletePool2TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePool2TicketResponse,
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
            ...baseMsgDeletePool2TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePool2TicketResponse,
        };
        return message;
    },
};
const baseMsgCreatePool1Ticket = {
    creator: "",
    AddressString: "",
    LambdaValue: "",
};
export const MsgCreatePool1Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(26).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool1Ticket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool1Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool1Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgCreatePool1TicketResponse = { id: 0 };
export const MsgCreatePool1TicketResponse = {
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
            ...baseMsgCreatePool1TicketResponse,
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
            ...baseMsgCreatePool1TicketResponse,
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
            ...baseMsgCreatePool1TicketResponse,
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
const baseMsgUpdatePool1Ticket = {
    creator: "",
    id: 0,
    AddressString: "",
    LambdaValue: "",
};
export const MsgUpdatePool1Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(34).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool1Ticket };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool1Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool1Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgUpdatePool1TicketResponse = {};
export const MsgUpdatePool1TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePool1TicketResponse,
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
            ...baseMsgUpdatePool1TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePool1TicketResponse,
        };
        return message;
    },
};
const baseMsgDeletePool1Ticket = { creator: "", id: 0 };
export const MsgDeletePool1Ticket = {
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
        const message = { ...baseMsgDeletePool1Ticket };
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
        const message = { ...baseMsgDeletePool1Ticket };
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
        const message = { ...baseMsgDeletePool1Ticket };
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
const baseMsgDeletePool1TicketResponse = {};
export const MsgDeletePool1TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePool1TicketResponse,
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
            ...baseMsgDeletePool1TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePool1TicketResponse,
        };
        return message;
    },
};
const baseMsgCreatePool0Ticket = {
    creator: "",
    AddressString: "",
    LambdaValue: "",
};
export const MsgCreatePool0Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.AddressString !== "") {
            writer.uint32(18).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(26).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool0Ticket };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.AddressString = reader.string();
                    break;
                case 3:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool0Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool0Ticket };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgCreatePool0TicketResponse = { id: 0 };
export const MsgCreatePool0TicketResponse = {
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
            ...baseMsgCreatePool0TicketResponse,
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
            ...baseMsgCreatePool0TicketResponse,
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
            ...baseMsgCreatePool0TicketResponse,
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
const baseMsgUpdatePool0Ticket = {
    creator: "",
    id: 0,
    AddressString: "",
    LambdaValue: "",
};
export const MsgUpdatePool0Ticket = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.AddressString !== "") {
            writer.uint32(26).string(message.AddressString);
        }
        if (message.LambdaValue !== "") {
            writer.uint32(34).string(message.LambdaValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool0Ticket };
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
                    message.AddressString = reader.string();
                    break;
                case 4:
                    message.LambdaValue = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool0Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = String(object.AddressString);
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = String(object.LambdaValue);
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.AddressString !== undefined &&
            (obj.AddressString = message.AddressString);
        message.LambdaValue !== undefined &&
            (obj.LambdaValue = message.LambdaValue);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool0Ticket };
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
        if (object.AddressString !== undefined && object.AddressString !== null) {
            message.AddressString = object.AddressString;
        }
        else {
            message.AddressString = "";
        }
        if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
            message.LambdaValue = object.LambdaValue;
        }
        else {
            message.LambdaValue = "";
        }
        return message;
    },
};
const baseMsgUpdatePool0TicketResponse = {};
export const MsgUpdatePool0TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdatePool0TicketResponse,
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
            ...baseMsgUpdatePool0TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdatePool0TicketResponse,
        };
        return message;
    },
};
const baseMsgDeletePool0Ticket = { creator: "", id: 0 };
export const MsgDeletePool0Ticket = {
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
        const message = { ...baseMsgDeletePool0Ticket };
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
        const message = { ...baseMsgDeletePool0Ticket };
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
        const message = { ...baseMsgDeletePool0Ticket };
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
const baseMsgDeletePool0TicketResponse = {};
export const MsgDeletePool0TicketResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeletePool0TicketResponse,
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
            ...baseMsgDeletePool0TicketResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeletePool0TicketResponse,
        };
        return message;
    },
};
const baseMsgCreateJoinPoolAndStakeAsset = {
    creator: "",
    PoolNo: "",
    AssetSerial: "",
};
export const MsgCreateJoinPoolAndStakeAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.PoolNo !== "") {
            writer.uint32(18).string(message.PoolNo);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(26).string(message.AssetSerial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateJoinPoolAndStakeAsset,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.PoolNo = reader.string();
                    break;
                case 3:
                    message.AssetSerial = reader.string();
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
            ...baseMsgCreateJoinPoolAndStakeAsset,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = String(object.PoolNo);
        }
        else {
            message.PoolNo = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateJoinPoolAndStakeAsset,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = object.PoolNo;
        }
        else {
            message.PoolNo = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        return message;
    },
};
const baseMsgCreateJoinPoolAndStakeAssetResponse = { id: 0 };
export const MsgCreateJoinPoolAndStakeAssetResponse = {
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
            ...baseMsgCreateJoinPoolAndStakeAssetResponse,
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
            ...baseMsgCreateJoinPoolAndStakeAssetResponse,
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
            ...baseMsgCreateJoinPoolAndStakeAssetResponse,
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
const baseMsgUpdateJoinPoolAndStakeAsset = {
    creator: "",
    id: 0,
    PoolNo: "",
    AssetSerial: "",
};
export const MsgUpdateJoinPoolAndStakeAsset = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.PoolNo !== "") {
            writer.uint32(26).string(message.PoolNo);
        }
        if (message.AssetSerial !== "") {
            writer.uint32(34).string(message.AssetSerial);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateJoinPoolAndStakeAsset,
        };
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
                    message.PoolNo = reader.string();
                    break;
                case 4:
                    message.AssetSerial = reader.string();
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
            ...baseMsgUpdateJoinPoolAndStakeAsset,
        };
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
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = String(object.PoolNo);
        }
        else {
            message.PoolNo = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = String(object.AssetSerial);
        }
        else {
            message.AssetSerial = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateJoinPoolAndStakeAsset,
        };
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
        if (object.PoolNo !== undefined && object.PoolNo !== null) {
            message.PoolNo = object.PoolNo;
        }
        else {
            message.PoolNo = "";
        }
        if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
            message.AssetSerial = object.AssetSerial;
        }
        else {
            message.AssetSerial = "";
        }
        return message;
    },
};
const baseMsgUpdateJoinPoolAndStakeAssetResponse = {};
export const MsgUpdateJoinPoolAndStakeAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
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
            ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
        };
        return message;
    },
};
const baseMsgDeleteJoinPoolAndStakeAsset = { creator: "", id: 0 };
export const MsgDeleteJoinPoolAndStakeAsset = {
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
        const message = {
            ...baseMsgDeleteJoinPoolAndStakeAsset,
        };
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
        const message = {
            ...baseMsgDeleteJoinPoolAndStakeAsset,
        };
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
        const message = {
            ...baseMsgDeleteJoinPoolAndStakeAsset,
        };
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
const baseMsgDeleteJoinPoolAndStakeAssetResponse = {};
export const MsgDeleteJoinPoolAndStakeAssetResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
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
            ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
        };
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateWinners(request) {
        const data = MsgCreateWinners.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreateWinners", data);
        return promise.then((data) => MsgCreateWinnersResponse.decode(new Reader(data)));
    }
    UpdateWinners(request) {
        const data = MsgUpdateWinners.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdateWinners", data);
        return promise.then((data) => MsgUpdateWinnersResponse.decode(new Reader(data)));
    }
    DeleteWinners(request) {
        const data = MsgDeleteWinners.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeleteWinners", data);
        return promise.then((data) => MsgDeleteWinnersResponse.decode(new Reader(data)));
    }
    CreateMembers(request) {
        const data = MsgCreateMembers.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreateMembers", data);
        return promise.then((data) => MsgCreateMembersResponse.decode(new Reader(data)));
    }
    UpdateMembers(request) {
        const data = MsgUpdateMembers.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdateMembers", data);
        return promise.then((data) => MsgUpdateMembersResponse.decode(new Reader(data)));
    }
    DeleteMembers(request) {
        const data = MsgDeleteMembers.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeleteMembers", data);
        return promise.then((data) => MsgDeleteMembersResponse.decode(new Reader(data)));
    }
    CreatePool4Ticket(request) {
        const data = MsgCreatePool4Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreatePool4Ticket", data);
        return promise.then((data) => MsgCreatePool4TicketResponse.decode(new Reader(data)));
    }
    UpdatePool4Ticket(request) {
        const data = MsgUpdatePool4Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdatePool4Ticket", data);
        return promise.then((data) => MsgUpdatePool4TicketResponse.decode(new Reader(data)));
    }
    DeletePool4Ticket(request) {
        const data = MsgDeletePool4Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeletePool4Ticket", data);
        return promise.then((data) => MsgDeletePool4TicketResponse.decode(new Reader(data)));
    }
    CreatePool3Ticket(request) {
        const data = MsgCreatePool3Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreatePool3Ticket", data);
        return promise.then((data) => MsgCreatePool3TicketResponse.decode(new Reader(data)));
    }
    UpdatePool3Ticket(request) {
        const data = MsgUpdatePool3Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdatePool3Ticket", data);
        return promise.then((data) => MsgUpdatePool3TicketResponse.decode(new Reader(data)));
    }
    DeletePool3Ticket(request) {
        const data = MsgDeletePool3Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeletePool3Ticket", data);
        return promise.then((data) => MsgDeletePool3TicketResponse.decode(new Reader(data)));
    }
    CreatePool2Ticket(request) {
        const data = MsgCreatePool2Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreatePool2Ticket", data);
        return promise.then((data) => MsgCreatePool2TicketResponse.decode(new Reader(data)));
    }
    UpdatePool2Ticket(request) {
        const data = MsgUpdatePool2Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdatePool2Ticket", data);
        return promise.then((data) => MsgUpdatePool2TicketResponse.decode(new Reader(data)));
    }
    DeletePool2Ticket(request) {
        const data = MsgDeletePool2Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeletePool2Ticket", data);
        return promise.then((data) => MsgDeletePool2TicketResponse.decode(new Reader(data)));
    }
    CreatePool1Ticket(request) {
        const data = MsgCreatePool1Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreatePool1Ticket", data);
        return promise.then((data) => MsgCreatePool1TicketResponse.decode(new Reader(data)));
    }
    UpdatePool1Ticket(request) {
        const data = MsgUpdatePool1Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdatePool1Ticket", data);
        return promise.then((data) => MsgUpdatePool1TicketResponse.decode(new Reader(data)));
    }
    DeletePool1Ticket(request) {
        const data = MsgDeletePool1Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeletePool1Ticket", data);
        return promise.then((data) => MsgDeletePool1TicketResponse.decode(new Reader(data)));
    }
    CreatePool0Ticket(request) {
        const data = MsgCreatePool0Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreatePool0Ticket", data);
        return promise.then((data) => MsgCreatePool0TicketResponse.decode(new Reader(data)));
    }
    UpdatePool0Ticket(request) {
        const data = MsgUpdatePool0Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdatePool0Ticket", data);
        return promise.then((data) => MsgUpdatePool0TicketResponse.decode(new Reader(data)));
    }
    DeletePool0Ticket(request) {
        const data = MsgDeletePool0Ticket.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeletePool0Ticket", data);
        return promise.then((data) => MsgDeletePool0TicketResponse.decode(new Reader(data)));
    }
    CreateJoinPoolAndStakeAsset(request) {
        const data = MsgCreateJoinPoolAndStakeAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "CreateJoinPoolAndStakeAsset", data);
        return promise.then((data) => MsgCreateJoinPoolAndStakeAssetResponse.decode(new Reader(data)));
    }
    UpdateJoinPoolAndStakeAsset(request) {
        const data = MsgUpdateJoinPoolAndStakeAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "UpdateJoinPoolAndStakeAsset", data);
        return promise.then((data) => MsgUpdateJoinPoolAndStakeAssetResponse.decode(new Reader(data)));
    }
    DeleteJoinPoolAndStakeAsset(request) {
        const data = MsgDeleteJoinPoolAndStakeAsset.encode(request).finish();
        const promise = this.rpc.request("sap200.shiaa3.shiaa3.Msg", "DeleteJoinPoolAndStakeAsset", data);
        return promise.then((data) => MsgDeleteJoinPoolAndStakeAssetResponse.decode(new Reader(data)));
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
