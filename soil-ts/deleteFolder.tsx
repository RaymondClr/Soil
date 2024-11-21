import castFolder from "./_internal/_castFolder";

/**
 * 删除本地指定文件夹
 *
 * @param {LooseFolder} path
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode copyFile}
 * @example
 *
 * ```ts
 * const targetPath = _.createPath(_.pathDesktop.fsName, "Soil");
 * const targetFolder = new Folder(targetPath);
 * if (targetFolder.exists) {
 *     // 警告：删除的文件夹不会进入回收站，删除前请评估安全风险。
 *     // 注意：由于 ExtendScript 的限制，被删除文件夹中存在文件时，则文件夹无法被删除，删除前需要先清空文件夹。
 *     _.deleteFolder(targetFolder);
 * }
 * // 结果：如果桌面存在 Soil 文件夹，会被删除。
 * ```
 */
function deleteFolder(path: LooseFolder): boolean {
    const folder = castFolder(path);
    if (!folder.exists) {
        return true;
    }
    return folder.remove();
}

export default deleteFolder;
