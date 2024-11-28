import isProperty from "./isProperty";

/**
 * 文本文档 Property 谓词
 *
 * @param {*} property
 * @returns {property is TextDocumentProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function isTextDocumentProperty(property: any): property is TextDocumentProperty {
    return isProperty(property) && property.propertyValueType === PropertyValueType.TEXT_DOCUMENT;
}

export default isTextDocumentProperty;
