import { nativeSlice } from "./lodash/basic/_global";
import { reTemplateString } from "./_internal/_global";

/**
 * 模板字符串，Extend Script 的兼容版本。
 *
 * @param {string} string
 * @param {...Array<PropertyName>} rest
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * _.log(_.templateString("${0}-${1}-${2}", "a", "b", "c"));
 * // 桌面日志记录 a-b-c
 * 
 * _.log(_.templateString("${0}${1}${0}${1}", 0, 1));
 * // 桌面日志记录 0101
 * ```
 */
function templateString(string: string, ...rest: Array<PropertyName>): string {
    const values = nativeSlice.call(arguments, 1) as Array<PropertyName>;
    return string.replace(reTemplateString, (matched, $1) => values[Number($1)]);
}

export default templateString;
