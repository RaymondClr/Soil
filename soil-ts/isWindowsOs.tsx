/**
 * Windows 操作系统谓词
 *
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isWindowsOs(): boolean {
    return /Windows/.test($.os);
}

export default isWindowsOs;
