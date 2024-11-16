import isWindowsOs from "./isWindowsOs";

/**
 * Mac 操作系统谓词
 *
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isMacOs(): boolean {
    return !isWindowsOs();
}

export default isMacOs;
