function isColorProperty(property: Property): property is ColorProperty {
    return property.propertyValueType === PropertyValueType.COLOR;
}

export default isColorProperty;
