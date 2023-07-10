import { LiquidDate } from './liquid-date';
/**
 * A date implementation with timezone info, just like Ruby date
 *
 * Implementation:
 * - create a Date offset by it's timezone difference, avoiding overriding a bunch of methods
 * - rewrite getTimezoneOffset() to trick strftime
 */
export declare class TimezoneDate implements LiquidDate {
    private timezoneOffset;
    private date;
    private displayDate;
    constructor(init: string | number | Date | TimezoneDate, timezoneOffset: number);
    getTime(): number;
    getMilliseconds(): number;
    getSeconds(): number;
    getMinutes(): number;
    getHours(): number;
    getDay(): number;
    getDate(): number;
    getMonth(): number;
    getFullYear(): number;
    toLocaleString(locale?: string, init?: any): string;
    toLocaleTimeString(locale?: string): string;
    toLocaleDateString(locale?: string): string;
    getTimezoneOffset(): number;
    /**
     * Create a Date object fixed to it's declared Timezone. Both
     * - 2021-08-06T02:29:00.000Z and
     * - 2021-08-06T02:29:00.000+08:00
     * will always be displayed as
     * - 2021-08-06 02:29:00
     * regardless timezoneOffset in JavaScript realm
     *
     * The implementation hack:
     * Instead of calling `.getMonth()`/`.getUTCMonth()` respect to `preserveTimezones`,
     * we create a different Date to trick strftime, it's both simpler and more performant.
     * Given that a template is expected to be parsed fewer times than rendered.
     */
    static createDateFixedToTimezone(dateString: string): LiquidDate;
}
