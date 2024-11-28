import isProperty from "./isProperty";

/**
 * 一维 Property 谓词
 *
 * @param {*} property
 * @returns {property is OneDProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isOneDProperty(property: Property): property is OneDProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.OneD;
}

export default isOneDProperty;
