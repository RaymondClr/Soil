function isMaskIndexProperty(property: Property): property is Property {
    return property.propertyValueType === PropertyValueType.MASK_INDEX;
}

export default isMaskIndexProperty;
