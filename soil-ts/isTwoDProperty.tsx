function isTwoDProperty(property: Property): property is TwoDProperty {
    return property.propertyValueType === PropertyValueType.TwoD;
}

export default isTwoDProperty;
