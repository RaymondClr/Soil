import isProperty from "./isProperty";

/**
 * 二维 Property 谓词
 *
 * @param {*} property
 * @returns {property is TwoDProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isTwoDProperty(property: any): property is TwoDProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.TwoD;
}

export default isTwoDProperty;
