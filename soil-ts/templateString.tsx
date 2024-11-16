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
 * foo(param)
 * // => result
 */
function templateString(string: string, ...rest: Array<PropertyName>): string {
    const values = nativeSlice.call(arguments, 1) as Array<PropertyName>;
    return string.replace(reTemplateString, (matched, $1) => values[Number($1)]);
}

export default templateString;
