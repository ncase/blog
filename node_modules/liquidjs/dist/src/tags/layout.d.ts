import { Template, Liquid, Tag, Emitter, Hash, TagToken, TopLevelToken, Context } from '..';
import { ParsedFileName } from './render';
export default class extends Tag {
    args: Hash;
    templates: Template[];
    file?: ParsedFileName;
    constructor(token: TagToken, remainTokens: TopLevelToken[], liquid: Liquid);
    render(ctx: Context, emitter: Emitter): Generator<unknown, unknown, unknown>;
}
