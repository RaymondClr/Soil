/**
 * 标记 Property 类型谓词
 *
 * @param {Property} property
 * @returns {property is MarkerValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isMarkerProperty(property: Property): property is MarkerValueProperty {
    return property.propertyValueType === PropertyValueType.MARKER;
}

export default isMarkerProperty;
