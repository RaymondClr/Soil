/**
 * 三维 Property 谓词
 *
 * @param {Property} property
 * @returns {property is ThreeDProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isThreeDProperty(property: Property): property is ThreeDProperty {
    return property.propertyValueType === PropertyValueType.ThreeD;
}

export default isThreeDProperty;
