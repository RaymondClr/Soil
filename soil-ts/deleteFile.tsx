import castFile from "./_internal/_castFile";

/**
 * 删除本地指定文件
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
function deleteFile(path: LooseFile): boolean {
    const file = castFile(path);
    if (!file.exists) {
        return true;
    }
    return file.remove();
}

export default deleteFile;
