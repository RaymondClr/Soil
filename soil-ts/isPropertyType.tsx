import isProperty from "./isProperty";

/**
 * PropertyType 谓词
 *
 * @param {*} property
 * @returns {property is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isPropertyType(property: any): property is Property {
    return isProperty(property) && property.propertyType == PropertyType.PROPERTY;
}

export default isPropertyType;
