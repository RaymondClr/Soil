import removeFileExt from "./removeFileExt";

/**
 * 获取文件名称，不带后缀名。
 *
 * @param {File} file
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function getPlainFileName(file: File): string {
    return removeFileExt(file.displayName);
}

export default getPlainFileName;
