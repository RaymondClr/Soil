import eachFiles from "./eachFiles";

/**
 * 通过谓词映射文件
 *
 * @template T
 * @param {LooseFolder} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => T} iteratee
 * @returns {Array<T>}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode filterFiles}
 * @example
 *
 * ```ts
 * _.log(_.mapFiles(_.pathDesktop.fsName, (file) => file.displayName));
 * // 结果：桌面日志会记录所有桌面上的文件名称，不包括文件夹。
 *
 * _.log(_.mapFiles(_.pathDesktop.fsName, (file) => file.fsName));
 * // 结果：桌面日志会记录所有桌面上的文件路径，不包括文件夹。
 * ```
 */
function mapFiles<T>(folder: LooseFolder, iteratee: (file: File, index: number, files: Array<Folder | File>) => T): Array<T> {
    const result: Array<T> = [];
    eachFiles(folder, (file, index, files) => {
        result[index] = iteratee(file, index, files);
    });
    return result;
}

export default mapFiles;
