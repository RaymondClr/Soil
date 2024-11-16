/**
 * 自定义值 Property 谓词
 *
 * @param {Property} property
 * @returns {property is Property<CustomValueType>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isCustomValueProperty(property: Property): property is Property<CustomValueType> {
    return property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
}

export default isCustomValueProperty;
