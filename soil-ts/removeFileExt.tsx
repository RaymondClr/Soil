/**
 * 移除文件名后缀
 *
 * @param {string} fileName
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function removeFileExt(fileName: string): string {
    return fileName.replace(/\.[^\.]+$/, "");
}

export default removeFileExt;
