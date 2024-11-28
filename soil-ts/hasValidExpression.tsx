import canSetPropertyValue from "./canSetPropertyValue";

/**
 * 有效 Property 表达式谓词
 *
 * @param {*} property
 * @returns {property is Property}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function hasValidExpression(property: any): property is CanSetValueProperty {
    return canSetPropertyValue(property) && property.expression !== "" && property.expressionError === "";
}

export default hasValidExpression;
