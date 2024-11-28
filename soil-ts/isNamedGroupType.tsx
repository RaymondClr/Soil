import isPropertyGroup from "./isPropertyGroup";

/**
 * 命名组 Property 类型谓词
 *
 * @param {*} property
 * @returns {property is PropertyGroup}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isNamedGroupType(property: any): property is PropertyGroup {
    return isPropertyGroup(property) && property.propertyType == PropertyType.NAMED_GROUP;
}

export default isNamedGroupType;
