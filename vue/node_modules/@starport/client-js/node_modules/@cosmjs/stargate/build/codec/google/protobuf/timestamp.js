"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timestamp = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "google.protobuf";
const baseTimestamp = { seconds: long_1.default.ZERO, nanos: 0 };
exports.Timestamp = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.default.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseTimestamp);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseTimestamp);
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = long_1.default.fromString(object.seconds);
        }
        else {
            message.seconds = long_1.default.ZERO;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = Number(object.nanos);
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = (message.seconds || long_1.default.ZERO).toString());
        message.nanos !== undefined && (obj.nanos = message.nanos);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseTimestamp);
        if (object.seconds !== undefined && object.seconds !== null) {
            message.seconds = object.seconds;
        }
        else {
            message.seconds = long_1.default.ZERO;
        }
        if (object.nanos !== undefined && object.nanos !== null) {
            message.nanos = object.nanos;
        }
        else {
            message.nanos = 0;
        }
        return message;
    },
};
//# sourceMappingURL=timestamp.js.map