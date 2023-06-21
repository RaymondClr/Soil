function isShapeProperty(property: Property): property is ShapeProperty {
    return property.propertyValueType === PropertyValueType.SHAPE;
}

export default isShapeProperty;
