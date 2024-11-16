import isFootageItem from "./isFootageItem";

/**
 * 源文件丢失谓词
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
function isSourceFileMissing(value: any): value is FootageItem {
    return isFootageItem(value) && value.footageMissing;
}

export default isSourceFileMissing;
