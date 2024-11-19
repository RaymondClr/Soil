import getActiveItem from "./getActiveItem.jsx";
import isCompItem from "./isCompItem.jsx";

/**
 * 获取活动的合成
 *
 * @returns {(CompItem | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * // 注意：如果没有活动合成会返回 undefined
 * if (activeComp) {
 *     activeComp.duration = 10;
 * }
 * // 结果：活动合成的持续时间会被设置为 10 秒。
 * ```
 */
function getActiveComp(): CompItem | undefined {
    let item = getActiveItem();
    return isCompItem(item) ? item : undefined;
}

export default getActiveComp;
