import { reScriptFileName } from "./_internal/_global";

/**
 * 脚本文件谓词
 *
 * @param {File} file
 * @returns {file is File}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isScriptFile(file: File): file is File {
    return reScriptFileName.test(file.displayName);
}

export default isScriptFile;
