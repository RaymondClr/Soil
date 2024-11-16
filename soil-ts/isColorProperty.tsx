/**
 * 颜色 Property 类型谓词
 *
 * @param {Property} property
 * @returns {property is ColorProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isColorProperty(property: Property): property is ColorProperty {
    return property.propertyValueType === PropertyValueType.COLOR;
}

export default isColorProperty;
