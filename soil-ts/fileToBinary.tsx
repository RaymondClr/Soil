import readFile from "./readFile";

/**
 * 文件转二进制 Binary
 *
 * @param {LooseFile} file
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const imagePath = _.createPath(_.pathDesktop.fsName, "image.png");
 * _.log(_.fileToBinary(imagePath));
 * // 结果：桌面日志会记录桌面上 image 图片的二进制数据。
 * ```
 */
function fileToBinary(file: LooseFile): string {
    const content = readFile(file, "binary");
    return content === null ? "" : content.toSource();
}

export default fileToBinary;
