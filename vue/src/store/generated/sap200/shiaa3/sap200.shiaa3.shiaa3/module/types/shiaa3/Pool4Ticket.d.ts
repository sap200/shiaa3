import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface Pool4Ticket {
    creator: string;
    id: number;
    AddressString: string;
    LambdaValue: string;
}
export declare const Pool4Ticket: {
    encode(message: Pool4Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pool4Ticket;
    fromJSON(object: any): Pool4Ticket;
    toJSON(message: Pool4Ticket): unknown;
    fromPartial(object: DeepPartial<Pool4Ticket>): Pool4Ticket;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
