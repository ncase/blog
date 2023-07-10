import { Hash, ValueToken, Liquid, Tag, Emitter, TagToken, TopLevelToken, Context, Template } from '..';
export default class extends Tag {
    variable: string;
    collection: ValueToken;
    hash: Hash;
    templates: Template[];
    elseTemplates: Template[];
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, void | string, Template[]>;
}
