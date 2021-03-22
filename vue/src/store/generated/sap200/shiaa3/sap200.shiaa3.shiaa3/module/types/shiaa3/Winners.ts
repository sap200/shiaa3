/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sap200.shiaa3.shiaa3";

export interface Winners {
  creator: string;
  id: number;
  AddressString: string;
  PoolNo: string;
  Winnings: string;
}

const baseWinners: object = {
  creator: "",
  id: 0,
  AddressString: "",
  PoolNo: "",
  Winnings: "",
};

export const Winners = {
  encode(message: Winners, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): Winners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseWinners } as Winners;
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

  fromJSON(object: any): Winners {
    const message = { ...baseWinners } as Winners;
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
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = String(object.PoolNo);
    } else {
      message.PoolNo = "";
    }
    if (object.Winnings !== undefined && object.Winnings !== null) {
      message.Winnings = String(object.Winnings);
    } else {
      message.Winnings = "";
    }
    return message;
  },

  toJSON(message: Winners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
    message.Winnings !== undefined && (obj.Winnings = message.Winnings);
    return obj;
  },

  fromPartial(object: DeepPartial<Winners>): Winners {
    const message = { ...baseWinners } as Winners;
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
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = object.PoolNo;
    } else {
      message.PoolNo = "";
    }
    if (object.Winnings !== undefined && object.Winnings !== null) {
      message.Winnings = object.Winnings;
    } else {
      message.Winnings = "";
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
