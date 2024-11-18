import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";

/**
 * 迭代指定本地文件夹中的所有文件夹，不包括文件。
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: Folder, index: number, files: Array<Folder | File>) => boolean | void} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachFoldersRight
 * @example
 *
 * ```ts
 * _.eachFolders(_.pathDesktop.fsName, function (file, index) {
 *     _.log(`${index + 1} ${file.fsName}`);
 * });
 * // 结果：桌面日志会记录所有桌面上的文件夹路径，不包括文件。
 * ```
 */
function eachFolders<T extends LooseFolder>(folder: T, iteratee: (file: Folder, index: number, files: Array<Folder | File>) => boolean | void): T {
    let resIndex = 0;
    forEach(getFiles(folder), (unknownFile, index, files) => {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
    return folder;
}

export default eachFolders;
