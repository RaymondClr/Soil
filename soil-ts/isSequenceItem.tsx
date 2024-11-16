import isFootageItem from "./isFootageItem";

/**
 * 序列帧 Item 谓词
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
function isSequenceItem(value: any): value is FootageItem {
    return isFootageItem(value) && value.mainSource.conformFrameRate > 0 && value.hasAudio === false;
}

export default isSequenceItem;
