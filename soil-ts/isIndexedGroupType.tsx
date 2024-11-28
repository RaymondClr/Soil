import isPropertyGroup from "./isPropertyGroup";

/**
 * 索引组 Property 类型谓词
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
function isIndexedGroupType(property: any): property is PropertyGroup {
    return isPropertyGroup(property) && property.propertyType == PropertyType.INDEXED_GROUP;
}

export default isIndexedGroupType;
