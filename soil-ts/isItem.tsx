import isCompItem from "./isCompItem";
import isFolderItem from "./isFolderItem";
import isFootageItem from "./isFootageItem";

/**
 * Item 类型谓词
 *
 * @param {*} value
 * @returns {value is Item}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isItem(value: any): value is Item {
    return isCompItem(value) || isFootageItem(value) || isFolderItem(value);
}

export default isItem;
