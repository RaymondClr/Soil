import { pathDesktop } from "./_internal/_global";
import createPath from "./createPath";
import map from "./lodash/#map";
import isArray from "./lodash/basic/isArray";
import templateString from "./templateString";
import writeFile from "./writeFile";

import forEach from "./lodash/#forEach";
import forOwn from "./lodash/#forOwn";
import isDate from "./lodash/#isDate";
import isString from "./lodash/#isString";

function concatJson(head: string, partial: Array<string>, gap: string, mind: string, tail: string): string {
    return gap ? head + "\n" + gap + partial.join(",\n" + gap) + "\n" + mind + tail : head + partial.join(",") + tail;
}

function concatSpaceIndent(n: number): string {
    let indent = "",
        index = -1;

    while (++index < n) {
        indent += " ";
    }
    return indent;
}

function getPrimitiveValue(value: any): any {
    return isDate(value) ? value.toString() : value.valueOf();
}

function hexEncode(string: string): string {
    return "\\u" + ("0000" + string.charCodeAt(0).toString(16)).slice(-4);
}

function stringifyLog(value: any, indent: number | string = 4): string {
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
        partial.push(key + colon + stringifyValue(value, indent, gap));
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
            return "'" + primitive + "'";
        case "number":
            return String(primitive);
        case "boolean":
            return String(primitive);
        case "object":
            return isArray(primitive) ? stringifyArray(primitive, indent, gap) : stringifyObject(primitive, indent, gap);
        case "function":
            return '"' + primitive.toString() + '"';
        default:
            return String(primitive);
    }
}

function formatArrayItemLog(item: any, index: number) {
    return templateString("${0}: ${1}", String(index), stringifyLog(item));
}

function formatArrayLog(array: Array<any>) {
    const source = array.toSource();
    const title = source.length > 200 ? "[...]" : source;
    return templateString(">(${0})", String(array.length)) + title + "\n" + map(array, formatArrayItemLog).join("\n");
}

/**
 * 调试工具。将任意值换行写入到桌面 soil_log.txt 文件中。
 *
 * @param {*} value
 * @param {?boolean} [rawMode] 启用原始模式，启用后不对输出进行格式化。
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode logJson}
 * @example
 *
 * ```ts
 * _.log("Hello After Effects!");
 * // 桌面日志记录字符串 'Hello After Effects!'。
 *
 * _.log(1);
 * // 桌面日志记录字符串 '1'。
 *
 * _.log([1, 2, 3]);
 * // 桌面日志换行记录字符串 '1', '2', '3'。
 *
 * _.log([1, 2, 3], true);
 * // 桌面日志记录字符串 '1', '2', '3'。
 * ```
 */
function log(value: any, rawMode?: boolean): string {
    const content = !rawMode && isArray(value) ? formatArrayLog(value) : stringifyLog(value);
    const logFile = createPath(pathDesktop.toString(), "soil_log.txt");
    writeFile(logFile, content + "\n", undefined, "a");
    return content;
}

export default log;
