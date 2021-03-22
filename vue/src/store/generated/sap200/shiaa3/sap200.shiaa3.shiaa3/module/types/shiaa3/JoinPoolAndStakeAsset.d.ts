import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface JoinPoolAndStakeAsset {
    creator: string;
    id: number;
    PoolNo: string;
    AssetSerial: string;
}
export declare const JoinPoolAndStakeAsset: {
    encode(message: JoinPoolAndStakeAsset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): JoinPoolAndStakeAsset;
    fromJSON(object: any): JoinPoolAndStakeAsset;
    toJSON(message: JoinPoolAndStakeAsset): unknown;
    fromPartial(object: DeepPartial<JoinPoolAndStakeAsset>): JoinPoolAndStakeAsset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
