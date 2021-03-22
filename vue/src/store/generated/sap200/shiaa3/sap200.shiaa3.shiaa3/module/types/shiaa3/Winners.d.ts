import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface Winners {
    creator: string;
    id: number;
    AddressString: string;
    PoolNo: string;
    Winnings: string;
}
export declare const Winners: {
    encode(message: Winners, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Winners;
    fromJSON(object: any): Winners;
    toJSON(message: Winners): unknown;
    fromPartial(object: DeepPartial<Winners>): Winners;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
