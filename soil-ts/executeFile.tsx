import castFile from "./_internal/_castFile";

/**
 * 执行文件
 *
 * @param {LooseFile} path
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function executeFile(path: LooseFile): boolean {
    const file = castFile(path);
    if (!file.exists) {
        return false;
    }
    return file.execute();
}

export default executeFile;
