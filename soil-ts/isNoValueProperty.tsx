import isProperty from "./isProperty";

/**
 * NoValueProperty 谓词
 *
 * @param {*} property
 * @returns {property is NoValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isNoValueProperty(property: any): property is NoValueProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.NO_VALUE;
}

export default isNoValueProperty;
