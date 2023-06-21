function isMarkerProperty(property: Property): property is MarkerValueProperty {
    return property.propertyValueType === PropertyValueType.MARKER;
}

export default isMarkerProperty;
