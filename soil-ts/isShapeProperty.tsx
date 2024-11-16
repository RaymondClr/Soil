/**
 * 形状 Property 谓词
 *
 * @param {Property} property
 * @returns {property is ShapeProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isShapeProperty(property: Property): property is ShapeProperty {
    return property.propertyValueType === PropertyValueType.SHAPE;
}

export default isShapeProperty;
