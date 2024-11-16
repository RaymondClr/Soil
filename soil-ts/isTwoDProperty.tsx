/**
 * 二维 Property 谓词
 *
 * @param {Property} property
 * @returns {property is TwoDProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isTwoDProperty(property: Property): property is TwoDProperty {
    return property.propertyValueType === PropertyValueType.TwoD;
}

export default isTwoDProperty;
