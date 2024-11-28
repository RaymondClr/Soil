import isProperty from "./isProperty";

/**
 * 三维 Property 谓词
 *
 * @param {*} property
 * @returns {property is ThreeDProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isThreeDProperty(property: any): property is ThreeDProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.ThreeD;
}

export default isThreeDProperty;
