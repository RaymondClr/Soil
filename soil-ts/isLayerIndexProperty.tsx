/**
 * 图层索引 Property 类型谓词
 *
 * @param {Property} property
 * @returns {property is Property<LayerIndexType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isLayerIndexProperty(property: Property): property is Property<LayerIndexType> {
    return property.propertyValueType === PropertyValueType.LAYER_INDEX;
}

export default isLayerIndexProperty;
