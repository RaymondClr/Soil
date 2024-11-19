import forEachRight from "./lodash/#forEachRight";
import getFiles from "./_internal/_getFiles";
import isFile from "./isFile";

/**
 * 反向迭代指定文件夹路径中的所有文件，不包括文件夹。
 *
 * @template {LooseFolder} T
 * @param {T} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachFiles, mapFiles
 * @example
 *
 * ```ts
 * _.eachFilesRight(_.pathDesktop.fsName, function (file, index) {
 *     _.log(`${index + 1} ${file.fsName}`);
 * });
 * // 结果：桌面日志会记录所有桌面上的文件路径，不包括文件夹。
 * ```
 */
function eachFilesRight<T extends LooseFolder>(folder: T, iteratee: (file: File, index: number, files: Array<Folder | File>) => unknown): T {
    let resIndex = 0;
    forEachRight(getFiles(folder), (unknownFile, index, files) => {
        if (isFile(unknownFile)) {
            if (iteratee(unknownFile, resIndex++, files) === false) {
                return false;
            }
        }
    });
    return folder;
}

export default eachFilesRight;
