import { Operators, OperatorHandler } from '../render/operator';
interface TrieLeafNode {
    handler: OperatorHandler;
    end: true;
    needBoundary?: true;
}
export interface Trie {
    [key: string]: Trie | TrieLeafNode;
}
export type TrieNode = Trie | TrieLeafNode;
export declare function createTrie(operators: Operators): Trie;
export {};
