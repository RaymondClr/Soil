function isThreeDSpatialProperty(property: Property): property is Property<ThreeDSpatialType> {
    return property.propertyValueType === PropertyValueType.ThreeD_SPATIAL;
}

export default isThreeDSpatialProperty;
