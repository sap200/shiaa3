/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "sap200.shiaa3.assets";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgSendIbcAsset {
  sender: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  AssetSerial: string;
  Receiver: string;
}

export interface MsgSendIbcAssetResponse {}

export interface MsgCreateTimedOutAsset {
  creator: string;
  AssetSerial: string;
  Receiver: string;
  TargetChain: string;
}

export interface MsgCreateTimedOutAssetResponse {
  id: number;
}

export interface MsgUpdateTimedOutAsset {
  creator: string;
  id: number;
  AssetSerial: string;
  Receiver: string;
  TargetChain: string;
}

export interface MsgUpdateTimedOutAssetResponse {}

export interface MsgDeleteTimedOutAsset {
  creator: string;
  id: number;
}

export interface MsgDeleteTimedOutAssetResponse {}

export interface MsgCreateSentAsset {
  creator: string;
  AssetSerial: string;
  Receiver: string;
  TargetChain: string;
}

export interface MsgCreateSentAssetResponse {
  id: number;
}

export interface MsgUpdateSentAsset {
  creator: string;
  id: number;
  AssetSerial: string;
  Receiver: string;
  TargetChain: string;
}

export interface MsgUpdateSentAssetResponse {}

export interface MsgDeleteSentAsset {
  creator: string;
  id: number;
}

export interface MsgDeleteSentAssetResponse {}

export interface MsgCreateTransferAsset {
  creator: string;
  AssetSerial: string;
  Receiver: string;
}

export interface MsgCreateTransferAssetResponse {
  id: number;
}

export interface MsgUpdateTransferAsset {
  creator: string;
  id: number;
  AssetSerial: string;
  Receiver: string;
}

export interface MsgUpdateTransferAssetResponse {}

export interface MsgDeleteTransferAsset {
  creator: string;
  id: number;
}

export interface MsgDeleteTransferAssetResponse {}

export interface MsgCreateAsset {
  creator: string;
  Serial: string;
  Name: string;
  AssetType: number;
  Tokens: number;
  Owner: string;
}

export interface MsgCreateAssetResponse {
  id: number;
}

export interface MsgUpdateAsset {
  creator: string;
  id: number;
  Serial: string;
  Name: string;
  AssetType: number;
  Tokens: number;
  Owner: string;
}

export interface MsgUpdateAssetResponse {}

export interface MsgDeleteAsset {
  creator: string;
  id: number;
}

export interface MsgDeleteAssetResponse {}

const baseMsgSendIbcAsset: object = {
  sender: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  AssetSerial: "",
  Receiver: "",
};

export const MsgSendIbcAsset = {
  encode(message: MsgSendIbcAsset, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendIbcAsset } as MsgSendIbcAsset;
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
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): MsgSendIbcAsset {
    const message = { ...baseMsgSendIbcAsset } as MsgSendIbcAsset;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
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
    return message;
  },

  toJSON(message: MsgSendIbcAsset): unknown {
    const obj: any = {};
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

  fromPartial(object: DeepPartial<MsgSendIbcAsset>): MsgSendIbcAsset {
    const message = { ...baseMsgSendIbcAsset } as MsgSendIbcAsset;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
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
    return message;
  },
};

const baseMsgSendIbcAssetResponse: object = {};

export const MsgSendIbcAssetResponse = {
  encode(_: MsgSendIbcAssetResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendIbcAssetResponse,
    } as MsgSendIbcAssetResponse;
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

  fromJSON(_: any): MsgSendIbcAssetResponse {
    const message = {
      ...baseMsgSendIbcAssetResponse,
    } as MsgSendIbcAssetResponse;
    return message;
  },

  toJSON(_: MsgSendIbcAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendIbcAssetResponse>
  ): MsgSendIbcAssetResponse {
    const message = {
      ...baseMsgSendIbcAssetResponse,
    } as MsgSendIbcAssetResponse;
    return message;
  },
};

