import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.assets";
export interface Asset {
    creator: string;
    id: number;
    Serial: string;
    Name: string;
    AssetType: number;
    Tokens: number;
    Owner: string;
}
export declare const Asset: {
    encode(message: Asset, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    fromPartial(object: DeepPartial<Asset>): Asset;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
