import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

/**
 * 迭代指定本地文件夹中的所有文件
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see eachFilesRight
 * @example 
 * foo(param)
 * // => result
 */
function eachFiles<T extends LooseFolder>(folder: T, iteratee: (file: File, index: number, files: Array<Folder | File>) => boolean | void): (boolean | void) {
    let resIndex = 0;
    forEach(getFiles(folder), (unknownFile, index, files) => {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
}

export default eachFiles;
