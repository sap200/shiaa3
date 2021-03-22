import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.assets";
export interface AssetsPacketData {
    noData: NoData | undefined;
    /** this line is used by starport scaffolding # ibc/packet/proto/field */
    IbcAssetPacket: IbcAssetPacketData | undefined;
}
export interface NoData {
}
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
export declare const AssetsPacketData: {
    encode(message: AssetsPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): AssetsPacketData;
    fromJSON(object: any): AssetsPacketData;
    toJSON(message: AssetsPacketData): unknown;
    fromPartial(object: DeepPartial<AssetsPacketData>): AssetsPacketData;
};
export declare const NoData: {
    encode(_: NoData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): NoData;
    fromJSON(_: any): NoData;
    toJSON(_: NoData): unknown;
    fromPartial(_: DeepPartial<NoData>): NoData;
};
export declare const IbcAssetPacketData: {
    encode(message: IbcAssetPacketData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcAssetPacketData;
    fromJSON(object: any): IbcAssetPacketData;
    toJSON(message: IbcAssetPacketData): unknown;
    fromPartial(object: DeepPartial<IbcAssetPacketData>): IbcAssetPacketData;
};
export declare const IbcAssetPacketAck: {
    encode(message: IbcAssetPacketAck, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): IbcAssetPacketAck;
    fromJSON(object: any): IbcAssetPacketAck;
    toJSON(message: IbcAssetPacketAck): unknown;
    fromPartial(object: DeepPartial<IbcAssetPacketAck>): IbcAssetPacketAck;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
