import castFile from "./_internal/_castFile";

/**
 * 删除指定路径的文件
 *
 * @param {LooseFile} path
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see copyFile, moveFile
 * @example
 *
 * ```ts
 * const targetPath = _.createPath(_.pathDesktop.fsName, "note.txt");
 * const targetFile = new File(targetPath);
 * if (targetFile.exists) {
 *     // 警告：删除的文件不会进入回收站，删除前请评估文件安全风险。
 *     _.deleteFile(targetFile);
 * }
 * // 结果：如果桌面存在 note.txt 文件，会被删除。
 * ```
 */
function deleteFile(path: LooseFile): boolean {
    const file = castFile(path);
    if (!file.exists) {
        return true;
    }
    return file.remove();
}

export default deleteFile;
