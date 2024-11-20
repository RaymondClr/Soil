import get from "./lodash/#get";

/**
 * 设置 Ae 合成查看器视图比例
 *
 * @param {number} value
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * _.setViewRatio(0.5);
 * // 结果：合成查看器视图比例设置为 50%。
 * 
 * _.setViewRatio(1);
 * // 结果：合成查看器视图比例设置为 100%。
 * 
 * _.setViewRatio(2);
 * // 结果：合成查看器视图比例设置为 200%。
 * ```
 */
function setViewRatio(value: number): void {
    const viewOptions = get(app, ["activeViewer", "views", "0", "options"]);
    if (viewOptions) {
        viewOptions.zoom = value;
    }
}

export default setViewRatio;
