import { Liquid, Tag, Value, Emitter, TagToken, TopLevelToken, Context, Template } from '..';
export default class extends Tag {
    branches: {
        value: Value;
        templates: Template[];
    }[];
    elseTemplates: Template[];
    constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void, string>;
}
