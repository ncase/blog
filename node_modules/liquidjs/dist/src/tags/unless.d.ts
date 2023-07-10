import { Liquid, Tag, Value, TopLevelToken, Template, Emitter, Context, TagToken } from '..';
export default class extends Tag {
    branches: {
        value: Value;
        test: (val: any, ctx: Context) => boolean;
        templates: Template[];
    }[];
    elseTemplates: Template[];
    constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, unknown, unknown>;
}
