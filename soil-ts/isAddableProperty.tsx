import isLayer from "./isLayer";
import isMaskPropertyGroup from "./isMaskPropertyGroup";
import isPropertyGroup from "./isPropertyGroup";

/**
 * 可添加 Property 谓词
 *
 * @param {*} value
 * @returns {value is EditableProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isAddableProperty(value: any): value is EditableProperty {
    return isPropertyGroup(value) || isMaskPropertyGroup(value) || isLayer(value);
}

export default isAddableProperty;
