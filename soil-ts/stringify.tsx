import { jsonEscapes, reEscapedJson, reHasEscapedJson } from "./_internal/_global";
import isArray from "./lodash/basic/isArray";
import forEach from "./lodash/#forEach";
import forOwn from "./lodash/#forOwn";
import has from "./lodash/#has";
import isDate from "./lodash/#isDate";
import isString from "./lodash/#isString";

function concatJson(head: string, partial: Array<string>, gap: string, mind: string, tail: string): string {
    return gap ? head + "\n" + gap + partial.join(",\n" + gap) + "\n" + mind + tail : head + partial.join(",") + tail;
}

function concatJsonKey(string: string): string {
    return reHasEscapedJson.test(string) ? '"' + escapeJsonKey(string) + '"' : '"' + string + '"';
}

function concatSpaceIndent(n: number): string {
    let indent = "",
        index = -1;

    while (++index < n) {
        indent += " ";
    }
    return indent;
}

function escapeJsonKey(string: string): string {
    return string.replace(reEscapedJson, matched => {
        const escaped = has(jsonEscapes, matched) ? jsonEscapes[matched as JsonEscape] : undefined;
        return isString(escaped) ? escaped : hexEncode(matched);
    });
}

function getPrimitiveValue(value: any): any {
    return isDate(value) ? value.toString() : value.valueOf();
}

function hexEncode(string: string): string {
    return "\\u" + ("0000" + string.charCodeAt(0).toString(16)).slice(-4);
}

function stringify(value: any, indent: number | string = 4): string {
    return stringifyValue(value, isString(indent) ? indent : concatSpaceIndent(indent), "");
}

function stringifyArray(array: Array<any>, indent: string, gap: string): string {
    const mind = gap;
    gap += indent;
    let partial: Array<string> = [];
    forEach(array, (value, index) => {
        partial[index] = stringifyValue(value, indent, gap);
    });
    return partial.length === 0 ? "[]" : concatJson("[", partial, gap, mind, "]");
}

function stringifyObject(object: AnyObject, indent: string, gap: string): string {
    const mind = gap;
    gap += indent;
    const colon = gap ? ": " : ":";
    let partial: Array<string> = [];
    forOwn(object, (value, key) => {
        partial.push(concatJsonKey(key) + colon + stringifyValue(value, indent, gap));
    });
    return partial.length === 0 ? "{}" : concatJson("{", partial, gap, mind, "}");
}

function stringifyValue(value: any, indent: string, gap: string): string {
    if (value == null) {
        return "null";
    }
    const primitive = getPrimitiveValue(value);
    switch (typeof primitive) {
        case "string":
            return concatJsonKey(primitive);
        case "number":
            return isFinite(primitive) ? String(primitive) : "null";
        case "boolean":
            return String(primitive);
        case "object":
            return isArray(primitive) ? stringifyArray(primitive, indent, gap) : stringifyObject(primitive, indent, gap);
        case "function":
            return '"' + escapeJsonKey(primitive.toString()) + '"';
        default:
            return "null";
    }
}

export default stringify;
