import { Winners } from "../shiaa3/Winners";
import { Members } from "../shiaa3/Members";
import { Pool4Ticket } from "../shiaa3/Pool4Ticket";
import { Pool3Ticket } from "../shiaa3/Pool3Ticket";
import { Pool2Ticket } from "../shiaa3/Pool2Ticket";
import { Pool1Ticket } from "../shiaa3/Pool1Ticket";
import { Pool0Ticket } from "../shiaa3/Pool0Ticket";
import { JoinPoolAndStakeAsset } from "../shiaa3/JoinPoolAndStakeAsset";
import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "sap200.shiaa3.shiaa3";
/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    WinnersList: Winners[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    MembersList: Members[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    Pool4TicketList: Pool4Ticket[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    Pool3TicketList: Pool3Ticket[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    Pool2TicketList: Pool2Ticket[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    Pool1TicketList: Pool1Ticket[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    Pool0TicketList: Pool0Ticket[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    JoinPoolAndStakeAssetList: JoinPoolAndStakeAsset[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
