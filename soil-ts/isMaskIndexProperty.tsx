import isProperty from "./isProperty";

/**
 * 遮罩索引 Property 类型谓词
 *
 * @param {*} property
 * @returns {property is Property<MaskIndexType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isMaskIndexProperty(property: any): property is Property<MaskIndexType> {
    return isProperty(property) && property.propertyValueType === PropertyValueType.MASK_INDEX;
}

export default isMaskIndexProperty;
