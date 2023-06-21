function isCustomValueProperty(property: Property): property is Property {
    return property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
}

export default isCustomValueProperty;
