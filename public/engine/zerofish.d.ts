export interface ZerofishOpts {
    locator: (file: string) => string;
    nonce?: string;
    dev?: boolean;
}
export interface ZeroNet {
    key: string;
    fetch: (key?: string) => Promise<Uint8Array>;
}
export type SearchBy = {
    depth: number;
} | {
    movetime: number;
} | {
    nodes: number;
};
export interface FishSearch {
    multipv: number;
    by: SearchBy;
    level?: number;
}
export interface ZeroSearch {
    multipv: number;
    net: ZeroNet;
    nodes?: number;
}
export interface Position {
    fen?: string;
    moves?: string[];
}
export interface Line {
    moves: string[];
    score: number;
}
export interface SearchResult {
    lines: Line[][];
    bestmove: string;
    engine: 'fish' | 'zero';
}
export interface Zerofish {
    goZero(pos: Position, search: ZeroSearch): Promise<SearchResult>;
    goFish(pos: Position, search: FishSearch): Promise<SearchResult>;
    quit(): void;
    stop(): void;
    reset(): void;
}
export default function makeZerofish({ locator, nonce, dev }: ZerofishOpts): Promise<Zerofish>;
