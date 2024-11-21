import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";

/**
 * 反向迭代指定本地文件夹中的所有文件夹，不包括文件。
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: Folder, index: number, files: Array<Folder | File>) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode eachFolders}
 * @example
 *
 * ```ts
 * _.eachFoldersRight(_.pathDesktop.fsName, function (file, index) {
 *     _.log(`${index + 1} ${file.fsName}`);
 * });
 * // 结果：桌面日志会记录所有桌面上的文件夹路径，不包括文件。
 * ```
 */
function eachFoldersRight<T extends LooseFolder>(folder: T, iteratee: (file: Folder, index: number, files: Array<Folder | File>) => unknown): T {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
    return folder;
}

export default eachFoldersRight;
