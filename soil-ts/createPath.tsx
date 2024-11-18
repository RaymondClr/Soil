import { nativeJoin } from "./lodash/basic/_global";

/**
 * 拼接标准路径
 *
 * @param {...Array<string>} args
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function createPath(...args: Array<string>): string {
    return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
}

export default createPath;
