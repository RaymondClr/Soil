function isTwoDSpatialProperty(property: Property): property is Property<TwoDSpatialType> {
    return property.propertyValueType === PropertyValueType.TwoD_SPATIAL;
}

export default isTwoDSpatialProperty;
