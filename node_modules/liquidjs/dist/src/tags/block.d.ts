import { Liquid, TagToken, TopLevelToken, Template, Context, Emitter, Tag } from '..';
export default class extends Tag {
    block: string;
    templates: Template[];
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<any, void, unknown>;
    private getBlockRender;
}
