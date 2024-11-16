/**
 * NoValueProperty 谓词
 *
 * @param {Property} property
 * @returns {property is NoValueProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isNoValueProperty(property: Property): property is NoValueProperty {
    return property.propertyValueType === PropertyValueType.NO_VALUE;
}

export default isNoValueProperty;
