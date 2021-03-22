/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sap200.shiaa3.assets";

export interface SentAsset {
  creator: string;
  id: number;
  AssetSerial: string;
  Receiver: string;
  TargetChain: string;
}

const baseSentAsset: object = {
  creator: "",
  id: 0,
  AssetSerial: "",
  Receiver: "",
  TargetChain: "",
};

export const SentAsset = {
  encode(message: SentAsset, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): SentAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSentAsset } as SentAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): SentAsset {
    const message = { ...baseSentAsset } as SentAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = String(object.AssetSerial);
    } else {
      message.AssetSerial = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = String(object.Receiver);
    } else {
      message.Receiver = "";
    }
    if (object.TargetChain !== undefined && object.TargetChain !== null) {
      message.TargetChain = String(object.TargetChain);
    } else {
      message.TargetChain = "";
    }
    return message;
  },

  toJSON(message: SentAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.TargetChain !== undefined &&
      (obj.TargetChain = message.TargetChain);
    return obj;
  },

  fromPartial(object: DeepPartial<SentAsset>): SentAsset {
    const message = { ...baseSentAsset } as SentAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = object.AssetSerial;
    } else {
      message.AssetSerial = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = object.Receiver;
    } else {
      message.Receiver = "";
    }
    if (object.TargetChain !== undefined && object.TargetChain !== null) {
      message.TargetChain = object.TargetChain;
    } else {
      message.TargetChain = "";
    }
    return message;
  },
};

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
