import castFile from "./_internal/_castFile";
import castFolder from "./_internal/_castFolder";

/**
 * 显示本地文件
 *
 * @param {LooseFile} value
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function revealFile(value: LooseFile): boolean {
    const file = castFile(value);
    if (!file.exists) {
        return false;
    }
    const folder = castFolder(file.path);
    return folder.execute();
}

export default revealFile;
