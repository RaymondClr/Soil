/**
 * 解析 json 字符串，同 JSON.parse。
 *
 * @param {string} string
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see parseJsonFile
 * @example
 * foo(param)
 * // => result
 */
function parseJson(string: string): any {
    try {
        return Function("", "return (" + string + ")")();
    } catch (error) {
        return null;
    }
}

export default parseJson;
