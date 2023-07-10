import { Context } from '../context/context';
import { Token } from '../tokens/token';
type HashValueTokens = Record<string, Token | undefined>;
/**
 * Key-Value Pairs Representing Tag Arguments
 * Example:
 *    For the markup `, foo:'bar', coo:2 reversed %}`,
 *    hash['foo'] === 'bar'
 *    hash['coo'] === 2
 *    hash['reversed'] === undefined
 */
export declare class Hash {
    hash: HashValueTokens;
    constructor(markup: string, jekyllStyle?: boolean);
    render(ctx: Context): Generator<unknown, Record<string, any>, unknown>;
}
export {};
