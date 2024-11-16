import castFile from "./_internal/_castFile";

/**
 * 移动文件
 *
 * @param {LooseFile} path
 * @param {string} newPath
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function moveFile(path: LooseFile, newPath: string): boolean {
    const file = castFile(path);
    return file.exists ? false : file.rename(newPath);
}

export default moveFile;
