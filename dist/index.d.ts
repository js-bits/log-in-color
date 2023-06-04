export function css(str: string): string[];
export function black(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function red(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function green(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function yellow(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function blue(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function magenta(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function cyan(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export function white(strings: string | TemplateStringsArray, ...rest: unknown[]): void;
export type ColorCodes = (typeof COLOR_CODES)[keyof typeof COLOR_CODES] | '0';
export type ColorNames = keyof typeof COLOR_CODES;
declare namespace COLOR_CODES {
    const black: "30";
    const red: "31";
    const green: "32";
    const yellow: "33";
    const blue: "34";
    const magenta: "35";
    const cyan: "36";
    const white: "37";
}
export {};
