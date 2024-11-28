import isProperty from "./isProperty";

/**
 * 三维线性空间 Property 谓词
 *
 * @param {*} property
 * @returns {property is Property<ThreeDSpatialType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isThreeDSpatialProperty(property: any): property is Property<ThreeDSpatialType> {
    return isProperty(property) && property.propertyValueType === PropertyValueType.ThreeD_SPATIAL;
}

export default isThreeDSpatialProperty;
