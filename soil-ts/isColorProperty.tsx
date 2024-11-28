import isProperty from "./isProperty";

/**
 * 颜色 Property 类型谓词
 *
 * @param {*} property
 * @returns {property is ColorProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isColorProperty(property: any): property is ColorProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.COLOR;
}

export default isColorProperty;
