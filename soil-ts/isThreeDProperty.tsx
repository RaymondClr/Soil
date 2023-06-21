function isThreeDProperty(property: Property): property is ThreeDProperty {
    return property.propertyValueType === PropertyValueType.ThreeD;
}

export default isThreeDProperty;
