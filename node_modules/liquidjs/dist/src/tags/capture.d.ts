import { Liquid, Tag, Template, Context, TagToken, TopLevelToken } from '..';
export default class extends Tag {
    variable: string;
    templates: Template[];
    constructor(tagToken: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context): Generator<unknown, void, string>;
    private readVariableName;
}
