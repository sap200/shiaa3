import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
export interface Pool1Ticket {
    creator: string;
    id: number;
    AddressString: string;
    LambdaValue: string;
}
export declare const Pool1Ticket: {
    encode(message: Pool1Ticket, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Pool1Ticket;
    fromJSON(object: any): Pool1Ticket;
    toJSON(message: Pool1Ticket): unknown;
    fromPartial(object: DeepPartial<Pool1Ticket>): Pool1Ticket;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
