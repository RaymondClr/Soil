import castFile from "./_internal/_castFile";

/**
 * 复制本地文件
 *
 * @param {LooseFile} sourceFile 原文件路径
 * @param {LooseFile} newPath 新文件路径
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const projectFile = app.project.file;
 * // 注意：未保存的工程文件返回 null。
 * if (_.isFile(projectFile)) {
 *     const newPath = _.createPath(_.pathDesktop.fsName, projectFile.displayName);
 *     _.copyFile(projectFile, newPath);
 * }
 * // 结果：当前 Ae 工程文件被拷贝至桌面。
 * ```
 */
function copyFile(sourceFile: LooseFile, newPath: LooseFile): boolean {
    const source = castFile(sourceFile);
    if (!source.exists) {
        return false;
    }
    const target = castFile(newPath);
    if (source.fullName === target.fullName) {
        return false;
    }
    return source.copy(target.fsName);
}

export default copyFile;
