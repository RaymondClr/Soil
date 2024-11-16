import castFolder from "./_internal/_castFolder";

/**
 * 显示本地文件夹
 *
 * @param {LooseFolder} value
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function revealFolder(value: LooseFolder): boolean {
    const newFolder = castFolder(value);
    return newFolder.exists ? newFolder.execute() : false;
}

export default revealFolder;
