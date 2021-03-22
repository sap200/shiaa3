/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sap200.shiaa3.assets";

export interface AssetsPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  IbcAssetPacket: IbcAssetPacketData | undefined;
}

export interface NoData {}

/**
 * this line is used by starport scaffolding # ibc/packet/proto/message
 * IbcAssetPacketData defines a struct for the packet payload
 */
export interface IbcAssetPacketData {
  AssetSerial: string;
  Receiver: string;
  Creator: string;
}

/** IbcAssetPacketAck defines a struct for the packet acknowledgment */
export interface IbcAssetPacketAck {
  AssetId: string;
}

const baseAssetsPacketData: object = {};

export const AssetsPacketData = {
  encode(message: AssetsPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.IbcAssetPacket !== undefined) {
      IbcAssetPacketData.encode(
        message.IbcAssetPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AssetsPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAssetsPacketData } as AssetsPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.IbcAssetPacket = IbcAssetPacketData.decode(
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

  fromJSON(object: any): AssetsPacketData {
    const message = { ...baseAssetsPacketData } as AssetsPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.IbcAssetPacket !== undefined && object.IbcAssetPacket !== null) {
      message.IbcAssetPacket = IbcAssetPacketData.fromJSON(
        object.IbcAssetPacket
      );
    } else {
      message.IbcAssetPacket = undefined;
    }
    return message;
  },

  toJSON(message: AssetsPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.IbcAssetPacket !== undefined &&
      (obj.IbcAssetPacket = message.IbcAssetPacket
        ? IbcAssetPacketData.toJSON(message.IbcAssetPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetsPacketData>): AssetsPacketData {
    const message = { ...baseAssetsPacketData } as AssetsPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (object.IbcAssetPacket !== undefined && object.IbcAssetPacket !== null) {
      message.IbcAssetPacket = IbcAssetPacketData.fromPartial(
        object.IbcAssetPacket
      );
    } else {
      message.IbcAssetPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseIbcAssetPacketData: object = {
  AssetSerial: "",
  Receiver: "",
  Creator: "",
};

export const IbcAssetPacketData = {
  encode(
    message: IbcAssetPacketData,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): IbcAssetPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcAssetPacketData } as IbcAssetPacketData;
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

  fromJSON(object: any): IbcAssetPacketData {
    const message = { ...baseIbcAssetPacketData } as IbcAssetPacketData;
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
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    return message;
  },

  toJSON(message: IbcAssetPacketData): unknown {
    const obj: any = {};
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.Creator !== undefined && (obj.Creator = message.Creator);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcAssetPacketData>): IbcAssetPacketData {
    const message = { ...baseIbcAssetPacketData } as IbcAssetPacketData;
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
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
    }
    return message;
  },
};

const baseIbcAssetPacketAck: object = { AssetId: "" };

export const IbcAssetPacketAck = {
  encode(message: IbcAssetPacketAck, writer: Writer = Writer.create()): Writer {
    if (message.AssetId !== "") {
      writer.uint32(10).string(message.AssetId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): IbcAssetPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIbcAssetPacketAck } as IbcAssetPacketAck;
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

  fromJSON(object: any): IbcAssetPacketAck {
    const message = { ...baseIbcAssetPacketAck } as IbcAssetPacketAck;
    if (object.AssetId !== undefined && object.AssetId !== null) {
      message.AssetId = String(object.AssetId);
    } else {
      message.AssetId = "";
    }
    return message;
  },

  toJSON(message: IbcAssetPacketAck): unknown {
    const obj: any = {};
    message.AssetId !== undefined && (obj.AssetId = message.AssetId);
    return obj;
  },

  fromPartial(object: DeepPartial<IbcAssetPacketAck>): IbcAssetPacketAck {
    const message = { ...baseIbcAssetPacketAck } as IbcAssetPacketAck;
    if (object.AssetId !== undefined && object.AssetId !== null) {
      message.AssetId = object.AssetId;
    } else {
      message.AssetId = "";
    }
    return message;
  },
};

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
