import isProperty from "./isProperty";

/**
 * 标记 Property 类型谓词
 *
 * @param {*} property
 * @returns {property is MarkerValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isMarkerProperty(property: any): property is MarkerValueProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.MARKER;
}

export default isMarkerProperty;