const baseMsgCreateTimedOutAsset: object = {
  creator: "",
  AssetSerial: "",
  Receiver: "",
  TargetChain: "",
};

export const MsgCreateTimedOutAsset = {
  encode(
    message: MsgCreateTimedOutAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTimedOutAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTimedOutAsset } as MsgCreateTimedOutAsset;
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

  fromJSON(object: any): MsgCreateTimedOutAsset {
    const message = { ...baseMsgCreateTimedOutAsset } as MsgCreateTimedOutAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateTimedOutAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.TargetChain !== undefined &&
      (obj.TargetChain = message.TargetChain);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimedOutAsset>
  ): MsgCreateTimedOutAsset {
    const message = { ...baseMsgCreateTimedOutAsset } as MsgCreateTimedOutAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateTimedOutAssetResponse: object = { id: 0 };

export const MsgCreateTimedOutAssetResponse = {
  encode(
    message: MsgCreateTimedOutAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTimedOutAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTimedOutAssetResponse,
    } as MsgCreateTimedOutAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTimedOutAssetResponse {
    const message = {
      ...baseMsgCreateTimedOutAssetResponse,
    } as MsgCreateTimedOutAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTimedOutAssetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTimedOutAssetResponse>
  ): MsgCreateTimedOutAssetResponse {
    const message = {
      ...baseMsgCreateTimedOutAssetResponse,
    } as MsgCreateTimedOutAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTimedOutAsset: object = {
  creator: "",
  id: 0,
  AssetSerial: "",
  Receiver: "",
  TargetChain: "",
};

export const MsgUpdateTimedOutAsset = {
  encode(
    message: MsgUpdateTimedOutAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTimedOutAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTimedOutAsset } as MsgUpdateTimedOutAsset;
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

  fromJSON(object: any): MsgUpdateTimedOutAsset {
    const message = { ...baseMsgUpdateTimedOutAsset } as MsgUpdateTimedOutAsset;
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

  toJSON(message: MsgUpdateTimedOutAsset): unknown {
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

  fromPartial(
    object: DeepPartial<MsgUpdateTimedOutAsset>
  ): MsgUpdateTimedOutAsset {
    const message = { ...baseMsgUpdateTimedOutAsset } as MsgUpdateTimedOutAsset;
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

const baseMsgUpdateTimedOutAssetResponse: object = {};

export const MsgUpdateTimedOutAssetResponse = {
  encode(
    _: MsgUpdateTimedOutAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTimedOutAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTimedOutAssetResponse,
    } as MsgUpdateTimedOutAssetResponse;
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

  fromJSON(_: any): MsgUpdateTimedOutAssetResponse {
    const message = {
      ...baseMsgUpdateTimedOutAssetResponse,
    } as MsgUpdateTimedOutAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateTimedOutAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTimedOutAssetResponse>
  ): MsgUpdateTimedOutAssetResponse {
    const message = {
      ...baseMsgUpdateTimedOutAssetResponse,
    } as MsgUpdateTimedOutAssetResponse;
    return message;
  },
};

const baseMsgDeleteTimedOutAsset: object = { creator: "", id: 0 };

export const MsgDeleteTimedOutAsset = {
  encode(
    message: MsgDeleteTimedOutAsset,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTimedOutAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTimedOutAsset } as MsgDeleteTimedOutAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTimedOutAsset {
    const message = { ...baseMsgDeleteTimedOutAsset } as MsgDeleteTimedOutAsset;
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
    return message;
  },

  toJSON(message: MsgDeleteTimedOutAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteTimedOutAsset>
  ): MsgDeleteTimedOutAsset {
    const message = { ...baseMsgDeleteTimedOutAsset } as MsgDeleteTimedOutAsset;
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
    return message;
  },
};

const baseMsgDeleteTimedOutAssetResponse: object = {};

export const MsgDeleteTimedOutAssetResponse = {
  encode(
    _: MsgDeleteTimedOutAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTimedOutAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTimedOutAssetResponse,
    } as MsgDeleteTimedOutAssetResponse;
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

  fromJSON(_: any): MsgDeleteTimedOutAssetResponse {
    const message = {
      ...baseMsgDeleteTimedOutAssetResponse,
    } as MsgDeleteTimedOutAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteTimedOutAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteTimedOutAssetResponse>
  ): MsgDeleteTimedOutAssetResponse {
    const message = {
      ...baseMsgDeleteTimedOutAssetResponse,
    } as MsgDeleteTimedOutAssetResponse;
    return message;
  },
};

const baseMsgCreateSentAsset: object = {
  creator: "",
  AssetSerial: "",
  Receiver: "",
  TargetChain: "",
};

export const MsgCreateSentAsset = {
  encode(
    message: MsgCreateSentAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateSentAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateSentAsset } as MsgCreateSentAsset;
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

  fromJSON(object: any): MsgCreateSentAsset {
    const message = { ...baseMsgCreateSentAsset } as MsgCreateSentAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateSentAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.TargetChain !== undefined &&
      (obj.TargetChain = message.TargetChain);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateSentAsset>): MsgCreateSentAsset {
    const message = { ...baseMsgCreateSentAsset } as MsgCreateSentAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateSentAssetResponse: object = { id: 0 };

export const MsgCreateSentAssetResponse = {
  encode(
    message: MsgCreateSentAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateSentAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateSentAssetResponse,
    } as MsgCreateSentAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateSentAssetResponse {
    const message = {
      ...baseMsgCreateSentAssetResponse,
    } as MsgCreateSentAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateSentAssetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateSentAssetResponse>
  ): MsgCreateSentAssetResponse {
    const message = {
      ...baseMsgCreateSentAssetResponse,
    } as MsgCreateSentAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateSentAsset: object = {
  creator: "",
  id: 0,
  AssetSerial: "",
  Receiver: "",
  TargetChain: "",
};

export const MsgUpdateSentAsset = {
  encode(
    message: MsgUpdateSentAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateSentAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateSentAsset } as MsgUpdateSentAsset;
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

  fromJSON(object: any): MsgUpdateSentAsset {
    const message = { ...baseMsgUpdateSentAsset } as MsgUpdateSentAsset;
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

  toJSON(message: MsgUpdateSentAsset): unknown {
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

  fromPartial(object: DeepPartial<MsgUpdateSentAsset>): MsgUpdateSentAsset {
    const message = { ...baseMsgUpdateSentAsset } as MsgUpdateSentAsset;
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

const baseMsgUpdateSentAssetResponse: object = {};

export const MsgUpdateSentAssetResponse = {
  encode(
    _: MsgUpdateSentAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateSentAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateSentAssetResponse,
    } as MsgUpdateSentAssetResponse;
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

  fromJSON(_: any): MsgUpdateSentAssetResponse {
    const message = {
      ...baseMsgUpdateSentAssetResponse,
    } as MsgUpdateSentAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateSentAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateSentAssetResponse>
  ): MsgUpdateSentAssetResponse {
    const message = {
      ...baseMsgUpdateSentAssetResponse,
    } as MsgUpdateSentAssetResponse;
    return message;
  },
};

const baseMsgDeleteSentAsset: object = { creator: "", id: 0 };

export const MsgDeleteSentAsset = {
  encode(
    message: MsgDeleteSentAsset,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteSentAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteSentAsset } as MsgDeleteSentAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteSentAsset {
    const message = { ...baseMsgDeleteSentAsset } as MsgDeleteSentAsset;
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
    return message;
  },

  toJSON(message: MsgDeleteSentAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteSentAsset>): MsgDeleteSentAsset {
    const message = { ...baseMsgDeleteSentAsset } as MsgDeleteSentAsset;
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
    return message;
  },
};

const baseMsgDeleteSentAssetResponse: object = {};

export const MsgDeleteSentAssetResponse = {
  encode(
    _: MsgDeleteSentAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteSentAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteSentAssetResponse,
    } as MsgDeleteSentAssetResponse;
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

  fromJSON(_: any): MsgDeleteSentAssetResponse {
    const message = {
      ...baseMsgDeleteSentAssetResponse,
    } as MsgDeleteSentAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteSentAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteSentAssetResponse>
  ): MsgDeleteSentAssetResponse {
    const message = {
      ...baseMsgDeleteSentAssetResponse,
    } as MsgDeleteSentAssetResponse;
    return message;
  },
};

const baseMsgCreateTransferAsset: object = {
  creator: "",
  AssetSerial: "",
  Receiver: "",
};

export const MsgCreateTransferAsset = {
  encode(
    message: MsgCreateTransferAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTransferAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTransferAsset } as MsgCreateTransferAsset;
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

  fromJSON(object: any): MsgCreateTransferAsset {
    const message = { ...baseMsgCreateTransferAsset } as MsgCreateTransferAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateTransferAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTransferAsset>
  ): MsgCreateTransferAsset {
    const message = { ...baseMsgCreateTransferAsset } as MsgCreateTransferAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateTransferAssetResponse: object = { id: 0 };

export const MsgCreateTransferAssetResponse = {
  encode(
    message: MsgCreateTransferAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateTransferAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateTransferAssetResponse,
    } as MsgCreateTransferAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransferAssetResponse {
    const message = {
      ...baseMsgCreateTransferAssetResponse,
    } as MsgCreateTransferAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTransferAssetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateTransferAssetResponse>
  ): MsgCreateTransferAssetResponse {
    const message = {
      ...baseMsgCreateTransferAssetResponse,
    } as MsgCreateTransferAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTransferAsset: object = {
  creator: "",
  id: 0,
  AssetSerial: "",
  Receiver: "",
};

export const MsgUpdateTransferAsset = {
  encode(
    message: MsgUpdateTransferAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTransferAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTransferAsset } as MsgUpdateTransferAsset;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTransferAsset {
    const message = { ...baseMsgUpdateTransferAsset } as MsgUpdateTransferAsset;
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
    return message;
  },

  toJSON(message: MsgUpdateTransferAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTransferAsset>
  ): MsgUpdateTransferAsset {
    const message = { ...baseMsgUpdateTransferAsset } as MsgUpdateTransferAsset;
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
    return message;
  },
};

const baseMsgUpdateTransferAssetResponse: object = {};

export const MsgUpdateTransferAssetResponse = {
  encode(
    _: MsgUpdateTransferAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTransferAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTransferAssetResponse,
    } as MsgUpdateTransferAssetResponse;
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

  fromJSON(_: any): MsgUpdateTransferAssetResponse {
    const message = {
      ...baseMsgUpdateTransferAssetResponse,
    } as MsgUpdateTransferAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateTransferAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTransferAssetResponse>
  ): MsgUpdateTransferAssetResponse {
    const message = {
      ...baseMsgUpdateTransferAssetResponse,
    } as MsgUpdateTransferAssetResponse;
    return message;
  },
};

const baseMsgDeleteTransferAsset: object = { creator: "", id: 0 };

export const MsgDeleteTransferAsset = {
  encode(
    message: MsgDeleteTransferAsset,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTransferAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTransferAsset } as MsgDeleteTransferAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTransferAsset {
    const message = { ...baseMsgDeleteTransferAsset } as MsgDeleteTransferAsset;
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
    return message;
  },

  toJSON(message: MsgDeleteTransferAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteTransferAsset>
  ): MsgDeleteTransferAsset {
    const message = { ...baseMsgDeleteTransferAsset } as MsgDeleteTransferAsset;
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
    return message;
  },
};

const baseMsgDeleteTransferAssetResponse: object = {};

export const MsgDeleteTransferAssetResponse = {
  encode(
    _: MsgDeleteTransferAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteTransferAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteTransferAssetResponse,
    } as MsgDeleteTransferAssetResponse;
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

  fromJSON(_: any): MsgDeleteTransferAssetResponse {
    const message = {
      ...baseMsgDeleteTransferAssetResponse,
    } as MsgDeleteTransferAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteTransferAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteTransferAssetResponse>
  ): MsgDeleteTransferAssetResponse {
    const message = {
      ...baseMsgDeleteTransferAssetResponse,
    } as MsgDeleteTransferAssetResponse;
    return message;
  },
};

const baseMsgCreateAsset: object = {
  creator: "",
  Serial: "",
  Name: "",
  AssetType: 0,
  Tokens: 0,
  Owner: "",
};

export const MsgCreateAsset = {
  encode(message: MsgCreateAsset, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAsset } as MsgCreateAsset;
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

  fromJSON(object: any): MsgCreateAsset {
    const message = { ...baseMsgCreateAsset } as MsgCreateAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.Serial !== undefined && object.Serial !== null) {
      message.Serial = String(object.Serial);
    } else {
      message.Serial = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = String(object.Name);
    } else {
      message.Name = "";
    }
    if (object.AssetType !== undefined && object.AssetType !== null) {
      message.AssetType = Number(object.AssetType);
    } else {
      message.AssetType = 0;
    }
    if (object.Tokens !== undefined && object.Tokens !== null) {
      message.Tokens = Number(object.Tokens);
    } else {
      message.Tokens = 0;
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = String(object.Owner);
    } else {
      message.Owner = "";
    }
    return message;
  },

  toJSON(message: MsgCreateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.Serial !== undefined && (obj.Serial = message.Serial);
    message.Name !== undefined && (obj.Name = message.Name);
    message.AssetType !== undefined && (obj.AssetType = message.AssetType);
    message.Tokens !== undefined && (obj.Tokens = message.Tokens);
    message.Owner !== undefined && (obj.Owner = message.Owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateAsset>): MsgCreateAsset {
    const message = { ...baseMsgCreateAsset } as MsgCreateAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.Serial !== undefined && object.Serial !== null) {
      message.Serial = object.Serial;
    } else {
      message.Serial = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    } else {
      message.Name = "";
    }
    if (object.AssetType !== undefined && object.AssetType !== null) {
      message.AssetType = object.AssetType;
    } else {
      message.AssetType = 0;
    }
    if (object.Tokens !== undefined && object.Tokens !== null) {
      message.Tokens = object.Tokens;
    } else {
      message.Tokens = 0;
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = object.Owner;
    } else {
      message.Owner = "";
    }
    return message;
  },
};

const baseMsgCreateAssetResponse: object = { id: 0 };

export const MsgCreateAssetResponse = {
  encode(
    message: MsgCreateAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateAssetResponse } as MsgCreateAssetResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAssetResponse {
    const message = { ...baseMsgCreateAssetResponse } as MsgCreateAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateAssetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateAssetResponse>
  ): MsgCreateAssetResponse {
    const message = { ...baseMsgCreateAssetResponse } as MsgCreateAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateAsset: object = {
  creator: "",
  id: 0,
  Serial: "",
  Name: "",
  AssetType: 0,
  Tokens: 0,
  Owner: "",
};

export const MsgUpdateAsset = {
  encode(message: MsgUpdateAsset, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
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

  fromJSON(object: any): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
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
    if (object.Serial !== undefined && object.Serial !== null) {
      message.Serial = String(object.Serial);
    } else {
      message.Serial = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = String(object.Name);
    } else {
      message.Name = "";
    }
    if (object.AssetType !== undefined && object.AssetType !== null) {
      message.AssetType = Number(object.AssetType);
    } else {
      message.AssetType = 0;
    }
    if (object.Tokens !== undefined && object.Tokens !== null) {
      message.Tokens = Number(object.Tokens);
    } else {
      message.Tokens = 0;
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = String(object.Owner);
    } else {
      message.Owner = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.Serial !== undefined && (obj.Serial = message.Serial);
    message.Name !== undefined && (obj.Name = message.Name);
    message.AssetType !== undefined && (obj.AssetType = message.AssetType);
    message.Tokens !== undefined && (obj.Tokens = message.Tokens);
    message.Owner !== undefined && (obj.Owner = message.Owner);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateAsset>): MsgUpdateAsset {
    const message = { ...baseMsgUpdateAsset } as MsgUpdateAsset;
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
    if (object.Serial !== undefined && object.Serial !== null) {
      message.Serial = object.Serial;
    } else {
      message.Serial = "";
    }
    if (object.Name !== undefined && object.Name !== null) {
      message.Name = object.Name;
    } else {
      message.Name = "";
    }
    if (object.AssetType !== undefined && object.AssetType !== null) {
      message.AssetType = object.AssetType;
    } else {
      message.AssetType = 0;
    }
    if (object.Tokens !== undefined && object.Tokens !== null) {
      message.Tokens = object.Tokens;
    } else {
      message.Tokens = 0;
    }
    if (object.Owner !== undefined && object.Owner !== null) {
      message.Owner = object.Owner;
    } else {
      message.Owner = "";
    }
    return message;
  },
};

const baseMsgUpdateAssetResponse: object = {};

export const MsgUpdateAssetResponse = {
  encode(_: MsgUpdateAssetResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
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

  fromJSON(_: any): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateAssetResponse>): MsgUpdateAssetResponse {
    const message = { ...baseMsgUpdateAssetResponse } as MsgUpdateAssetResponse;
    return message;
  },
};

const baseMsgDeleteAsset: object = { creator: "", id: 0 };

export const MsgDeleteAsset = {
  encode(message: MsgDeleteAsset, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAsset } as MsgDeleteAsset;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAsset {
    const message = { ...baseMsgDeleteAsset } as MsgDeleteAsset;
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
    return message;
  },

  toJSON(message: MsgDeleteAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAsset>): MsgDeleteAsset {
    const message = { ...baseMsgDeleteAsset } as MsgDeleteAsset;
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
    return message;
  },
};

const baseMsgDeleteAssetResponse: object = {};

export const MsgDeleteAssetResponse = {
  encode(_: MsgDeleteAssetResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAssetResponse } as MsgDeleteAssetResponse;
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

  fromJSON(_: any): MsgDeleteAssetResponse {
    const message = { ...baseMsgDeleteAssetResponse } as MsgDeleteAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteAssetResponse>): MsgDeleteAssetResponse {
    const message = { ...baseMsgDeleteAssetResponse } as MsgDeleteAssetResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendIbcAsset(request: MsgSendIbcAsset): Promise<MsgSendIbcAssetResponse>;
  CreateTimedOutAsset(
    request: MsgCreateTimedOutAsset
  ): Promise<MsgCreateTimedOutAssetResponse>;
  UpdateTimedOutAsset(
    request: MsgUpdateTimedOutAsset
  ): Promise<MsgUpdateTimedOutAssetResponse>;
  DeleteTimedOutAsset(
    request: MsgDeleteTimedOutAsset
  ): Promise<MsgDeleteTimedOutAssetResponse>;
  CreateSentAsset(
    request: MsgCreateSentAsset
  ): Promise<MsgCreateSentAssetResponse>;
  UpdateSentAsset(
    request: MsgUpdateSentAsset
  ): Promise<MsgUpdateSentAssetResponse>;
  DeleteSentAsset(
    request: MsgDeleteSentAsset
  ): Promise<MsgDeleteSentAssetResponse>;
  CreateTransferAsset(
    request: MsgCreateTransferAsset
  ): Promise<MsgCreateTransferAssetResponse>;
  UpdateTransferAsset(
    request: MsgUpdateTransferAsset
  ): Promise<MsgUpdateTransferAssetResponse>;
  DeleteTransferAsset(
    request: MsgDeleteTransferAsset
  ): Promise<MsgDeleteTransferAssetResponse>;
  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse>;
  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse>;
  DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendIbcAsset(request: MsgSendIbcAsset): Promise<MsgSendIbcAssetResponse> {
    const data = MsgSendIbcAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "SendIbcAsset",
      data
    );
    return promise.then((data) =>
      MsgSendIbcAssetResponse.decode(new Reader(data))
    );
  }

  CreateTimedOutAsset(
    request: MsgCreateTimedOutAsset
  ): Promise<MsgCreateTimedOutAssetResponse> {
    const data = MsgCreateTimedOutAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "CreateTimedOutAsset",
      data
    );
    return promise.then((data) =>
      MsgCreateTimedOutAssetResponse.decode(new Reader(data))
    );
  }

  UpdateTimedOutAsset(
    request: MsgUpdateTimedOutAsset
  ): Promise<MsgUpdateTimedOutAssetResponse> {
    const data = MsgUpdateTimedOutAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "UpdateTimedOutAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateTimedOutAssetResponse.decode(new Reader(data))
    );
  }

  DeleteTimedOutAsset(
    request: MsgDeleteTimedOutAsset
  ): Promise<MsgDeleteTimedOutAssetResponse> {
    const data = MsgDeleteTimedOutAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "DeleteTimedOutAsset",
      data
    );
    return promise.then((data) =>
      MsgDeleteTimedOutAssetResponse.decode(new Reader(data))
    );
  }

  CreateSentAsset(
    request: MsgCreateSentAsset
  ): Promise<MsgCreateSentAssetResponse> {
    const data = MsgCreateSentAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "CreateSentAsset",
      data
    );
    return promise.then((data) =>
      MsgCreateSentAssetResponse.decode(new Reader(data))
    );
  }

  UpdateSentAsset(
    request: MsgUpdateSentAsset
  ): Promise<MsgUpdateSentAssetResponse> {
    const data = MsgUpdateSentAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "UpdateSentAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateSentAssetResponse.decode(new Reader(data))
    );
  }

  DeleteSentAsset(
    request: MsgDeleteSentAsset
  ): Promise<MsgDeleteSentAssetResponse> {
    const data = MsgDeleteSentAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "DeleteSentAsset",
      data
    );
    return promise.then((data) =>
      MsgDeleteSentAssetResponse.decode(new Reader(data))
    );
  }

  CreateTransferAsset(
    request: MsgCreateTransferAsset
  ): Promise<MsgCreateTransferAssetResponse> {
    const data = MsgCreateTransferAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "CreateTransferAsset",
      data
    );
    return promise.then((data) =>
      MsgCreateTransferAssetResponse.decode(new Reader(data))
    );
  }

  UpdateTransferAsset(
    request: MsgUpdateTransferAsset
  ): Promise<MsgUpdateTransferAssetResponse> {
    const data = MsgUpdateTransferAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "UpdateTransferAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateTransferAssetResponse.decode(new Reader(data))
    );
  }

  DeleteTransferAsset(
    request: MsgDeleteTransferAsset
  ): Promise<MsgDeleteTransferAssetResponse> {
    const data = MsgDeleteTransferAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "DeleteTransferAsset",
      data
    );
    return promise.then((data) =>
      MsgDeleteTransferAssetResponse.decode(new Reader(data))
    );
  }

  CreateAsset(request: MsgCreateAsset): Promise<MsgCreateAssetResponse> {
    const data = MsgCreateAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "CreateAsset",
      data
    );
    return promise.then((data) =>
      MsgCreateAssetResponse.decode(new Reader(data))
    );
  }

  UpdateAsset(request: MsgUpdateAsset): Promise<MsgUpdateAssetResponse> {
    const data = MsgUpdateAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "UpdateAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateAssetResponse.decode(new Reader(data))
    );
  }

  DeleteAsset(request: MsgDeleteAsset): Promise<MsgDeleteAssetResponse> {
    const data = MsgDeleteAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.assets.Msg",
      "DeleteAsset",
      data
    );
    return promise.then((data) =>
      MsgDeleteAssetResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
