import isFootageItem from "./isFootageItem";
import isSolidSource from "./isSolidSource";

/**
 * 纯色 Item 谓词
 *
 * @param {Item} item
 * @returns {item is FootageItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isSolidItem(item: Item): item is FootageItem {
    return isFootageItem(item) && isSolidSource(item.mainSource);
}

export default isSolidItem;
