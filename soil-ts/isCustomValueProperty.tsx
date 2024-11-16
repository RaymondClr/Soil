function isCustomValueProperty(property: Property): property is Property<CustomValueType> {
    return property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
}

export default isCustomValueProperty;
