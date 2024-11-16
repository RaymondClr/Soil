import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFolder from "./isFolder";

/**
 * 反向迭代指定本地文件夹中的所有文件夹
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: Folder, index: number, files: Array<Folder | File>) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see eachFolders
 * @example
 * foo(param)
 * // => result
 */
function eachFoldersRight<T extends LooseFolder>(folder: T, iteratee: (file: Folder, index: number, files: Array<Folder | File>) => boolean | void): boolean | void {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFolder(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFoldersRight;
