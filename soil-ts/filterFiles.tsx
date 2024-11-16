import eachFiles from "./eachFiles";

/**
 * 通过谓词过滤文件
 *
 * @param {LooseFolder} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => boolean} predicate
 * @returns {Array<File>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function filterFiles(folder: LooseFolder, predicate: (file: File, index: number, files: Array<Folder | File>) => boolean): Array<File> {
    const result: Array<File> = [];
    eachFiles(folder, (file, index, files) => {
        if (predicate(file, index, files)) {
            result.push(file);
        }
    });
    return result;
}

export default filterFiles;
