import castFolder from "./_internal/_castFolder";

/**
 * 删除本地指定文件夹
 *
 * @param {LooseFolder} path
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function deleteFolder(path: LooseFolder): boolean {
    const folder = castFolder(path);
    if (!folder.exists) {
        return true;
    }
    return folder.remove();
}

export default deleteFolder;
