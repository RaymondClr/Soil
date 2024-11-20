/**
 * 移除文件名后缀
 *
 * @param {string} fileName
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see getPlainFileName
 * @example
 *
 * ```ts
 * _.log(_.removeFileExt("project.aep"));
 * // 结果：桌面日志记录 project。
 *
 * _.log(_.removeFileExt("image.001.exr"));
 * // 结果：桌面日志记录 image.001
 * ```
 */
function removeFileExt(fileName: string): string {
    return fileName.replace(/\.[^\.]+$/, "");
}

export default removeFileExt;
