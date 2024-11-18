import forEach from "./lodash/#forEach";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

/**
 * 迭代指定文件夹路径中的所有文件，不包括文件夹。
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => boolean | void} iteratee
 * @returns {(boolean | void) => void)}
 * @since 0.1.0
 * @category Soil
 * @see eachFilesRight, mapFiles
 * @example
 *
 * ```ts
 * _.eachFiles(_.pathDesktop.fsName, function (file, index) {
 *     _.log(`${index + 1} ${file.fsName}`);
 * });
 * // 结果：桌面日志会记录所有桌面上的文件路径，不包括文件夹。
 * ```
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
