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
 *
 * ```ts
 * const targetPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
 * alert(targetPath);
 * // 结果：弹窗内容显示完整文件路径。
 * ```
 */
function createPath(...args: Array<string>): string {
    return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
}

export default createPath;
