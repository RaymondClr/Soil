/**
 * 遮罩索引 Property 类型谓词
 *
 * @param {Property} property
 * @returns {property is Property<MaskIndexType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isMaskIndexProperty(property: Property): property is Property<MaskIndexType> {
    return property.propertyValueType === PropertyValueType.MASK_INDEX;
}

export default isMaskIndexProperty;
