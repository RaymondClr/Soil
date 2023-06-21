function isLayerIndexProperty(property: Property): property is Property {
    return property.propertyValueType === PropertyValueType.LAYER_INDEX;
}

export default isLayerIndexProperty;
