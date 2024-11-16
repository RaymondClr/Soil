import has from "./lodash/#has";
import isSourceFileMissing from "./isSourceFileMissing";

/**
 * 素材丢失 Item 谓词
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
function isMissingFootageItem(value: any): value is FootageItem {
    return isSourceFileMissing(value) && has(value.mainSource, "missingFootagePath");
}

export default isMissingFootageItem;
