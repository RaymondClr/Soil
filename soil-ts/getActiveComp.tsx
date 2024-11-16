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
 * foo(param)
 * // => result
 */
function getActiveComp(): CompItem | undefined {
    let item = getActiveItem();
    return isCompItem(item) ? item : undefined;
}

export default getActiveComp;
