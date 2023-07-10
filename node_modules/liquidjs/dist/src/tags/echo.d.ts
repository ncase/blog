import { Liquid, TopLevelToken, Emitter, TagToken, Context, Tag } from '..';
export default class extends Tag {
    private value?;
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown>;
}
