import { identify } from '../util/underscore';
import { FilterImpl } from '../template';
export declare function Default<T1 extends boolean, T2>(this: FilterImpl, value: T1, defaultValue: T2, ...args: Array<[string, any]>): T1 | T2;
export declare function json(value: any, space?: number): string;
export declare const raw: {
    raw: boolean;
    handler: typeof identify;
};
