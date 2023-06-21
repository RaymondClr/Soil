function isTextDocumentProperty(property: Property): property is TextDocumentProperty {
    return property.propertyValueType === PropertyValueType.TEXT_DOCUMENT;
}

export default isTextDocumentProperty;
