/**
 * 文本文档 Property 谓词
 *
 * @param {Property} property
 * @returns {property is TextDocumentProperty}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isTextDocumentProperty(property: Property): property is TextDocumentProperty {
    return property.propertyValueType === PropertyValueType.TEXT_DOCUMENT;
}

export default isTextDocumentProperty;
