import { Context } from '../context';
export type UnaryOperatorHandler = (operand: any, ctx: Context) => boolean;
export type BinaryOperatorHandler = (lhs: any, rhs: any, ctx: Context) => boolean;
export type OperatorHandler = UnaryOperatorHandler | BinaryOperatorHandler;
export type Operators = Record<string, OperatorHandler>;
export declare const defaultOperators: Operators;
