/**
 * PropertyType 谓词
 *
 * @param {Property} property
 * @returns {property is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isPropertyType(property: Property): property is Property {
    return property.propertyType == PropertyType.PROPERTY;
}

export default isPropertyType;
