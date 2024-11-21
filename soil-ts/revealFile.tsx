import castFile from "./_internal/_castFile";
import castFolder from "./_internal/_castFolder";

/**
 * 显示本地文件
 *
 * @param {LooseFile} value
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode revealFolder}
 * @example
 *
 * ```ts
 * const projectPath = app.project.file;
 * if (projectPath) {
 *     _.revealFile(projectPath);
 * }
 * // 结果：当前 Ae 工程文件被保存的前提下，资源管理器会打开工程文件所在文件夹。
 * ```
 */
function revealFile(value: LooseFile): boolean {
    const file = castFile(value);
    if (!file.exists) {
        return false;
    }
    const folder = castFolder(file.path);
    return folder.execute();
}

export default revealFile;
