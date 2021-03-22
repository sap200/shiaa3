import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.assets";
export interface SentAsset {
    creator: string;
    id: number;
    AssetSerial: string;
    Receiver: string;
    TargetChain: string;
}
export declare const SentAsset: {
    encode(message: SentAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SentAsset;
    fromJSON(object: any): SentAsset;
    toJSON(message: SentAsset): unknown;
    fromPartial(object: DeepPartial<SentAsset>): SentAsset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
