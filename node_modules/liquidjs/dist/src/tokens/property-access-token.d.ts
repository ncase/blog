import { Token } from './token';
import { IdentifierToken } from './identifier-token';
import { QuotedToken } from './quoted-token';
export declare class PropertyAccessToken extends Token {
    variable: IdentifierToken | QuotedToken;
    props: (IdentifierToken | QuotedToken | PropertyAccessToken)[];
    propertyName: string;
    constructor(variable: IdentifierToken | QuotedToken, props: (IdentifierToken | QuotedToken | PropertyAccessToken)[], end: number);
}
