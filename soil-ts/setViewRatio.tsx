import get from "./lodash/#get";

/**
 * 设置 Ae 合成查看器视图比例
 *
 * @param {number} value
 * @since 0.1.0
 * @category Soil
 * @example 
 * foo(param)
 * // => result
 */
function setViewRatio(value: number): void {
    const viewOptions = get(app, ["activeViewer", "views", "0", "options"]);
    if (viewOptions) {
        viewOptions.zoom = value;
    }
}

export default setViewRatio;
