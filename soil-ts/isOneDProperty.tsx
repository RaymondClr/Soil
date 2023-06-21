function isOneDProperty(property: Property): property is OneDProperty {
    return property.propertyValueType === PropertyValueType.OneD;
}

export default isOneDProperty;
