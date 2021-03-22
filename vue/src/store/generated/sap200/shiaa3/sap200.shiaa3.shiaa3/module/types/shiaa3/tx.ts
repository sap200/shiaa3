/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "sap200.shiaa3.shiaa3";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateWinners {
  creator: string;
  AddressString: string;
  PoolNo: string;
  Winnings: string;
}

export interface MsgCreateWinnersResponse {
  id: number;
}

export interface MsgUpdateWinners {
  creator: string;
  id: number;
  AddressString: string;
  PoolNo: string;
  Winnings: string;
}

export interface MsgUpdateWinnersResponse {}

export interface MsgDeleteWinners {
  creator: string;
  id: number;
}

export interface MsgDeleteWinnersResponse {}

export interface MsgCreateMembers {
  creator: string;
  address: string;
}

export interface MsgCreateMembersResponse {
  id: number;
}

export interface MsgUpdateMembers {
  creator: string;
  id: number;
  address: string;
}

export interface MsgUpdateMembersResponse {}

export interface MsgDeleteMembers {
  creator: string;
  id: number;
}

export interface MsgDeleteMembersResponse {}

export interface MsgCreatePool4Ticket {
  creator: string;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgCreatePool4TicketResponse {
  id: number;
}

export interface MsgUpdatePool4Ticket {
  creator: string;
  id: number;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgUpdatePool4TicketResponse {}

export interface MsgDeletePool4Ticket {
  creator: string;
  id: number;
}

export interface MsgDeletePool4TicketResponse {}

export interface MsgCreatePool3Ticket {
  creator: string;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgCreatePool3TicketResponse {
  id: number;
}

export interface MsgUpdatePool3Ticket {
  creator: string;
  id: number;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgUpdatePool3TicketResponse {}

export interface MsgDeletePool3Ticket {
  creator: string;
  id: number;
}

export interface MsgDeletePool3TicketResponse {}

export interface MsgCreatePool2Ticket {
  creator: string;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgCreatePool2TicketResponse {
  id: number;
}

export interface MsgUpdatePool2Ticket {
  creator: string;
  id: number;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgUpdatePool2TicketResponse {}

export interface MsgDeletePool2Ticket {
  creator: string;
  id: number;
}

export interface MsgDeletePool2TicketResponse {}

export interface MsgCreatePool1Ticket {
  creator: string;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgCreatePool1TicketResponse {
  id: number;
}

export interface MsgUpdatePool1Ticket {
  creator: string;
  id: number;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgUpdatePool1TicketResponse {}

export interface MsgDeletePool1Ticket {
  creator: string;
  id: number;
}

export interface MsgDeletePool1TicketResponse {}

export interface MsgCreatePool0Ticket {
  creator: string;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgCreatePool0TicketResponse {
  id: number;
}

export interface MsgUpdatePool0Ticket {
  creator: string;
  id: number;
  AddressString: string;
  LambdaValue: string;
}

export interface MsgUpdatePool0TicketResponse {}

export interface MsgDeletePool0Ticket {
  creator: string;
  id: number;
}

export interface MsgDeletePool0TicketResponse {}

export interface MsgCreateJoinPoolAndStakeAsset {
  creator: string;
  PoolNo: string;
  AssetSerial: string;
}

export interface MsgCreateJoinPoolAndStakeAssetResponse {
  id: number;
}

export interface MsgUpdateJoinPoolAndStakeAsset {
  creator: string;
  id: number;
  PoolNo: string;
  AssetSerial: string;
}

export interface MsgUpdateJoinPoolAndStakeAssetResponse {}

export interface MsgDeleteJoinPoolAndStakeAsset {
  creator: string;
  id: number;
}

export interface MsgDeleteJoinPoolAndStakeAssetResponse {}

const baseMsgCreateWinners: object = {
  creator: "",
  AddressString: "",
  PoolNo: "",
  Winnings: "",
};

export const MsgCreateWinners = {
  encode(message: MsgCreateWinners, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreateWinners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateWinners } as MsgCreateWinners;
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

  fromJSON(object: any): MsgCreateWinners {
    const message = { ...baseMsgCreateWinners } as MsgCreateWinners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateWinners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
    message.Winnings !== undefined && (obj.Winnings = message.Winnings);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateWinners>): MsgCreateWinners {
    const message = { ...baseMsgCreateWinners } as MsgCreateWinners;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateWinnersResponse: object = { id: 0 };

export const MsgCreateWinnersResponse = {
  encode(
    message: MsgCreateWinnersResponse,
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
  ): MsgCreateWinnersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateWinnersResponse,
    } as MsgCreateWinnersResponse;
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

  fromJSON(object: any): MsgCreateWinnersResponse {
    const message = {
      ...baseMsgCreateWinnersResponse,
    } as MsgCreateWinnersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateWinnersResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateWinnersResponse>
  ): MsgCreateWinnersResponse {
    const message = {
      ...baseMsgCreateWinnersResponse,
    } as MsgCreateWinnersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateWinners: object = {
  creator: "",
  id: 0,
  AddressString: "",
  PoolNo: "",
  Winnings: "",
};

export const MsgUpdateWinners = {
  encode(message: MsgUpdateWinners, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateWinners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateWinners } as MsgUpdateWinners;
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

  fromJSON(object: any): MsgUpdateWinners {
    const message = { ...baseMsgUpdateWinners } as MsgUpdateWinners;
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

  toJSON(message: MsgUpdateWinners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
    message.Winnings !== undefined && (obj.Winnings = message.Winnings);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateWinners>): MsgUpdateWinners {
    const message = { ...baseMsgUpdateWinners } as MsgUpdateWinners;
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

const baseMsgUpdateWinnersResponse: object = {};

export const MsgUpdateWinnersResponse = {
  encode(
    _: MsgUpdateWinnersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateWinnersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateWinnersResponse,
    } as MsgUpdateWinnersResponse;
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

  fromJSON(_: any): MsgUpdateWinnersResponse {
    const message = {
      ...baseMsgUpdateWinnersResponse,
    } as MsgUpdateWinnersResponse;
    return message;
  },

  toJSON(_: MsgUpdateWinnersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateWinnersResponse>
  ): MsgUpdateWinnersResponse {
    const message = {
      ...baseMsgUpdateWinnersResponse,
    } as MsgUpdateWinnersResponse;
    return message;
  },
};

const baseMsgDeleteWinners: object = { creator: "", id: 0 };

export const MsgDeleteWinners = {
  encode(message: MsgDeleteWinners, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteWinners {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteWinners } as MsgDeleteWinners;
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

  fromJSON(object: any): MsgDeleteWinners {
    const message = { ...baseMsgDeleteWinners } as MsgDeleteWinners;
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

  toJSON(message: MsgDeleteWinners): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteWinners>): MsgDeleteWinners {
    const message = { ...baseMsgDeleteWinners } as MsgDeleteWinners;
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

const baseMsgDeleteWinnersResponse: object = {};

export const MsgDeleteWinnersResponse = {
  encode(
    _: MsgDeleteWinnersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteWinnersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteWinnersResponse,
    } as MsgDeleteWinnersResponse;
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

  fromJSON(_: any): MsgDeleteWinnersResponse {
    const message = {
      ...baseMsgDeleteWinnersResponse,
    } as MsgDeleteWinnersResponse;
    return message;
  },

  toJSON(_: MsgDeleteWinnersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteWinnersResponse>
  ): MsgDeleteWinnersResponse {
    const message = {
      ...baseMsgDeleteWinnersResponse,
    } as MsgDeleteWinnersResponse;
    return message;
  },
};

const baseMsgCreateMembers: object = { creator: "", address: "" };

export const MsgCreateMembers = {
  encode(message: MsgCreateMembers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMembers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMembers } as MsgCreateMembers;
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

  fromJSON(object: any): MsgCreateMembers {
    const message = { ...baseMsgCreateMembers } as MsgCreateMembers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMembers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMembers>): MsgCreateMembers {
    const message = { ...baseMsgCreateMembers } as MsgCreateMembers;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgCreateMembersResponse: object = { id: 0 };

export const MsgCreateMembersResponse = {
  encode(
    message: MsgCreateMembersResponse,
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
  ): MsgCreateMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMembersResponse,
    } as MsgCreateMembersResponse;
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

  fromJSON(object: any): MsgCreateMembersResponse {
    const message = {
      ...baseMsgCreateMembersResponse,
    } as MsgCreateMembersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMembersResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMembersResponse>
  ): MsgCreateMembersResponse {
    const message = {
      ...baseMsgCreateMembersResponse,
    } as MsgCreateMembersResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateMembers: object = { creator: "", id: 0, address: "" };

export const MsgUpdateMembers = {
  encode(message: MsgUpdateMembers, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMembers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMembers } as MsgUpdateMembers;
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMembers {
    const message = { ...baseMsgUpdateMembers } as MsgUpdateMembers;
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
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMembers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMembers>): MsgUpdateMembers {
    const message = { ...baseMsgUpdateMembers } as MsgUpdateMembers;
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
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgUpdateMembersResponse: object = {};

export const MsgUpdateMembersResponse = {
  encode(
    _: MsgUpdateMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMembersResponse,
    } as MsgUpdateMembersResponse;
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

  fromJSON(_: any): MsgUpdateMembersResponse {
    const message = {
      ...baseMsgUpdateMembersResponse,
    } as MsgUpdateMembersResponse;
    return message;
  },

  toJSON(_: MsgUpdateMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMembersResponse>
  ): MsgUpdateMembersResponse {
    const message = {
      ...baseMsgUpdateMembersResponse,
    } as MsgUpdateMembersResponse;
    return message;
  },
};

const baseMsgDeleteMembers: object = { creator: "", id: 0 };

export const MsgDeleteMembers = {
  encode(message: MsgDeleteMembers, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMembers {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMembers } as MsgDeleteMembers;
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

  fromJSON(object: any): MsgDeleteMembers {
    const message = { ...baseMsgDeleteMembers } as MsgDeleteMembers;
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

  toJSON(message: MsgDeleteMembers): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMembers>): MsgDeleteMembers {
    const message = { ...baseMsgDeleteMembers } as MsgDeleteMembers;
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

const baseMsgDeleteMembersResponse: object = {};

export const MsgDeleteMembersResponse = {
  encode(
    _: MsgDeleteMembersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMembersResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMembersResponse,
    } as MsgDeleteMembersResponse;
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

  fromJSON(_: any): MsgDeleteMembersResponse {
    const message = {
      ...baseMsgDeleteMembersResponse,
    } as MsgDeleteMembersResponse;
    return message;
  },

  toJSON(_: MsgDeleteMembersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMembersResponse>
  ): MsgDeleteMembersResponse {
    const message = {
      ...baseMsgDeleteMembersResponse,
    } as MsgDeleteMembersResponse;
    return message;
  },
};

const baseMsgCreatePool4Ticket: object = {
  creator: "",
  AddressString: "",
  LambdaValue: "",
};

export const MsgCreatePool4Ticket = {
  encode(
    message: MsgCreatePool4Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool4Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool4Ticket } as MsgCreatePool4Ticket;
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

  fromJSON(object: any): MsgCreatePool4Ticket {
    const message = { ...baseMsgCreatePool4Ticket } as MsgCreatePool4Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePool4Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool4Ticket>): MsgCreatePool4Ticket {
    const message = { ...baseMsgCreatePool4Ticket } as MsgCreatePool4Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgCreatePool4TicketResponse: object = { id: 0 };

export const MsgCreatePool4TicketResponse = {
  encode(
    message: MsgCreatePool4TicketResponse,
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
  ): MsgCreatePool4TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePool4TicketResponse,
    } as MsgCreatePool4TicketResponse;
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

  fromJSON(object: any): MsgCreatePool4TicketResponse {
    const message = {
      ...baseMsgCreatePool4TicketResponse,
    } as MsgCreatePool4TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePool4TicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePool4TicketResponse>
  ): MsgCreatePool4TicketResponse {
    const message = {
      ...baseMsgCreatePool4TicketResponse,
    } as MsgCreatePool4TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool4Ticket: object = {
  creator: "",
  id: 0,
  AddressString: "",
  LambdaValue: "",
};

export const MsgUpdatePool4Ticket = {
  encode(
    message: MsgUpdatePool4Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool4Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool4Ticket } as MsgUpdatePool4Ticket;
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
          message.LambdaValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool4Ticket {
    const message = { ...baseMsgUpdatePool4Ticket } as MsgUpdatePool4Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePool4Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool4Ticket>): MsgUpdatePool4Ticket {
    const message = { ...baseMsgUpdatePool4Ticket } as MsgUpdatePool4Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgUpdatePool4TicketResponse: object = {};

export const MsgUpdatePool4TicketResponse = {
  encode(
    _: MsgUpdatePool4TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePool4TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePool4TicketResponse,
    } as MsgUpdatePool4TicketResponse;
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

  fromJSON(_: any): MsgUpdatePool4TicketResponse {
    const message = {
      ...baseMsgUpdatePool4TicketResponse,
    } as MsgUpdatePool4TicketResponse;
    return message;
  },

  toJSON(_: MsgUpdatePool4TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePool4TicketResponse>
  ): MsgUpdatePool4TicketResponse {
    const message = {
      ...baseMsgUpdatePool4TicketResponse,
    } as MsgUpdatePool4TicketResponse;
    return message;
  },
};

const baseMsgDeletePool4Ticket: object = { creator: "", id: 0 };

export const MsgDeletePool4Ticket = {
  encode(
    message: MsgDeletePool4Ticket,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool4Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool4Ticket } as MsgDeletePool4Ticket;
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

  fromJSON(object: any): MsgDeletePool4Ticket {
    const message = { ...baseMsgDeletePool4Ticket } as MsgDeletePool4Ticket;
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

  toJSON(message: MsgDeletePool4Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool4Ticket>): MsgDeletePool4Ticket {
    const message = { ...baseMsgDeletePool4Ticket } as MsgDeletePool4Ticket;
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

const baseMsgDeletePool4TicketResponse: object = {};

export const MsgDeletePool4TicketResponse = {
  encode(
    _: MsgDeletePool4TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePool4TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePool4TicketResponse,
    } as MsgDeletePool4TicketResponse;
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

  fromJSON(_: any): MsgDeletePool4TicketResponse {
    const message = {
      ...baseMsgDeletePool4TicketResponse,
    } as MsgDeletePool4TicketResponse;
    return message;
  },

  toJSON(_: MsgDeletePool4TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePool4TicketResponse>
  ): MsgDeletePool4TicketResponse {
    const message = {
      ...baseMsgDeletePool4TicketResponse,
    } as MsgDeletePool4TicketResponse;
    return message;
  },
};

const baseMsgCreatePool3Ticket: object = {
  creator: "",
  AddressString: "",
  LambdaValue: "",
};

export const MsgCreatePool3Ticket = {
  encode(
    message: MsgCreatePool3Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool3Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool3Ticket } as MsgCreatePool3Ticket;
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

  fromJSON(object: any): MsgCreatePool3Ticket {
    const message = { ...baseMsgCreatePool3Ticket } as MsgCreatePool3Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePool3Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool3Ticket>): MsgCreatePool3Ticket {
    const message = { ...baseMsgCreatePool3Ticket } as MsgCreatePool3Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgCreatePool3TicketResponse: object = { id: 0 };

export const MsgCreatePool3TicketResponse = {
  encode(
    message: MsgCreatePool3TicketResponse,
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
  ): MsgCreatePool3TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePool3TicketResponse,
    } as MsgCreatePool3TicketResponse;
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

  fromJSON(object: any): MsgCreatePool3TicketResponse {
    const message = {
      ...baseMsgCreatePool3TicketResponse,
    } as MsgCreatePool3TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePool3TicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePool3TicketResponse>
  ): MsgCreatePool3TicketResponse {
    const message = {
      ...baseMsgCreatePool3TicketResponse,
    } as MsgCreatePool3TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool3Ticket: object = {
  creator: "",
  id: 0,
  AddressString: "",
  LambdaValue: "",
};

export const MsgUpdatePool3Ticket = {
  encode(
    message: MsgUpdatePool3Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool3Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool3Ticket } as MsgUpdatePool3Ticket;
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
          message.LambdaValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool3Ticket {
    const message = { ...baseMsgUpdatePool3Ticket } as MsgUpdatePool3Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePool3Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool3Ticket>): MsgUpdatePool3Ticket {
    const message = { ...baseMsgUpdatePool3Ticket } as MsgUpdatePool3Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgUpdatePool3TicketResponse: object = {};

export const MsgUpdatePool3TicketResponse = {
  encode(
    _: MsgUpdatePool3TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePool3TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePool3TicketResponse,
    } as MsgUpdatePool3TicketResponse;
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

  fromJSON(_: any): MsgUpdatePool3TicketResponse {
    const message = {
      ...baseMsgUpdatePool3TicketResponse,
    } as MsgUpdatePool3TicketResponse;
    return message;
  },

  toJSON(_: MsgUpdatePool3TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePool3TicketResponse>
  ): MsgUpdatePool3TicketResponse {
    const message = {
      ...baseMsgUpdatePool3TicketResponse,
    } as MsgUpdatePool3TicketResponse;
    return message;
  },
};

const baseMsgDeletePool3Ticket: object = { creator: "", id: 0 };

export const MsgDeletePool3Ticket = {
  encode(
    message: MsgDeletePool3Ticket,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool3Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool3Ticket } as MsgDeletePool3Ticket;
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

  fromJSON(object: any): MsgDeletePool3Ticket {
    const message = { ...baseMsgDeletePool3Ticket } as MsgDeletePool3Ticket;
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

  toJSON(message: MsgDeletePool3Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool3Ticket>): MsgDeletePool3Ticket {
    const message = { ...baseMsgDeletePool3Ticket } as MsgDeletePool3Ticket;
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

const baseMsgDeletePool3TicketResponse: object = {};

export const MsgDeletePool3TicketResponse = {
  encode(
    _: MsgDeletePool3TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePool3TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePool3TicketResponse,
    } as MsgDeletePool3TicketResponse;
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

  fromJSON(_: any): MsgDeletePool3TicketResponse {
    const message = {
      ...baseMsgDeletePool3TicketResponse,
    } as MsgDeletePool3TicketResponse;
    return message;
  },

  toJSON(_: MsgDeletePool3TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePool3TicketResponse>
  ): MsgDeletePool3TicketResponse {
    const message = {
      ...baseMsgDeletePool3TicketResponse,
    } as MsgDeletePool3TicketResponse;
    return message;
  },
};

const baseMsgCreatePool2Ticket: object = {
  creator: "",
  AddressString: "",
  LambdaValue: "",
};

export const MsgCreatePool2Ticket = {
  encode(
    message: MsgCreatePool2Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool2Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool2Ticket } as MsgCreatePool2Ticket;
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

  fromJSON(object: any): MsgCreatePool2Ticket {
    const message = { ...baseMsgCreatePool2Ticket } as MsgCreatePool2Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePool2Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool2Ticket>): MsgCreatePool2Ticket {
    const message = { ...baseMsgCreatePool2Ticket } as MsgCreatePool2Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgCreatePool2TicketResponse: object = { id: 0 };

export const MsgCreatePool2TicketResponse = {
  encode(
    message: MsgCreatePool2TicketResponse,
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
  ): MsgCreatePool2TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePool2TicketResponse,
    } as MsgCreatePool2TicketResponse;
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

  fromJSON(object: any): MsgCreatePool2TicketResponse {
    const message = {
      ...baseMsgCreatePool2TicketResponse,
    } as MsgCreatePool2TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePool2TicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePool2TicketResponse>
  ): MsgCreatePool2TicketResponse {
    const message = {
      ...baseMsgCreatePool2TicketResponse,
    } as MsgCreatePool2TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool2Ticket: object = {
  creator: "",
  id: 0,
  AddressString: "",
  LambdaValue: "",
};

export const MsgUpdatePool2Ticket = {
  encode(
    message: MsgUpdatePool2Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool2Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool2Ticket } as MsgUpdatePool2Ticket;
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
          message.LambdaValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool2Ticket {
    const message = { ...baseMsgUpdatePool2Ticket } as MsgUpdatePool2Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePool2Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool2Ticket>): MsgUpdatePool2Ticket {
    const message = { ...baseMsgUpdatePool2Ticket } as MsgUpdatePool2Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgUpdatePool2TicketResponse: object = {};

export const MsgUpdatePool2TicketResponse = {
  encode(
    _: MsgUpdatePool2TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePool2TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePool2TicketResponse,
    } as MsgUpdatePool2TicketResponse;
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

  fromJSON(_: any): MsgUpdatePool2TicketResponse {
    const message = {
      ...baseMsgUpdatePool2TicketResponse,
    } as MsgUpdatePool2TicketResponse;
    return message;
  },

  toJSON(_: MsgUpdatePool2TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePool2TicketResponse>
  ): MsgUpdatePool2TicketResponse {
    const message = {
      ...baseMsgUpdatePool2TicketResponse,
    } as MsgUpdatePool2TicketResponse;
    return message;
  },
};

const baseMsgDeletePool2Ticket: object = { creator: "", id: 0 };

export const MsgDeletePool2Ticket = {
  encode(
    message: MsgDeletePool2Ticket,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool2Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool2Ticket } as MsgDeletePool2Ticket;
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

  fromJSON(object: any): MsgDeletePool2Ticket {
    const message = { ...baseMsgDeletePool2Ticket } as MsgDeletePool2Ticket;
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

  toJSON(message: MsgDeletePool2Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool2Ticket>): MsgDeletePool2Ticket {
    const message = { ...baseMsgDeletePool2Ticket } as MsgDeletePool2Ticket;
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

const baseMsgDeletePool2TicketResponse: object = {};

export const MsgDeletePool2TicketResponse = {
  encode(
    _: MsgDeletePool2TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePool2TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePool2TicketResponse,
    } as MsgDeletePool2TicketResponse;
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

  fromJSON(_: any): MsgDeletePool2TicketResponse {
    const message = {
      ...baseMsgDeletePool2TicketResponse,
    } as MsgDeletePool2TicketResponse;
    return message;
  },

  toJSON(_: MsgDeletePool2TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePool2TicketResponse>
  ): MsgDeletePool2TicketResponse {
    const message = {
      ...baseMsgDeletePool2TicketResponse,
    } as MsgDeletePool2TicketResponse;
    return message;
  },
};

const baseMsgCreatePool1Ticket: object = {
  creator: "",
  AddressString: "",
  LambdaValue: "",
};

export const MsgCreatePool1Ticket = {
  encode(
    message: MsgCreatePool1Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool1Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool1Ticket } as MsgCreatePool1Ticket;
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

  fromJSON(object: any): MsgCreatePool1Ticket {
    const message = { ...baseMsgCreatePool1Ticket } as MsgCreatePool1Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePool1Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool1Ticket>): MsgCreatePool1Ticket {
    const message = { ...baseMsgCreatePool1Ticket } as MsgCreatePool1Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgCreatePool1TicketResponse: object = { id: 0 };

export const MsgCreatePool1TicketResponse = {
  encode(
    message: MsgCreatePool1TicketResponse,
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
  ): MsgCreatePool1TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePool1TicketResponse,
    } as MsgCreatePool1TicketResponse;
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

  fromJSON(object: any): MsgCreatePool1TicketResponse {
    const message = {
      ...baseMsgCreatePool1TicketResponse,
    } as MsgCreatePool1TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePool1TicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePool1TicketResponse>
  ): MsgCreatePool1TicketResponse {
    const message = {
      ...baseMsgCreatePool1TicketResponse,
    } as MsgCreatePool1TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool1Ticket: object = {
  creator: "",
  id: 0,
  AddressString: "",
  LambdaValue: "",
};

export const MsgUpdatePool1Ticket = {
  encode(
    message: MsgUpdatePool1Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool1Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool1Ticket } as MsgUpdatePool1Ticket;
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
          message.LambdaValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool1Ticket {
    const message = { ...baseMsgUpdatePool1Ticket } as MsgUpdatePool1Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePool1Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool1Ticket>): MsgUpdatePool1Ticket {
    const message = { ...baseMsgUpdatePool1Ticket } as MsgUpdatePool1Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgUpdatePool1TicketResponse: object = {};

export const MsgUpdatePool1TicketResponse = {
  encode(
    _: MsgUpdatePool1TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePool1TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePool1TicketResponse,
    } as MsgUpdatePool1TicketResponse;
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

  fromJSON(_: any): MsgUpdatePool1TicketResponse {
    const message = {
      ...baseMsgUpdatePool1TicketResponse,
    } as MsgUpdatePool1TicketResponse;
    return message;
  },

  toJSON(_: MsgUpdatePool1TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePool1TicketResponse>
  ): MsgUpdatePool1TicketResponse {
    const message = {
      ...baseMsgUpdatePool1TicketResponse,
    } as MsgUpdatePool1TicketResponse;
    return message;
  },
};

const baseMsgDeletePool1Ticket: object = { creator: "", id: 0 };

export const MsgDeletePool1Ticket = {
  encode(
    message: MsgDeletePool1Ticket,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool1Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool1Ticket } as MsgDeletePool1Ticket;
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

  fromJSON(object: any): MsgDeletePool1Ticket {
    const message = { ...baseMsgDeletePool1Ticket } as MsgDeletePool1Ticket;
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

  toJSON(message: MsgDeletePool1Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool1Ticket>): MsgDeletePool1Ticket {
    const message = { ...baseMsgDeletePool1Ticket } as MsgDeletePool1Ticket;
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

const baseMsgDeletePool1TicketResponse: object = {};

export const MsgDeletePool1TicketResponse = {
  encode(
    _: MsgDeletePool1TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePool1TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePool1TicketResponse,
    } as MsgDeletePool1TicketResponse;
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

  fromJSON(_: any): MsgDeletePool1TicketResponse {
    const message = {
      ...baseMsgDeletePool1TicketResponse,
    } as MsgDeletePool1TicketResponse;
    return message;
  },

  toJSON(_: MsgDeletePool1TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePool1TicketResponse>
  ): MsgDeletePool1TicketResponse {
    const message = {
      ...baseMsgDeletePool1TicketResponse,
    } as MsgDeletePool1TicketResponse;
    return message;
  },
};

const baseMsgCreatePool0Ticket: object = {
  creator: "",
  AddressString: "",
  LambdaValue: "",
};

export const MsgCreatePool0Ticket = {
  encode(
    message: MsgCreatePool0Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool0Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePool0Ticket } as MsgCreatePool0Ticket;
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

  fromJSON(object: any): MsgCreatePool0Ticket {
    const message = { ...baseMsgCreatePool0Ticket } as MsgCreatePool0Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = String(object.AddressString);
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreatePool0Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePool0Ticket>): MsgCreatePool0Ticket {
    const message = { ...baseMsgCreatePool0Ticket } as MsgCreatePool0Ticket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.AddressString !== undefined && object.AddressString !== null) {
      message.AddressString = object.AddressString;
    } else {
      message.AddressString = "";
    }
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgCreatePool0TicketResponse: object = { id: 0 };

export const MsgCreatePool0TicketResponse = {
  encode(
    message: MsgCreatePool0TicketResponse,
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
  ): MsgCreatePool0TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreatePool0TicketResponse,
    } as MsgCreatePool0TicketResponse;
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

  fromJSON(object: any): MsgCreatePool0TicketResponse {
    const message = {
      ...baseMsgCreatePool0TicketResponse,
    } as MsgCreatePool0TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePool0TicketResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePool0TicketResponse>
  ): MsgCreatePool0TicketResponse {
    const message = {
      ...baseMsgCreatePool0TicketResponse,
    } as MsgCreatePool0TicketResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePool0Ticket: object = {
  creator: "",
  id: 0,
  AddressString: "",
  LambdaValue: "",
};

export const MsgUpdatePool0Ticket = {
  encode(
    message: MsgUpdatePool0Ticket,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool0Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePool0Ticket } as MsgUpdatePool0Ticket;
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
          message.LambdaValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePool0Ticket {
    const message = { ...baseMsgUpdatePool0Ticket } as MsgUpdatePool0Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = String(object.LambdaValue);
    } else {
      message.LambdaValue = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePool0Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.AddressString !== undefined &&
      (obj.AddressString = message.AddressString);
    message.LambdaValue !== undefined &&
      (obj.LambdaValue = message.LambdaValue);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePool0Ticket>): MsgUpdatePool0Ticket {
    const message = { ...baseMsgUpdatePool0Ticket } as MsgUpdatePool0Ticket;
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
    if (object.LambdaValue !== undefined && object.LambdaValue !== null) {
      message.LambdaValue = object.LambdaValue;
    } else {
      message.LambdaValue = "";
    }
    return message;
  },
};

const baseMsgUpdatePool0TicketResponse: object = {};

export const MsgUpdatePool0TicketResponse = {
  encode(
    _: MsgUpdatePool0TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdatePool0TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePool0TicketResponse,
    } as MsgUpdatePool0TicketResponse;
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

  fromJSON(_: any): MsgUpdatePool0TicketResponse {
    const message = {
      ...baseMsgUpdatePool0TicketResponse,
    } as MsgUpdatePool0TicketResponse;
    return message;
  },

  toJSON(_: MsgUpdatePool0TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdatePool0TicketResponse>
  ): MsgUpdatePool0TicketResponse {
    const message = {
      ...baseMsgUpdatePool0TicketResponse,
    } as MsgUpdatePool0TicketResponse;
    return message;
  },
};

const baseMsgDeletePool0Ticket: object = { creator: "", id: 0 };

export const MsgDeletePool0Ticket = {
  encode(
    message: MsgDeletePool0Ticket,
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool0Ticket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePool0Ticket } as MsgDeletePool0Ticket;
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

  fromJSON(object: any): MsgDeletePool0Ticket {
    const message = { ...baseMsgDeletePool0Ticket } as MsgDeletePool0Ticket;
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

  toJSON(message: MsgDeletePool0Ticket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePool0Ticket>): MsgDeletePool0Ticket {
    const message = { ...baseMsgDeletePool0Ticket } as MsgDeletePool0Ticket;
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

const baseMsgDeletePool0TicketResponse: object = {};

export const MsgDeletePool0TicketResponse = {
  encode(
    _: MsgDeletePool0TicketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePool0TicketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePool0TicketResponse,
    } as MsgDeletePool0TicketResponse;
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

  fromJSON(_: any): MsgDeletePool0TicketResponse {
    const message = {
      ...baseMsgDeletePool0TicketResponse,
    } as MsgDeletePool0TicketResponse;
    return message;
  },

  toJSON(_: MsgDeletePool0TicketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeletePool0TicketResponse>
  ): MsgDeletePool0TicketResponse {
    const message = {
      ...baseMsgDeletePool0TicketResponse,
    } as MsgDeletePool0TicketResponse;
    return message;
  },
};

const baseMsgCreateJoinPoolAndStakeAsset: object = {
  creator: "",
  PoolNo: "",
  AssetSerial: "",
};

export const MsgCreateJoinPoolAndStakeAsset = {
  encode(
    message: MsgCreateJoinPoolAndStakeAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateJoinPoolAndStakeAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAsset,
    } as MsgCreateJoinPoolAndStakeAsset;
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

  fromJSON(object: any): MsgCreateJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAsset,
    } as MsgCreateJoinPoolAndStakeAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = String(object.PoolNo);
    } else {
      message.PoolNo = "";
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = String(object.AssetSerial);
    } else {
      message.AssetSerial = "";
    }
    return message;
  },

  toJSON(message: MsgCreateJoinPoolAndStakeAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateJoinPoolAndStakeAsset>
  ): MsgCreateJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAsset,
    } as MsgCreateJoinPoolAndStakeAsset;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = object.PoolNo;
    } else {
      message.PoolNo = "";
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = object.AssetSerial;
    } else {
      message.AssetSerial = "";
    }
    return message;
  },
};

const baseMsgCreateJoinPoolAndStakeAssetResponse: object = { id: 0 };

export const MsgCreateJoinPoolAndStakeAssetResponse = {
  encode(
    message: MsgCreateJoinPoolAndStakeAssetResponse,
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
  ): MsgCreateJoinPoolAndStakeAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAssetResponse,
    } as MsgCreateJoinPoolAndStakeAssetResponse;
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

  fromJSON(object: any): MsgCreateJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAssetResponse,
    } as MsgCreateJoinPoolAndStakeAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateJoinPoolAndStakeAssetResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateJoinPoolAndStakeAssetResponse>
  ): MsgCreateJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgCreateJoinPoolAndStakeAssetResponse,
    } as MsgCreateJoinPoolAndStakeAssetResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateJoinPoolAndStakeAsset: object = {
  creator: "",
  id: 0,
  PoolNo: "",
  AssetSerial: "",
};

export const MsgUpdateJoinPoolAndStakeAsset = {
  encode(
    message: MsgUpdateJoinPoolAndStakeAsset,
    writer: Writer = Writer.create()
  ): Writer {
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateJoinPoolAndStakeAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAsset,
    } as MsgUpdateJoinPoolAndStakeAsset;
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

  fromJSON(object: any): MsgUpdateJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAsset,
    } as MsgUpdateJoinPoolAndStakeAsset;
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
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = String(object.PoolNo);
    } else {
      message.PoolNo = "";
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = String(object.AssetSerial);
    } else {
      message.AssetSerial = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateJoinPoolAndStakeAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.PoolNo !== undefined && (obj.PoolNo = message.PoolNo);
    message.AssetSerial !== undefined &&
      (obj.AssetSerial = message.AssetSerial);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateJoinPoolAndStakeAsset>
  ): MsgUpdateJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAsset,
    } as MsgUpdateJoinPoolAndStakeAsset;
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
    if (object.PoolNo !== undefined && object.PoolNo !== null) {
      message.PoolNo = object.PoolNo;
    } else {
      message.PoolNo = "";
    }
    if (object.AssetSerial !== undefined && object.AssetSerial !== null) {
      message.AssetSerial = object.AssetSerial;
    } else {
      message.AssetSerial = "";
    }
    return message;
  },
};

const baseMsgUpdateJoinPoolAndStakeAssetResponse: object = {};

export const MsgUpdateJoinPoolAndStakeAssetResponse = {
  encode(
    _: MsgUpdateJoinPoolAndStakeAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateJoinPoolAndStakeAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
    } as MsgUpdateJoinPoolAndStakeAssetResponse;
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

  fromJSON(_: any): MsgUpdateJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
    } as MsgUpdateJoinPoolAndStakeAssetResponse;
    return message;
  },

  toJSON(_: MsgUpdateJoinPoolAndStakeAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateJoinPoolAndStakeAssetResponse>
  ): MsgUpdateJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgUpdateJoinPoolAndStakeAssetResponse,
    } as MsgUpdateJoinPoolAndStakeAssetResponse;
    return message;
  },
};

const baseMsgDeleteJoinPoolAndStakeAsset: object = { creator: "", id: 0 };

export const MsgDeleteJoinPoolAndStakeAsset = {
  encode(
    message: MsgDeleteJoinPoolAndStakeAsset,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteJoinPoolAndStakeAsset {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAsset,
    } as MsgDeleteJoinPoolAndStakeAsset;
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

  fromJSON(object: any): MsgDeleteJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAsset,
    } as MsgDeleteJoinPoolAndStakeAsset;
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

  toJSON(message: MsgDeleteJoinPoolAndStakeAsset): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteJoinPoolAndStakeAsset>
  ): MsgDeleteJoinPoolAndStakeAsset {
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAsset,
    } as MsgDeleteJoinPoolAndStakeAsset;
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

const baseMsgDeleteJoinPoolAndStakeAssetResponse: object = {};

export const MsgDeleteJoinPoolAndStakeAssetResponse = {
  encode(
    _: MsgDeleteJoinPoolAndStakeAssetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteJoinPoolAndStakeAssetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
    } as MsgDeleteJoinPoolAndStakeAssetResponse;
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

  fromJSON(_: any): MsgDeleteJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
    } as MsgDeleteJoinPoolAndStakeAssetResponse;
    return message;
  },

  toJSON(_: MsgDeleteJoinPoolAndStakeAssetResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteJoinPoolAndStakeAssetResponse>
  ): MsgDeleteJoinPoolAndStakeAssetResponse {
    const message = {
      ...baseMsgDeleteJoinPoolAndStakeAssetResponse,
    } as MsgDeleteJoinPoolAndStakeAssetResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateWinners(request: MsgCreateWinners): Promise<MsgCreateWinnersResponse>;
  UpdateWinners(request: MsgUpdateWinners): Promise<MsgUpdateWinnersResponse>;
  DeleteWinners(request: MsgDeleteWinners): Promise<MsgDeleteWinnersResponse>;
  CreateMembers(request: MsgCreateMembers): Promise<MsgCreateMembersResponse>;
  UpdateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse>;
  DeleteMembers(request: MsgDeleteMembers): Promise<MsgDeleteMembersResponse>;
  CreatePool4Ticket(
    request: MsgCreatePool4Ticket
  ): Promise<MsgCreatePool4TicketResponse>;
  UpdatePool4Ticket(
    request: MsgUpdatePool4Ticket
  ): Promise<MsgUpdatePool4TicketResponse>;
  DeletePool4Ticket(
    request: MsgDeletePool4Ticket
  ): Promise<MsgDeletePool4TicketResponse>;
  CreatePool3Ticket(
    request: MsgCreatePool3Ticket
  ): Promise<MsgCreatePool3TicketResponse>;
  UpdatePool3Ticket(
    request: MsgUpdatePool3Ticket
  ): Promise<MsgUpdatePool3TicketResponse>;
  DeletePool3Ticket(
    request: MsgDeletePool3Ticket
  ): Promise<MsgDeletePool3TicketResponse>;
  CreatePool2Ticket(
    request: MsgCreatePool2Ticket
  ): Promise<MsgCreatePool2TicketResponse>;
  UpdatePool2Ticket(
    request: MsgUpdatePool2Ticket
  ): Promise<MsgUpdatePool2TicketResponse>;
  DeletePool2Ticket(
    request: MsgDeletePool2Ticket
  ): Promise<MsgDeletePool2TicketResponse>;
  CreatePool1Ticket(
    request: MsgCreatePool1Ticket
  ): Promise<MsgCreatePool1TicketResponse>;
  UpdatePool1Ticket(
    request: MsgUpdatePool1Ticket
  ): Promise<MsgUpdatePool1TicketResponse>;
  DeletePool1Ticket(
    request: MsgDeletePool1Ticket
  ): Promise<MsgDeletePool1TicketResponse>;
  CreatePool0Ticket(
    request: MsgCreatePool0Ticket
  ): Promise<MsgCreatePool0TicketResponse>;
  UpdatePool0Ticket(
    request: MsgUpdatePool0Ticket
  ): Promise<MsgUpdatePool0TicketResponse>;
  DeletePool0Ticket(
    request: MsgDeletePool0Ticket
  ): Promise<MsgDeletePool0TicketResponse>;
  CreateJoinPoolAndStakeAsset(
    request: MsgCreateJoinPoolAndStakeAsset
  ): Promise<MsgCreateJoinPoolAndStakeAssetResponse>;
  UpdateJoinPoolAndStakeAsset(
    request: MsgUpdateJoinPoolAndStakeAsset
  ): Promise<MsgUpdateJoinPoolAndStakeAssetResponse>;
  DeleteJoinPoolAndStakeAsset(
    request: MsgDeleteJoinPoolAndStakeAsset
  ): Promise<MsgDeleteJoinPoolAndStakeAssetResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateWinners(request: MsgCreateWinners): Promise<MsgCreateWinnersResponse> {
    const data = MsgCreateWinners.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreateWinners",
      data
    );
    return promise.then((data) =>
      MsgCreateWinnersResponse.decode(new Reader(data))
    );
  }

  UpdateWinners(request: MsgUpdateWinners): Promise<MsgUpdateWinnersResponse> {
    const data = MsgUpdateWinners.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdateWinners",
      data
    );
    return promise.then((data) =>
      MsgUpdateWinnersResponse.decode(new Reader(data))
    );
  }

  DeleteWinners(request: MsgDeleteWinners): Promise<MsgDeleteWinnersResponse> {
    const data = MsgDeleteWinners.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeleteWinners",
      data
    );
    return promise.then((data) =>
      MsgDeleteWinnersResponse.decode(new Reader(data))
    );
  }

  CreateMembers(request: MsgCreateMembers): Promise<MsgCreateMembersResponse> {
    const data = MsgCreateMembers.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreateMembers",
      data
    );
    return promise.then((data) =>
      MsgCreateMembersResponse.decode(new Reader(data))
    );
  }

  UpdateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse> {
    const data = MsgUpdateMembers.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdateMembers",
      data
    );
    return promise.then((data) =>
      MsgUpdateMembersResponse.decode(new Reader(data))
    );
  }

  DeleteMembers(request: MsgDeleteMembers): Promise<MsgDeleteMembersResponse> {
    const data = MsgDeleteMembers.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeleteMembers",
      data
    );
    return promise.then((data) =>
      MsgDeleteMembersResponse.decode(new Reader(data))
    );
  }

  CreatePool4Ticket(
    request: MsgCreatePool4Ticket
  ): Promise<MsgCreatePool4TicketResponse> {
    const data = MsgCreatePool4Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreatePool4Ticket",
      data
    );
    return promise.then((data) =>
      MsgCreatePool4TicketResponse.decode(new Reader(data))
    );
  }

  UpdatePool4Ticket(
    request: MsgUpdatePool4Ticket
  ): Promise<MsgUpdatePool4TicketResponse> {
    const data = MsgUpdatePool4Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdatePool4Ticket",
      data
    );
    return promise.then((data) =>
      MsgUpdatePool4TicketResponse.decode(new Reader(data))
    );
  }

  DeletePool4Ticket(
    request: MsgDeletePool4Ticket
  ): Promise<MsgDeletePool4TicketResponse> {
    const data = MsgDeletePool4Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeletePool4Ticket",
      data
    );
    return promise.then((data) =>
      MsgDeletePool4TicketResponse.decode(new Reader(data))
    );
  }

  CreatePool3Ticket(
    request: MsgCreatePool3Ticket
  ): Promise<MsgCreatePool3TicketResponse> {
    const data = MsgCreatePool3Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreatePool3Ticket",
      data
    );
    return promise.then((data) =>
      MsgCreatePool3TicketResponse.decode(new Reader(data))
    );
  }

  UpdatePool3Ticket(
    request: MsgUpdatePool3Ticket
  ): Promise<MsgUpdatePool3TicketResponse> {
    const data = MsgUpdatePool3Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdatePool3Ticket",
      data
    );
    return promise.then((data) =>
      MsgUpdatePool3TicketResponse.decode(new Reader(data))
    );
  }

  DeletePool3Ticket(
    request: MsgDeletePool3Ticket
  ): Promise<MsgDeletePool3TicketResponse> {
    const data = MsgDeletePool3Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeletePool3Ticket",
      data
    );
    return promise.then((data) =>
      MsgDeletePool3TicketResponse.decode(new Reader(data))
    );
  }

  CreatePool2Ticket(
    request: MsgCreatePool2Ticket
  ): Promise<MsgCreatePool2TicketResponse> {
    const data = MsgCreatePool2Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreatePool2Ticket",
      data
    );
    return promise.then((data) =>
      MsgCreatePool2TicketResponse.decode(new Reader(data))
    );
  }

  UpdatePool2Ticket(
    request: MsgUpdatePool2Ticket
  ): Promise<MsgUpdatePool2TicketResponse> {
    const data = MsgUpdatePool2Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdatePool2Ticket",
      data
    );
    return promise.then((data) =>
      MsgUpdatePool2TicketResponse.decode(new Reader(data))
    );
  }

  DeletePool2Ticket(
    request: MsgDeletePool2Ticket
  ): Promise<MsgDeletePool2TicketResponse> {
    const data = MsgDeletePool2Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeletePool2Ticket",
      data
    );
    return promise.then((data) =>
      MsgDeletePool2TicketResponse.decode(new Reader(data))
    );
  }

  CreatePool1Ticket(
    request: MsgCreatePool1Ticket
  ): Promise<MsgCreatePool1TicketResponse> {
    const data = MsgCreatePool1Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreatePool1Ticket",
      data
    );
    return promise.then((data) =>
      MsgCreatePool1TicketResponse.decode(new Reader(data))
    );
  }

  UpdatePool1Ticket(
    request: MsgUpdatePool1Ticket
  ): Promise<MsgUpdatePool1TicketResponse> {
    const data = MsgUpdatePool1Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdatePool1Ticket",
      data
    );
    return promise.then((data) =>
      MsgUpdatePool1TicketResponse.decode(new Reader(data))
    );
  }

  DeletePool1Ticket(
    request: MsgDeletePool1Ticket
  ): Promise<MsgDeletePool1TicketResponse> {
    const data = MsgDeletePool1Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeletePool1Ticket",
      data
    );
    return promise.then((data) =>
      MsgDeletePool1TicketResponse.decode(new Reader(data))
    );
  }

  CreatePool0Ticket(
    request: MsgCreatePool0Ticket
  ): Promise<MsgCreatePool0TicketResponse> {
    const data = MsgCreatePool0Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreatePool0Ticket",
      data
    );
    return promise.then((data) =>
      MsgCreatePool0TicketResponse.decode(new Reader(data))
    );
  }

  UpdatePool0Ticket(
    request: MsgUpdatePool0Ticket
  ): Promise<MsgUpdatePool0TicketResponse> {
    const data = MsgUpdatePool0Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdatePool0Ticket",
      data
    );
    return promise.then((data) =>
      MsgUpdatePool0TicketResponse.decode(new Reader(data))
    );
  }

  DeletePool0Ticket(
    request: MsgDeletePool0Ticket
  ): Promise<MsgDeletePool0TicketResponse> {
    const data = MsgDeletePool0Ticket.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeletePool0Ticket",
      data
    );
    return promise.then((data) =>
      MsgDeletePool0TicketResponse.decode(new Reader(data))
    );
  }

  CreateJoinPoolAndStakeAsset(
    request: MsgCreateJoinPoolAndStakeAsset
  ): Promise<MsgCreateJoinPoolAndStakeAssetResponse> {
    const data = MsgCreateJoinPoolAndStakeAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "CreateJoinPoolAndStakeAsset",
      data
    );
    return promise.then((data) =>
      MsgCreateJoinPoolAndStakeAssetResponse.decode(new Reader(data))
    );
  }

  UpdateJoinPoolAndStakeAsset(
    request: MsgUpdateJoinPoolAndStakeAsset
  ): Promise<MsgUpdateJoinPoolAndStakeAssetResponse> {
    const data = MsgUpdateJoinPoolAndStakeAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "UpdateJoinPoolAndStakeAsset",
      data
    );
    return promise.then((data) =>
      MsgUpdateJoinPoolAndStakeAssetResponse.decode(new Reader(data))
    );
  }

  DeleteJoinPoolAndStakeAsset(
    request: MsgDeleteJoinPoolAndStakeAsset
  ): Promise<MsgDeleteJoinPoolAndStakeAssetResponse> {
    const data = MsgDeleteJoinPoolAndStakeAsset.encode(request).finish();
    const promise = this.rpc.request(
      "sap200.shiaa3.shiaa3.Msg",
      "DeleteJoinPoolAndStakeAsset",
      data
    );
    return promise.then((data) =>
      MsgDeleteJoinPoolAndStakeAssetResponse.decode(new Reader(data))
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
