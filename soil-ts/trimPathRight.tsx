/**
 * 从右向左修剪路径
 *
 * @param {string} path
 * @param {number} length
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * _.log(_.trimPathRight("path/to/file.aep", 1));
 * // 桌面日志记录 path/to
 * 
 * _.log(_.trimPathRight("path/to/file.aep", 2));
 * // 桌面日志记录 path
 * 
 * _.log(_.trimPathRight("path/to/file.aep", 3));
 * // 桌面日志记录空字符串
 * ```
 */
function trimPathRight(path: string, length: number): string {
    let pathPartial = path.replace(/(\\\\|\\)/g, "/").split("/");
    return pathPartial.slice(0, -length).join("/");
}

export default trimPathRight;
