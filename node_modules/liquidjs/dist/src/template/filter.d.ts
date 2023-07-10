import { Context } from '../context';
import { FilterImplOptions } from './filter-impl-options';
import { FilterArg } from '../parser/filter-arg';
import { Liquid } from '../liquid';
export declare class Filter {
    name: string;
    args: FilterArg[];
    readonly raw: boolean;
    private handler;
    private liquid;
    constructor(name: string, options: FilterImplOptions | undefined, args: FilterArg[], liquid: Liquid);
    render(value: any, context: Context): IterableIterator<unknown>;
}
