/* eslint-disable */
import { TimedOutAsset } from "../assets/TimedOutAsset";
import { SentAsset } from "../assets/SentAsset";
import { TransferAsset } from "../assets/TransferAsset";
import { Asset } from "../assets/Asset";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "sap200.shiaa3.assets";

/** GenesisState defines the assets module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  TimedOutAssetList: TimedOutAsset[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  SentAssetList: SentAsset[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  TransferAssetList: TransferAsset[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  AssetList: Asset[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  portId: string;
}

const baseGenesisState: object = { portId: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.TimedOutAssetList) {
      TimedOutAsset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.SentAssetList) {
      SentAsset.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.TransferAssetList) {
      TransferAsset.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.AssetList) {
      Asset.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.TimedOutAssetList = [];
    message.SentAssetList = [];
    message.TransferAssetList = [];
    message.AssetList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          message.TimedOutAssetList.push(
            TimedOutAsset.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.SentAssetList.push(SentAsset.decode(reader, reader.uint32()));
          break;
        case 3:
          message.TransferAssetList.push(
            TransferAsset.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.AssetList.push(Asset.decode(reader, reader.uint32()));
          break;
        case 1:
          message.portId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.TimedOutAssetList = [];
    message.SentAssetList = [];
    message.TransferAssetList = [];
    message.AssetList = [];
    if (
      object.TimedOutAssetList !== undefined &&
      object.TimedOutAssetList !== null
    ) {
      for (const e of object.TimedOutAssetList) {
        message.TimedOutAssetList.push(TimedOutAsset.fromJSON(e));
      }
    }
    if (object.SentAssetList !== undefined && object.SentAssetList !== null) {
      for (const e of object.SentAssetList) {
        message.SentAssetList.push(SentAsset.fromJSON(e));
      }
    }
    if (
      object.TransferAssetList !== undefined &&
      object.TransferAssetList !== null
    ) {
      for (const e of object.TransferAssetList) {
        message.TransferAssetList.push(TransferAsset.fromJSON(e));
      }
    }
    if (object.AssetList !== undefined && object.AssetList !== null) {
      for (const e of object.AssetList) {
        message.AssetList.push(Asset.fromJSON(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = String(object.portId);
    } else {
      message.portId = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.TimedOutAssetList) {
      obj.TimedOutAssetList = message.TimedOutAssetList.map((e) =>
        e ? TimedOutAsset.toJSON(e) : undefined
      );
    } else {
      obj.TimedOutAssetList = [];
    }
    if (message.SentAssetList) {
      obj.SentAssetList = message.SentAssetList.map((e) =>
        e ? SentAsset.toJSON(e) : undefined
      );
    } else {
      obj.SentAssetList = [];
    }
    if (message.TransferAssetList) {
      obj.TransferAssetList = message.TransferAssetList.map((e) =>
        e ? TransferAsset.toJSON(e) : undefined
      );
    } else {
      obj.TransferAssetList = [];
    }
    if (message.AssetList) {
      obj.AssetList = message.AssetList.map((e) =>
        e ? Asset.toJSON(e) : undefined
      );
    } else {
      obj.AssetList = [];
    }
    message.portId !== undefined && (obj.portId = message.portId);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.TimedOutAssetList = [];
    message.SentAssetList = [];
    message.TransferAssetList = [];
    message.AssetList = [];
    if (
      object.TimedOutAssetList !== undefined &&
      object.TimedOutAssetList !== null
    ) {
      for (const e of object.TimedOutAssetList) {
        message.TimedOutAssetList.push(TimedOutAsset.fromPartial(e));
      }
    }
    if (object.SentAssetList !== undefined && object.SentAssetList !== null) {
      for (const e of object.SentAssetList) {
        message.SentAssetList.push(SentAsset.fromPartial(e));
      }
    }
    if (
      object.TransferAssetList !== undefined &&
      object.TransferAssetList !== null
    ) {
      for (const e of object.TransferAssetList) {
        message.TransferAssetList.push(TransferAsset.fromPartial(e));
      }
    }
    if (object.AssetList !== undefined && object.AssetList !== null) {
      for (const e of object.AssetList) {
        message.AssetList.push(Asset.fromPartial(e));
      }
    }
    if (object.portId !== undefined && object.portId !== null) {
      message.portId = object.portId;
    } else {
      message.portId = "";
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
