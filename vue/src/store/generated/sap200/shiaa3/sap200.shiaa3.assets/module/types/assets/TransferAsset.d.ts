import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.assets";
export interface TransferAsset {
    creator: string;
    id: number;
    AssetSerial: string;
    Receiver: string;
}
export declare const TransferAsset: {
    encode(message: TransferAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TransferAsset;
    fromJSON(object: any): TransferAsset;
    toJSON(message: TransferAsset): unknown;
    fromPartial(object: DeepPartial<TransferAsset>): TransferAsset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
