function isMaskIndexProperty(property: Property): property is Property<MaskIndexType> {
    return property.propertyValueType === PropertyValueType.MASK_INDEX;
}

export default isMaskIndexProperty;
