/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "sap200.shiaa3.assets";
const baseAsset = {
    creator: "",
    id: 0,
    Serial: "",
    Name: "",
    AssetType: 0,
    Tokens: 0,
    Owner: "",
};
export const Asset = {
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
        const message = { ...baseAsset };
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
        const message = { ...baseAsset };
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
        const message = { ...baseAsset };
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
