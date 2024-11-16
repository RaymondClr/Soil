import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

/**
 * 反向迭代指定本地文件夹中的所有文件
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see eachFiles
 * @example
 * foo(param)
 * // => result
 */
function eachFilesRight<T extends LooseFolder>(folder: T, iteratee: (file: File, index: number, files: Array<Folder | File>) => boolean | void): boolean | void {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFilesRight;
