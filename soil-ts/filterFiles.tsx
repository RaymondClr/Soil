import eachFiles from "./eachFiles";

/**
 * 通过谓词过滤文件
 *
 * @param {LooseFolder} folder
 * @param {(file: File, index: number, files: Array<Folder | File>) => boolean} predicate
 * @returns {Array<File>}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode mapFiles}
 * @example
 *
 * ```ts
 * _.log(_.filterFiles(_.pathDesktop.fsName, (file) => file.displayName[0] === "G"));
 * // 结果：桌面日志会记录所有桌面上以大写 G 开头的文件路径，不包括文件夹。
 * ```
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
