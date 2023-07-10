import { ValueToken, Liquid, Tag, Emitter, Hash, TagToken, TopLevelToken, Context, Template } from '..';
export default class extends Tag {
    variable: string;
    args: Hash;
    templates: Template[];
    collection: ValueToken;
    constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, unknown>;
}
