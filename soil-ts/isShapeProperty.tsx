import isProperty from "./isProperty";

/**
 * 形状 Property 谓词
 *
 * @param {*} property
 * @returns {property is ShapeProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isShapeProperty(property: any): property is ShapeProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.SHAPE;
}

export default isShapeProperty;
