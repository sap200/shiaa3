/* eslint-disable */
import { Winners } from "../shiaa3/Winners";
import { Members } from "../shiaa3/Members";
import { Pool4Ticket } from "../shiaa3/Pool4Ticket";
import { Pool3Ticket } from "../shiaa3/Pool3Ticket";
import { Pool2Ticket } from "../shiaa3/Pool2Ticket";
import { Pool1Ticket } from "../shiaa3/Pool1Ticket";
import { Pool0Ticket } from "../shiaa3/Pool0Ticket";
import { JoinPoolAndStakeAsset } from "../shiaa3/JoinPoolAndStakeAsset";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "sap200.shiaa3.shiaa3";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.WinnersList) {
            Winners.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.MembersList) {
            Members.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.Pool4TicketList) {
            Pool4Ticket.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.Pool3TicketList) {
            Pool3Ticket.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.Pool2TicketList) {
            Pool2Ticket.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.Pool1TicketList) {
            Pool1Ticket.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.Pool0TicketList) {
            Pool0Ticket.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.JoinPoolAndStakeAssetList) {
            JoinPoolAndStakeAsset.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.WinnersList = [];
        message.MembersList = [];
        message.Pool4TicketList = [];
        message.Pool3TicketList = [];
        message.Pool2TicketList = [];
        message.Pool1TicketList = [];
        message.Pool0TicketList = [];
        message.JoinPoolAndStakeAssetList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 8:
                    message.WinnersList.push(Winners.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.MembersList.push(Members.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.Pool4TicketList.push(Pool4Ticket.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.Pool3TicketList.push(Pool3Ticket.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Pool2TicketList.push(Pool2Ticket.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.Pool1TicketList.push(Pool1Ticket.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Pool0TicketList.push(Pool0Ticket.decode(reader, reader.uint32()));
                    break;
                case 1:
                    message.JoinPoolAndStakeAssetList.push(JoinPoolAndStakeAsset.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.WinnersList = [];
        message.MembersList = [];
        message.Pool4TicketList = [];
        message.Pool3TicketList = [];
        message.Pool2TicketList = [];
        message.Pool1TicketList = [];
        message.Pool0TicketList = [];
        message.JoinPoolAndStakeAssetList = [];
        if (object.WinnersList !== undefined && object.WinnersList !== null) {
            for (const e of object.WinnersList) {
                message.WinnersList.push(Winners.fromJSON(e));
            }
        }
        if (object.MembersList !== undefined && object.MembersList !== null) {
            for (const e of object.MembersList) {
                message.MembersList.push(Members.fromJSON(e));
            }
        }
        if (object.Pool4TicketList !== undefined &&
            object.Pool4TicketList !== null) {
            for (const e of object.Pool4TicketList) {
                message.Pool4TicketList.push(Pool4Ticket.fromJSON(e));
            }
        }
        if (object.Pool3TicketList !== undefined &&
            object.Pool3TicketList !== null) {
            for (const e of object.Pool3TicketList) {
                message.Pool3TicketList.push(Pool3Ticket.fromJSON(e));
            }
        }
        if (object.Pool2TicketList !== undefined &&
            object.Pool2TicketList !== null) {
            for (const e of object.Pool2TicketList) {
                message.Pool2TicketList.push(Pool2Ticket.fromJSON(e));
            }
        }
        if (object.Pool1TicketList !== undefined &&
            object.Pool1TicketList !== null) {
            for (const e of object.Pool1TicketList) {
                message.Pool1TicketList.push(Pool1Ticket.fromJSON(e));
            }
        }
        if (object.Pool0TicketList !== undefined &&
            object.Pool0TicketList !== null) {
            for (const e of object.Pool0TicketList) {
                message.Pool0TicketList.push(Pool0Ticket.fromJSON(e));
            }
        }
        if (object.JoinPoolAndStakeAssetList !== undefined &&
            object.JoinPoolAndStakeAssetList !== null) {
            for (const e of object.JoinPoolAndStakeAssetList) {
                message.JoinPoolAndStakeAssetList.push(JoinPoolAndStakeAsset.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.WinnersList) {
            obj.WinnersList = message.WinnersList.map((e) => e ? Winners.toJSON(e) : undefined);
        }
        else {
            obj.WinnersList = [];
        }
        if (message.MembersList) {
            obj.MembersList = message.MembersList.map((e) => e ? Members.toJSON(e) : undefined);
        }
        else {
            obj.MembersList = [];
        }
        if (message.Pool4TicketList) {
            obj.Pool4TicketList = message.Pool4TicketList.map((e) => e ? Pool4Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool4TicketList = [];
        }
        if (message.Pool3TicketList) {
            obj.Pool3TicketList = message.Pool3TicketList.map((e) => e ? Pool3Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool3TicketList = [];
        }
        if (message.Pool2TicketList) {
            obj.Pool2TicketList = message.Pool2TicketList.map((e) => e ? Pool2Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool2TicketList = [];
        }
        if (message.Pool1TicketList) {
            obj.Pool1TicketList = message.Pool1TicketList.map((e) => e ? Pool1Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool1TicketList = [];
        }
        if (message.Pool0TicketList) {
            obj.Pool0TicketList = message.Pool0TicketList.map((e) => e ? Pool0Ticket.toJSON(e) : undefined);
        }
        else {
            obj.Pool0TicketList = [];
        }
        if (message.JoinPoolAndStakeAssetList) {
            obj.JoinPoolAndStakeAssetList = message.JoinPoolAndStakeAssetList.map((e) => (e ? JoinPoolAndStakeAsset.toJSON(e) : undefined));
        }
        else {
            obj.JoinPoolAndStakeAssetList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.WinnersList = [];
        message.MembersList = [];
        message.Pool4TicketList = [];
        message.Pool3TicketList = [];
        message.Pool2TicketList = [];
        message.Pool1TicketList = [];
        message.Pool0TicketList = [];
        message.JoinPoolAndStakeAssetList = [];
        if (object.WinnersList !== undefined && object.WinnersList !== null) {
            for (const e of object.WinnersList) {
                message.WinnersList.push(Winners.fromPartial(e));
            }
        }
        if (object.MembersList !== undefined && object.MembersList !== null) {
            for (const e of object.MembersList) {
                message.MembersList.push(Members.fromPartial(e));
            }
        }
        if (object.Pool4TicketList !== undefined &&
            object.Pool4TicketList !== null) {
            for (const e of object.Pool4TicketList) {
                message.Pool4TicketList.push(Pool4Ticket.fromPartial(e));
            }
        }
        if (object.Pool3TicketList !== undefined &&
            object.Pool3TicketList !== null) {
            for (const e of object.Pool3TicketList) {
                message.Pool3TicketList.push(Pool3Ticket.fromPartial(e));
            }
        }
        if (object.Pool2TicketList !== undefined &&
            object.Pool2TicketList !== null) {
            for (const e of object.Pool2TicketList) {
                message.Pool2TicketList.push(Pool2Ticket.fromPartial(e));
            }
        }
        if (object.Pool1TicketList !== undefined &&
            object.Pool1TicketList !== null) {
            for (const e of object.Pool1TicketList) {
                message.Pool1TicketList.push(Pool1Ticket.fromPartial(e));
            }
        }
        if (object.Pool0TicketList !== undefined &&
            object.Pool0TicketList !== null) {
            for (const e of object.Pool0TicketList) {
                message.Pool0TicketList.push(Pool0Ticket.fromPartial(e));
            }
        }
        if (object.JoinPoolAndStakeAssetList !== undefined &&
            object.JoinPoolAndStakeAssetList !== null) {
            for (const e of object.JoinPoolAndStakeAssetList) {
                message.JoinPoolAndStakeAssetList.push(JoinPoolAndStakeAsset.fromPartial(e));
            }
        }
        return message;
    },
};
