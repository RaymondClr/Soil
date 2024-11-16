/**
 * 二维线性空间 Property 谓词
 *
 * @param {Property} property
 * @returns {property is Property<TwoDSpatialType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isTwoDSpatialProperty(property: Property): property is Property<TwoDSpatialType> {
    return property.propertyValueType === PropertyValueType.TwoD_SPATIAL;
}

export default isTwoDSpatialProperty;
