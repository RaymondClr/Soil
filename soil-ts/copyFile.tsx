import castFile from "./_internal/_castFile";

/**
 * 复制本地文件
 *
 * @param {LooseFile} sourceFile
 * @param {LooseFile} newPath
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function copyFile(sourceFile: LooseFile, newPath: LooseFile): boolean {
    const source = castFile(sourceFile);
    if (!source.exists) {
        return false;
    }
    const target = castFile(newPath);
    if (source.fullName === target.fullName) {
        return false;
    }
    return source.copy(target.fsName);
}

export default copyFile;
