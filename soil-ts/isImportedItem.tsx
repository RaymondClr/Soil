import isFile from "./isFile";
import isFootageItem from "./isFootageItem";

/**
 * Item 关联本地文件谓词
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
function isImportedItem(value: any): value is FootageItem {
    return isFootageItem(value) && isFile(value.file);
}

export default isImportedItem;
