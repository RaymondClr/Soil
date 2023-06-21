function isNoValueProperty(property: Property): property is NoValueProperty {
    return property.propertyValueType === PropertyValueType.NO_VALUE;
}

export default isNoValueProperty;
