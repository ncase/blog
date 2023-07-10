import { Tag, Liquid, TopLevelToken, Emitter, TagToken, Context } from '..';
export default class extends Tag {
    private variable;
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(context: Context, emitter: Emitter): void;
}
