import executeCommand from "./executeCommand";

/**
 * 打开 Ae 首选项面板
 *
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * _.revealPreferences();
 * // 结果：Ae 首选项面板会被打开。
 * ```
 */
function revealPreferences(): void {
    executeCommand(parseFloat(app.version) > 16.0 ? 3131 : 2359);
}

export default revealPreferences;
