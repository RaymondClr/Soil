/**
 * 三维线性空间 Property 谓词
 *
 * @param {Property} property
 * @returns {property is Property<ThreeDSpatialType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isThreeDSpatialProperty(property: Property): property is Property<ThreeDSpatialType> {
    return property.propertyValueType === PropertyValueType.ThreeD_SPATIAL;
}

export default isThreeDSpatialProperty;
