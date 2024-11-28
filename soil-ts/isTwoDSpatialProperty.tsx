import isProperty from "./isProperty";

/**
 * 二维线性空间 Property 谓词
 *
 * @param {*} property
 * @returns {property is Property<TwoDSpatialType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isTwoDSpatialProperty(property: any): property is Property<TwoDSpatialType> {
    return isProperty(property) && property.propertyValueType === PropertyValueType.TwoD_SPATIAL;
}

export default isTwoDSpatialProperty;
