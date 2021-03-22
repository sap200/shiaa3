import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
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
export interface MsgUpdateWinnersResponse {
}
export interface MsgDeleteWinners {
    creator: string;
    id: number;
}
export interface MsgDeleteWinnersResponse {
}
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
export interface MsgUpdateMembersResponse {
}
export interface MsgDeleteMembers {
    creator: string;
    id: number;
}
export interface MsgDeleteMembersResponse {
}
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
export interface MsgUpdatePool4TicketResponse {
}
export interface MsgDeletePool4Ticket {
    creator: string;
    id: number;
}
export interface MsgDeletePool4TicketResponse {
}
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
export interface MsgUpdatePool3TicketResponse {
}
export interface MsgDeletePool3Ticket {
    creator: string;
    id: number;
}
export interface MsgDeletePool3TicketResponse {
}
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
export interface MsgUpdatePool2TicketResponse {
}
export interface MsgDeletePool2Ticket {
    creator: string;
    id: number;
}
export interface MsgDeletePool2TicketResponse {
}
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
export interface MsgUpdatePool1TicketResponse {
}
export interface MsgDeletePool1Ticket {
    creator: string;
    id: number;
}
export interface MsgDeletePool1TicketResponse {
}
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
export interface MsgUpdatePool0TicketResponse {
}
export interface MsgDeletePool0Ticket {
    creator: string;
    id: number;
}
export interface MsgDeletePool0TicketResponse {
}
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
export interface MsgUpdateJoinPoolAndStakeAssetResponse {
}
export interface MsgDeleteJoinPoolAndStakeAsset {
    creator: string;
    id: number;
}
export interface MsgDeleteJoinPoolAndStakeAssetResponse {
}
export declare const MsgCreateWinners: {
    encode(message: MsgCreateWinners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateWinners;
    fromJSON(object: any): MsgCreateWinners;
    toJSON(message: MsgCreateWinners): unknown;
    fromPartial(object: DeepPartial<MsgCreateWinners>): MsgCreateWinners;
};
export declare const MsgCreateWinnersResponse: {
    encode(message: MsgCreateWinnersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateWinnersResponse;
    fromJSON(object: any): MsgCreateWinnersResponse;
    toJSON(message: MsgCreateWinnersResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateWinnersResponse>): MsgCreateWinnersResponse;
};
export declare const MsgUpdateWinners: {
    encode(message: MsgUpdateWinners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateWinners;
    fromJSON(object: any): MsgUpdateWinners;
    toJSON(message: MsgUpdateWinners): unknown;
    fromPartial(object: DeepPartial<MsgUpdateWinners>): MsgUpdateWinners;
};
export declare const MsgUpdateWinnersResponse: {
    encode(_: MsgUpdateWinnersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateWinnersResponse;
    fromJSON(_: any): MsgUpdateWinnersResponse;
    toJSON(_: MsgUpdateWinnersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateWinnersResponse>): MsgUpdateWinnersResponse;
};
export declare const MsgDeleteWinners: {
    encode(message: MsgDeleteWinners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteWinners;
    fromJSON(object: any): MsgDeleteWinners;
    toJSON(message: MsgDeleteWinners): unknown;
    fromPartial(object: DeepPartial<MsgDeleteWinners>): MsgDeleteWinners;
};
export declare const MsgDeleteWinnersResponse: {
    encode(_: MsgDeleteWinnersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteWinnersResponse;
    fromJSON(_: any): MsgDeleteWinnersResponse;
    toJSON(_: MsgDeleteWinnersResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteWinnersResponse>): MsgDeleteWinnersResponse;
};
export declare const MsgCreateMembers: {
    encode(message: MsgCreateMembers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMembers;
    fromJSON(object: any): MsgCreateMembers;
    toJSON(message: MsgCreateMembers): unknown;
    fromPartial(object: DeepPartial<MsgCreateMembers>): MsgCreateMembers;
};
export declare const MsgCreateMembersResponse: {
    encode(message: MsgCreateMembersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateMembersResponse;
    fromJSON(object: any): MsgCreateMembersResponse;
    toJSON(message: MsgCreateMembersResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateMembersResponse>): MsgCreateMembersResponse;
};
export declare const MsgUpdateMembers: {
    encode(message: MsgUpdateMembers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMembers;
    fromJSON(object: any): MsgUpdateMembers;
    toJSON(message: MsgUpdateMembers): unknown;
    fromPartial(object: DeepPartial<MsgUpdateMembers>): MsgUpdateMembers;
};
export declare const MsgUpdateMembersResponse: {
    encode(_: MsgUpdateMembersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateMembersResponse;
    fromJSON(_: any): MsgUpdateMembersResponse;
    toJSON(_: MsgUpdateMembersResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateMembersResponse>): MsgUpdateMembersResponse;
};
export declare const MsgDeleteMembers: {
    encode(message: MsgDeleteMembers, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMembers;
    fromJSON(object: any): MsgDeleteMembers;
    toJSON(message: MsgDeleteMembers): unknown;
    fromPartial(object: DeepPartial<MsgDeleteMembers>): MsgDeleteMembers;
};
export declare const MsgDeleteMembersResponse: {
    encode(_: MsgDeleteMembersResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteMembersResponse;
    fromJSON(_: any): MsgDeleteMembersResponse;
    toJSON(_: MsgDeleteMembersResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteMembersResponse>): MsgDeleteMembersResponse;
};
export declare const MsgCreatePool4Ticket: {
    encode(message: MsgCreatePool4Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool4Ticket;
    fromJSON(object: any): MsgCreatePool4Ticket;
    toJSON(message: MsgCreatePool4Ticket): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool4Ticket>): MsgCreatePool4Ticket;
};
export declare const MsgCreatePool4TicketResponse: {
    encode(message: MsgCreatePool4TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool4TicketResponse;
    fromJSON(object: any): MsgCreatePool4TicketResponse;
    toJSON(message: MsgCreatePool4TicketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool4TicketResponse>): MsgCreatePool4TicketResponse;
};
export declare const MsgUpdatePool4Ticket: {
    encode(message: MsgUpdatePool4Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool4Ticket;
    fromJSON(object: any): MsgUpdatePool4Ticket;
    toJSON(message: MsgUpdatePool4Ticket): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool4Ticket>): MsgUpdatePool4Ticket;
};
export declare const MsgUpdatePool4TicketResponse: {
    encode(_: MsgUpdatePool4TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool4TicketResponse;
    fromJSON(_: any): MsgUpdatePool4TicketResponse;
    toJSON(_: MsgUpdatePool4TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePool4TicketResponse>): MsgUpdatePool4TicketResponse;
};
export declare const MsgDeletePool4Ticket: {
    encode(message: MsgDeletePool4Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool4Ticket;
    fromJSON(object: any): MsgDeletePool4Ticket;
    toJSON(message: MsgDeletePool4Ticket): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool4Ticket>): MsgDeletePool4Ticket;
};
export declare const MsgDeletePool4TicketResponse: {
    encode(_: MsgDeletePool4TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool4TicketResponse;
    fromJSON(_: any): MsgDeletePool4TicketResponse;
    toJSON(_: MsgDeletePool4TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePool4TicketResponse>): MsgDeletePool4TicketResponse;
};
export declare const MsgCreatePool3Ticket: {
    encode(message: MsgCreatePool3Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool3Ticket;
    fromJSON(object: any): MsgCreatePool3Ticket;
    toJSON(message: MsgCreatePool3Ticket): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool3Ticket>): MsgCreatePool3Ticket;
};
export declare const MsgCreatePool3TicketResponse: {
    encode(message: MsgCreatePool3TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool3TicketResponse;
    fromJSON(object: any): MsgCreatePool3TicketResponse;
    toJSON(message: MsgCreatePool3TicketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool3TicketResponse>): MsgCreatePool3TicketResponse;
};
export declare const MsgUpdatePool3Ticket: {
    encode(message: MsgUpdatePool3Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool3Ticket;
    fromJSON(object: any): MsgUpdatePool3Ticket;
    toJSON(message: MsgUpdatePool3Ticket): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool3Ticket>): MsgUpdatePool3Ticket;
};
export declare const MsgUpdatePool3TicketResponse: {
    encode(_: MsgUpdatePool3TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool3TicketResponse;
    fromJSON(_: any): MsgUpdatePool3TicketResponse;
    toJSON(_: MsgUpdatePool3TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePool3TicketResponse>): MsgUpdatePool3TicketResponse;
};
export declare const MsgDeletePool3Ticket: {
    encode(message: MsgDeletePool3Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool3Ticket;
    fromJSON(object: any): MsgDeletePool3Ticket;
    toJSON(message: MsgDeletePool3Ticket): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool3Ticket>): MsgDeletePool3Ticket;
};
export declare const MsgDeletePool3TicketResponse: {
    encode(_: MsgDeletePool3TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool3TicketResponse;
    fromJSON(_: any): MsgDeletePool3TicketResponse;
    toJSON(_: MsgDeletePool3TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePool3TicketResponse>): MsgDeletePool3TicketResponse;
};
export declare const MsgCreatePool2Ticket: {
    encode(message: MsgCreatePool2Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool2Ticket;
    fromJSON(object: any): MsgCreatePool2Ticket;
    toJSON(message: MsgCreatePool2Ticket): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool2Ticket>): MsgCreatePool2Ticket;
};
export declare const MsgCreatePool2TicketResponse: {
    encode(message: MsgCreatePool2TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool2TicketResponse;
    fromJSON(object: any): MsgCreatePool2TicketResponse;
    toJSON(message: MsgCreatePool2TicketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool2TicketResponse>): MsgCreatePool2TicketResponse;
};
export declare const MsgUpdatePool2Ticket: {
    encode(message: MsgUpdatePool2Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool2Ticket;
    fromJSON(object: any): MsgUpdatePool2Ticket;
    toJSON(message: MsgUpdatePool2Ticket): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool2Ticket>): MsgUpdatePool2Ticket;
};
export declare const MsgUpdatePool2TicketResponse: {
    encode(_: MsgUpdatePool2TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool2TicketResponse;
    fromJSON(_: any): MsgUpdatePool2TicketResponse;
    toJSON(_: MsgUpdatePool2TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePool2TicketResponse>): MsgUpdatePool2TicketResponse;
};
export declare const MsgDeletePool2Ticket: {
    encode(message: MsgDeletePool2Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool2Ticket;
    fromJSON(object: any): MsgDeletePool2Ticket;
    toJSON(message: MsgDeletePool2Ticket): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool2Ticket>): MsgDeletePool2Ticket;
};
export declare const MsgDeletePool2TicketResponse: {
    encode(_: MsgDeletePool2TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool2TicketResponse;
    fromJSON(_: any): MsgDeletePool2TicketResponse;
    toJSON(_: MsgDeletePool2TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePool2TicketResponse>): MsgDeletePool2TicketResponse;
};
export declare const MsgCreatePool1Ticket: {
    encode(message: MsgCreatePool1Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool1Ticket;
    fromJSON(object: any): MsgCreatePool1Ticket;
    toJSON(message: MsgCreatePool1Ticket): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool1Ticket>): MsgCreatePool1Ticket;
};
export declare const MsgCreatePool1TicketResponse: {
    encode(message: MsgCreatePool1TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool1TicketResponse;
    fromJSON(object: any): MsgCreatePool1TicketResponse;
    toJSON(message: MsgCreatePool1TicketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool1TicketResponse>): MsgCreatePool1TicketResponse;
};
export declare const MsgUpdatePool1Ticket: {
    encode(message: MsgUpdatePool1Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool1Ticket;
    fromJSON(object: any): MsgUpdatePool1Ticket;
    toJSON(message: MsgUpdatePool1Ticket): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool1Ticket>): MsgUpdatePool1Ticket;
};
export declare const MsgUpdatePool1TicketResponse: {
    encode(_: MsgUpdatePool1TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool1TicketResponse;
    fromJSON(_: any): MsgUpdatePool1TicketResponse;
    toJSON(_: MsgUpdatePool1TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePool1TicketResponse>): MsgUpdatePool1TicketResponse;
};
export declare const MsgDeletePool1Ticket: {
    encode(message: MsgDeletePool1Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool1Ticket;
    fromJSON(object: any): MsgDeletePool1Ticket;
    toJSON(message: MsgDeletePool1Ticket): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool1Ticket>): MsgDeletePool1Ticket;
};
export declare const MsgDeletePool1TicketResponse: {
    encode(_: MsgDeletePool1TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool1TicketResponse;
    fromJSON(_: any): MsgDeletePool1TicketResponse;
    toJSON(_: MsgDeletePool1TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePool1TicketResponse>): MsgDeletePool1TicketResponse;
};
export declare const MsgCreatePool0Ticket: {
    encode(message: MsgCreatePool0Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool0Ticket;
    fromJSON(object: any): MsgCreatePool0Ticket;
    toJSON(message: MsgCreatePool0Ticket): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool0Ticket>): MsgCreatePool0Ticket;
};
export declare const MsgCreatePool0TicketResponse: {
    encode(message: MsgCreatePool0TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool0TicketResponse;
    fromJSON(object: any): MsgCreatePool0TicketResponse;
    toJSON(message: MsgCreatePool0TicketResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool0TicketResponse>): MsgCreatePool0TicketResponse;
};
export declare const MsgUpdatePool0Ticket: {
    encode(message: MsgUpdatePool0Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool0Ticket;
    fromJSON(object: any): MsgUpdatePool0Ticket;
    toJSON(message: MsgUpdatePool0Ticket): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool0Ticket>): MsgUpdatePool0Ticket;
};
export declare const MsgUpdatePool0TicketResponse: {
    encode(_: MsgUpdatePool0TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool0TicketResponse;
    fromJSON(_: any): MsgUpdatePool0TicketResponse;
    toJSON(_: MsgUpdatePool0TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePool0TicketResponse>): MsgUpdatePool0TicketResponse;
};
export declare const MsgDeletePool0Ticket: {
    encode(message: MsgDeletePool0Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool0Ticket;
    fromJSON(object: any): MsgDeletePool0Ticket;
    toJSON(message: MsgDeletePool0Ticket): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool0Ticket>): MsgDeletePool0Ticket;
};
export declare const MsgDeletePool0TicketResponse: {
    encode(_: MsgDeletePool0TicketResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool0TicketResponse;
    fromJSON(_: any): MsgDeletePool0TicketResponse;
    toJSON(_: MsgDeletePool0TicketResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePool0TicketResponse>): MsgDeletePool0TicketResponse;
};
export declare const MsgCreateJoinPoolAndStakeAsset: {
    encode(message: MsgCreateJoinPoolAndStakeAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateJoinPoolAndStakeAsset;
    fromJSON(object: any): MsgCreateJoinPoolAndStakeAsset;
    toJSON(message: MsgCreateJoinPoolAndStakeAsset): unknown;
    fromPartial(object: DeepPartial<MsgCreateJoinPoolAndStakeAsset>): MsgCreateJoinPoolAndStakeAsset;
};
export declare const MsgCreateJoinPoolAndStakeAssetResponse: {
    encode(message: MsgCreateJoinPoolAndStakeAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateJoinPoolAndStakeAssetResponse;
    fromJSON(object: any): MsgCreateJoinPoolAndStakeAssetResponse;
    toJSON(message: MsgCreateJoinPoolAndStakeAssetResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateJoinPoolAndStakeAssetResponse>): MsgCreateJoinPoolAndStakeAssetResponse;
};
export declare const MsgUpdateJoinPoolAndStakeAsset: {
    encode(message: MsgUpdateJoinPoolAndStakeAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateJoinPoolAndStakeAsset;
    fromJSON(object: any): MsgUpdateJoinPoolAndStakeAsset;
    toJSON(message: MsgUpdateJoinPoolAndStakeAsset): unknown;
    fromPartial(object: DeepPartial<MsgUpdateJoinPoolAndStakeAsset>): MsgUpdateJoinPoolAndStakeAsset;
};
export declare const MsgUpdateJoinPoolAndStakeAssetResponse: {
    encode(_: MsgUpdateJoinPoolAndStakeAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateJoinPoolAndStakeAssetResponse;
    fromJSON(_: any): MsgUpdateJoinPoolAndStakeAssetResponse;
    toJSON(_: MsgUpdateJoinPoolAndStakeAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateJoinPoolAndStakeAssetResponse>): MsgUpdateJoinPoolAndStakeAssetResponse;
};
export declare const MsgDeleteJoinPoolAndStakeAsset: {
    encode(message: MsgDeleteJoinPoolAndStakeAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteJoinPoolAndStakeAsset;
    fromJSON(object: any): MsgDeleteJoinPoolAndStakeAsset;
    toJSON(message: MsgDeleteJoinPoolAndStakeAsset): unknown;
    fromPartial(object: DeepPartial<MsgDeleteJoinPoolAndStakeAsset>): MsgDeleteJoinPoolAndStakeAsset;
};
export declare const MsgDeleteJoinPoolAndStakeAssetResponse: {
    encode(_: MsgDeleteJoinPoolAndStakeAssetResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteJoinPoolAndStakeAssetResponse;
    fromJSON(_: any): MsgDeleteJoinPoolAndStakeAssetResponse;
    toJSON(_: MsgDeleteJoinPoolAndStakeAssetResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteJoinPoolAndStakeAssetResponse>): MsgDeleteJoinPoolAndStakeAssetResponse;
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
    CreatePool4Ticket(request: MsgCreatePool4Ticket): Promise<MsgCreatePool4TicketResponse>;
    UpdatePool4Ticket(request: MsgUpdatePool4Ticket): Promise<MsgUpdatePool4TicketResponse>;
    DeletePool4Ticket(request: MsgDeletePool4Ticket): Promise<MsgDeletePool4TicketResponse>;
    CreatePool3Ticket(request: MsgCreatePool3Ticket): Promise<MsgCreatePool3TicketResponse>;
    UpdatePool3Ticket(request: MsgUpdatePool3Ticket): Promise<MsgUpdatePool3TicketResponse>;
    DeletePool3Ticket(request: MsgDeletePool3Ticket): Promise<MsgDeletePool3TicketResponse>;
    CreatePool2Ticket(request: MsgCreatePool2Ticket): Promise<MsgCreatePool2TicketResponse>;
    UpdatePool2Ticket(request: MsgUpdatePool2Ticket): Promise<MsgUpdatePool2TicketResponse>;
    DeletePool2Ticket(request: MsgDeletePool2Ticket): Promise<MsgDeletePool2TicketResponse>;
    CreatePool1Ticket(request: MsgCreatePool1Ticket): Promise<MsgCreatePool1TicketResponse>;
    UpdatePool1Ticket(request: MsgUpdatePool1Ticket): Promise<MsgUpdatePool1TicketResponse>;
    DeletePool1Ticket(request: MsgDeletePool1Ticket): Promise<MsgDeletePool1TicketResponse>;
    CreatePool0Ticket(request: MsgCreatePool0Ticket): Promise<MsgCreatePool0TicketResponse>;
    UpdatePool0Ticket(request: MsgUpdatePool0Ticket): Promise<MsgUpdatePool0TicketResponse>;
    DeletePool0Ticket(request: MsgDeletePool0Ticket): Promise<MsgDeletePool0TicketResponse>;
    CreateJoinPoolAndStakeAsset(request: MsgCreateJoinPoolAndStakeAsset): Promise<MsgCreateJoinPoolAndStakeAssetResponse>;
    UpdateJoinPoolAndStakeAsset(request: MsgUpdateJoinPoolAndStakeAsset): Promise<MsgUpdateJoinPoolAndStakeAssetResponse>;
    DeleteJoinPoolAndStakeAsset(request: MsgDeleteJoinPoolAndStakeAsset): Promise<MsgDeleteJoinPoolAndStakeAssetResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateWinners(request: MsgCreateWinners): Promise<MsgCreateWinnersResponse>;
    UpdateWinners(request: MsgUpdateWinners): Promise<MsgUpdateWinnersResponse>;
    DeleteWinners(request: MsgDeleteWinners): Promise<MsgDeleteWinnersResponse>;
    CreateMembers(request: MsgCreateMembers): Promise<MsgCreateMembersResponse>;
    UpdateMembers(request: MsgUpdateMembers): Promise<MsgUpdateMembersResponse>;
    DeleteMembers(request: MsgDeleteMembers): Promise<MsgDeleteMembersResponse>;
    CreatePool4Ticket(request: MsgCreatePool4Ticket): Promise<MsgCreatePool4TicketResponse>;
    UpdatePool4Ticket(request: MsgUpdatePool4Ticket): Promise<MsgUpdatePool4TicketResponse>;
    DeletePool4Ticket(request: MsgDeletePool4Ticket): Promise<MsgDeletePool4TicketResponse>;
    CreatePool3Ticket(request: MsgCreatePool3Ticket): Promise<MsgCreatePool3TicketResponse>;
    UpdatePool3Ticket(request: MsgUpdatePool3Ticket): Promise<MsgUpdatePool3TicketResponse>;
    DeletePool3Ticket(request: MsgDeletePool3Ticket): Promise<MsgDeletePool3TicketResponse>;
    CreatePool2Ticket(request: MsgCreatePool2Ticket): Promise<MsgCreatePool2TicketResponse>;
    UpdatePool2Ticket(request: MsgUpdatePool2Ticket): Promise<MsgUpdatePool2TicketResponse>;
    DeletePool2Ticket(request: MsgDeletePool2Ticket): Promise<MsgDeletePool2TicketResponse>;
    CreatePool1Ticket(request: MsgCreatePool1Ticket): Promise<MsgCreatePool1TicketResponse>;
    UpdatePool1Ticket(request: MsgUpdatePool1Ticket): Promise<MsgUpdatePool1TicketResponse>;
    DeletePool1Ticket(request: MsgDeletePool1Ticket): Promise<MsgDeletePool1TicketResponse>;
    CreatePool0Ticket(request: MsgCreatePool0Ticket): Promise<MsgCreatePool0TicketResponse>;
    UpdatePool0Ticket(request: MsgUpdatePool0Ticket): Promise<MsgUpdatePool0TicketResponse>;
    DeletePool0Ticket(request: MsgDeletePool0Ticket): Promise<MsgDeletePool0TicketResponse>;
    CreateJoinPoolAndStakeAsset(request: MsgCreateJoinPoolAndStakeAsset): Promise<MsgCreateJoinPoolAndStakeAssetResponse>;
    UpdateJoinPoolAndStakeAsset(request: MsgUpdateJoinPoolAndStakeAsset): Promise<MsgUpdateJoinPoolAndStakeAssetResponse>;
    DeleteJoinPoolAndStakeAsset(request: MsgDeleteJoinPoolAndStakeAsset): Promise<MsgDeleteJoinPoolAndStakeAssetResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
