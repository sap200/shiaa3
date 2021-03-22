import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface Members {
    creator: string;
    id: number;
    address: string;
}
export declare const Members: {
    encode(message: Members, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Members;
    fromJSON(object: any): Members;
    toJSON(message: Members): unknown;
    fromPartial(object: DeepPartial<Members>): Members;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
