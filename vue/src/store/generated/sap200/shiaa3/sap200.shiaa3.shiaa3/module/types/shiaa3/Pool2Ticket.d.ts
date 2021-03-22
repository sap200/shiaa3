import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface Pool2Ticket {
    creator: string;
    id: number;
    AddressString: string;
    LambdaValue: string;
}
export declare const Pool2Ticket: {
    encode(message: Pool2Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pool2Ticket;
    fromJSON(object: any): Pool2Ticket;
    toJSON(message: Pool2Ticket): unknown;
    fromPartial(object: DeepPartial<Pool2Ticket>): Pool2Ticket;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
