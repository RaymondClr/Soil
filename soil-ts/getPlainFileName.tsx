import removeFileExt from "./removeFileExt";

/**
 * 从文件 File 实例中获取文件名称，不带后缀名。如果只是去除字符串中包含的后缀名，应当使用 removeFileExt。
 *
 * @param {File} file
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see removeFileExt
 * @example
 *
 * ```ts
 * const projectFile = app.project.file;
 * // 注意：未保存的工程文件返回 null。
 * if (_.isFile(projectFile)) {
 *     const fileName = _.getPlainFileName(projectFile);
 *     _.log(fileName);
 * }
 * // 结果：桌面日志会记录移除后缀名的文件名（不包含路径，只有文件名）。
 * ```
 */
function getPlainFileName(file: File): string {
    return removeFileExt(file.displayName);
}

export default getPlainFileName;
