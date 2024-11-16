/**
 * 获取当前 Ae 的安装路径
 *
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function getAppPath(): string {
    return BridgeTalk.getAppPath("aftereffects");
}

export default getAppPath;
