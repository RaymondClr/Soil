/**
 * 命名组 Property 类型谓词
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
function isNamedGroupType(property: Property): property is Property {
    return property.propertyType == PropertyType.NAMED_GROUP;
}

export default isNamedGroupType;
