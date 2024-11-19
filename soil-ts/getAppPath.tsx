/**
 * 获取当前 Ae 的安装路径
 *
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * _.log(_.getAppPath());
 * // 结果：桌面日志会记录当前 Ae 的安装目录。
 * ```
 */
function getAppPath(): string {
    return BridgeTalk.getAppPath("aftereffects");
}

export default getAppPath;
