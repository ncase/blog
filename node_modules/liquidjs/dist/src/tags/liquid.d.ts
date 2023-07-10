import { Template, Emitter, Liquid, TopLevelToken, TagToken, Context, Tag } from '..';
export default class extends Tag {
    templates: Template[];
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown>;
}
