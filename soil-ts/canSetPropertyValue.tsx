import isCustomValueProperty from "./isCustomValueProperty";
import isNoValueProperty from "./isNoValueProperty";
import isProperty from "./isProperty";

/**
 * Property 可设置值谓词
 *
 * @param {*} property
 * @returns {property is CanSetPropertyValueType}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function canSetPropertyValue(property: any): property is CanSetPropertyValueType {
    return isProperty(property) && !isNoValueProperty(property) && !isCustomValueProperty(property);
}

export default canSetPropertyValue;
