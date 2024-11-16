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
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function mapFiles<T>(folder: LooseFolder, iteratee: (file: File, index: number, files: Array<Folder | File>) => T): Array<T> {
    const result: Array<T> = [];
    eachFiles(folder, (file, index, files) => {
        result[index] = iteratee(file, index, files);
    });
    return result;
}

export default mapFiles;
