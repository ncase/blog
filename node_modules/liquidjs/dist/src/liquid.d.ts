/// <reference types="node" />
import { Context } from './context';
import { TagClass, TagImplOptions, FilterImplOptions, Template } from './template';
import { LookupType } from './fs/loader';
import { Render } from './render';
import { Parser } from './parser';
import { LiquidOptions, NormalizedFullOptions, RenderOptions, RenderFileOptions } from './liquid-options';
export declare class Liquid {
    readonly options: NormalizedFullOptions;
    readonly renderer: Render;
    readonly parser: Parser;
    readonly filters: Record<string, FilterImplOptions>;
    readonly tags: Record<string, TagClass>;
    constructor(opts?: LiquidOptions);
    parse(html: string, filepath?: string): Template[];
    _render(tpl: Template[], scope: Context | object | undefined, renderOptions: RenderOptions): IterableIterator<any>;
    render(tpl: Template[], scope?: object, renderOptions?: RenderOptions): Promise<any>;
    renderSync(tpl: Template[], scope?: object, renderOptions?: RenderOptions): any;
    renderToNodeStream(tpl: Template[], scope?: object, renderOptions?: RenderOptions): NodeJS.ReadableStream;
    _parseAndRender(html: string, scope: Context | object | undefined, renderOptions: RenderOptions): IterableIterator<any>;
    parseAndRender(html: string, scope?: Context | object, renderOptions?: RenderOptions): Promise<any>;
    parseAndRenderSync(html: string, scope?: Context | object, renderOptions?: RenderOptions): any;
    _parsePartialFile(file: string, sync?: boolean, currentFile?: string): Generator<unknown, Template[], string | Template[]>;
    _parseLayoutFile(file: string, sync?: boolean, currentFile?: string): Generator<unknown, Template[], string | Template[]>;
    _parseFile(file: string, sync?: boolean, lookupType?: LookupType, currentFile?: string): Generator<unknown, Template[]>;
    parseFile(file: string, lookupType?: LookupType): Promise<Template[]>;
    parseFileSync(file: string, lookupType?: LookupType): Template[];
    _renderFile(file: string, ctx: Context | object | undefined, renderFileOptions: RenderFileOptions): Generator<any>;
    renderFile(file: string, ctx?: Context | object, renderFileOptions?: RenderFileOptions): Promise<any>;
    renderFileSync(file: string, ctx?: Context | object, renderFileOptions?: RenderFileOptions): any;
    renderFileToNodeStream(file: string, scope?: object, renderOptions?: RenderOptions): Promise<NodeJS.ReadableStream>;
    _evalValue(str: string, scope?: object | Context): IterableIterator<any>;
    evalValue(str: string, scope?: object | Context): Promise<any>;
    evalValueSync(str: string, scope?: object | Context): any;
    registerFilter(name: string, filter: FilterImplOptions): void;
    registerTag(name: string, tag: TagClass | TagImplOptions): void;
    plugin(plugin: (this: Liquid, L: typeof Liquid) => void): void;
    express(): (this: any, filePath: string, ctx: object, callback: (err: Error | null, rendered: string) => void) => void;
}
