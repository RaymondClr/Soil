import isProperty from "./isProperty";

/**
 * 自定义值 Property 谓词
 *
 * @param {*} property
 * @returns {property is Property<CustomValueType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isCustomValueProperty(property: any): property is Property<CustomValueType> {
    return isProperty(property) && property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
}

export default isCustomValueProperty;
