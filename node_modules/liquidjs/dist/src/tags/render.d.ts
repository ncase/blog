import { TopLevelToken, Liquid, Token, Template, Tokenizer, Emitter, TagToken, Context, Tag } from '..';
export type ParsedFileName = Template[] | Token | string | undefined;
export default class extends Tag {
    private file;
    private currentFile?;
    private hash;
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown>;
}
/**
 * @return null for "none",
 * @return Template[] for quoted with tags and/or filters
 * @return Token for expression (not quoted)
 * @throws TypeError if cannot read next token
 */
export declare function parseFilePath(tokenizer: Tokenizer, liquid: Liquid): ParsedFileName;
export declare function renderFilePath(file: ParsedFileName, ctx: Context, liquid: Liquid): IterableIterator<unknown>;
