/**
 * 解析 json 字符串，同 JSON.parse。
 *
 * @param {string} string
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode stringify}, {@linkcode parseJsonFile}
 * @example
 *
 * ```ts
 * const config: AnyObject = _.parseJson('{"version": 2025, "name": "After Effects"}');
 * _.log(`${config.name} ${config.version}`);
 * // 结果：桌面日志记录字符串 'After Effects 2025'。
 * ```
 */
function parseJson(string: string): any {
    try {
        return Function("", "return (" + string + ")")();
    } catch (error) {
        return null;
    }
}

export default parseJson;
