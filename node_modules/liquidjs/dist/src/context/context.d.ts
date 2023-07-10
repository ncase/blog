import { NormalizedFullOptions, RenderOptions } from '../liquid-options';
import { Scope } from './scope';
type PropertyKey = string | number;
export declare class Context {
    /**
     * insert a Context-level empty scope,
     * for tags like `{% capture %}` `{% assign %}` to operate
     */
    private scopes;
    private registers;
    /**
     * user passed in scope
     * `{% increment %}`, `{% decrement %}` changes this scope,
     * whereas `{% capture %}`, `{% assign %}` only hide this scope
     */
    environments: Scope;
    /**
     * global scope used as fallback for missing variables
     */
    globals: Scope;
    sync: boolean;
    /**
     * The normalized liquid options object
     */
    opts: NormalizedFullOptions;
    /**
     * Throw when accessing undefined variable?
     */
    strictVariables: boolean;
    ownPropertyOnly: boolean;
    constructor(env?: object, opts?: NormalizedFullOptions, renderOptions?: RenderOptions);
    getRegister(key: string): any;
    setRegister(key: string, value: any): any;
    saveRegister(...keys: string[]): [string, any][];
    restoreRegister(keyValues: [string, any][]): void;
    getAll(): Scope;
    /**
     * @deprecated use `_get()` or `getSync()` instead
     */
    get(paths: PropertyKey[]): unknown;
    getSync(paths: PropertyKey[]): unknown;
    _get(paths: PropertyKey[]): IterableIterator<unknown>;
    /**
     * @deprecated use `_get()` instead
     */
    getFromScope(scope: unknown, paths: PropertyKey[] | string): IterableIterator<unknown>;
    _getFromScope(scope: unknown, paths: PropertyKey[] | string): IterableIterator<unknown>;
    push(ctx: object): number;
    pop(): Scope | undefined;
    bottom(): Scope;
    private findScope;
}
export declare function readProperty(obj: Scope, key: PropertyKey, ownPropertyOnly: boolean): any;
export declare function readJSProperty(obj: Scope, key: PropertyKey, ownPropertyOnly: boolean): any;
export {};
