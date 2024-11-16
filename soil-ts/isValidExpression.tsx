/**
 * 有效 Property 表达式谓词
 *
 * @param {Property} property
 * @returns {property is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isValidExpression(property: Property): property is Property {
    return property.expression !== "" && property.expressionError === "";
}

export default isValidExpression;
