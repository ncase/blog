import { TopLevelToken, Liquid, Tag, Emitter, TagToken, Context } from '..';
export default class extends Tag {
    private withVar?;
    private hash;
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown>;
}
