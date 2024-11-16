import has from "./lodash/#has";
import isSourceFileMissing from "./isSourceFileMissing";

/**
 * 占位符 Item 谓词
 *
 * @param {*} value
 * @returns {value is FootageItem}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isPlaceholderItem(value: any): value is FootageItem {
    return isSourceFileMissing(value) && !has(value.mainSource, "missingFootagePath");
}

export default isPlaceholderItem;
