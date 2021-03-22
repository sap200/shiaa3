/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "sap200.shiaa3.assets";
const baseAssetsPacketData = {};
export const AssetsPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.noData !== undefined) {
            NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
        }
        if (message.IbcAssetPacket !== undefined) {
            IbcAssetPacketData.encode(message.IbcAssetPacket, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseAssetsPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.noData = NoData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.IbcAssetPacket = IbcAssetPacketData.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseAssetsPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromJSON(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.IbcAssetPacket !== undefined && object.IbcAssetPacket !== null) {
            message.IbcAssetPacket = IbcAssetPacketData.fromJSON(object.IbcAssetPacket);
        }
        else {
            message.IbcAssetPacket = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.noData !== undefined &&
            (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
        message.IbcAssetPacket !== undefined &&
            (obj.IbcAssetPacket = message.IbcAssetPacket
                ? IbcAssetPacketData.toJSON(message.IbcAssetPacket)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseAssetsPacketData };
        if (object.noData !== undefined && object.noData !== null) {
            message.noData = NoData.fromPartial(object.noData);
        }
        else {
            message.noData = undefined;
        }
        if (object.IbcAssetPacket !== undefined && object.IbcAssetPacket !== null) {
            message.IbcAssetPacket = IbcAssetPacketData.fromPartial(object.IbcAssetPacket);
        }
        else {
            message.IbcAssetPacket = undefined;
        }
        return message;
    },
};
const baseNoData = {};
export const NoData = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNoData };
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
        const message = { ...baseNoData };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseNoData };
        return message;
    },
};
const baseIbcAssetPacketData = {
    AssetSerial: "",
    Receiver: "",
    Creator: "",
};
export const IbcAssetPacketData = {
    encode(message, writer = Writer.create()) {
        if (message.AssetSerial !== "") {
            writer.uint32(10).string(message.AssetSerial);
        }
        if (message.Receiver !== "") {
            writer.uint32(18).string(message.Receiver);
        }
        if (message.Creator !== "") {
            writer.uint32(26).string(message.Creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcAssetPacketData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetSerial = reader.string();
                    break;
                case 2:
                    message.Receiver = reader.string();
                    break;
                case 3:
                    message.Creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcAssetPacketData };
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
        if (object.Creator !== undefined && object.Creator !== null) {
            message.Creator = String(object.Creator);
        }
        else {
            message.Creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AssetSerial !== undefined &&
            (obj.AssetSerial = message.AssetSerial);
        message.Receiver !== undefined && (obj.Receiver = message.Receiver);
        message.Creator !== undefined && (obj.Creator = message.Creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcAssetPacketData };
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
        if (object.Creator !== undefined && object.Creator !== null) {
            message.Creator = object.Creator;
        }
        else {
            message.Creator = "";
        }
        return message;
    },
};
const baseIbcAssetPacketAck = { AssetId: "" };
export const IbcAssetPacketAck = {
    encode(message, writer = Writer.create()) {
        if (message.AssetId !== "") {
            writer.uint32(10).string(message.AssetId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseIbcAssetPacketAck };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.AssetId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseIbcAssetPacketAck };
        if (object.AssetId !== undefined && object.AssetId !== null) {
            message.AssetId = String(object.AssetId);
        }
        else {
            message.AssetId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.AssetId !== undefined && (obj.AssetId = message.AssetId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseIbcAssetPacketAck };
        if (object.AssetId !== undefined && object.AssetId !== null) {
            message.AssetId = object.AssetId;
        }
        else {
            message.AssetId = "";
        }
        return message;
    },
};
