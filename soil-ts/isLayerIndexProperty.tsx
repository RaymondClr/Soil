function isLayerIndexProperty(property: Property): property is Property<LayerIndexType> {
    return property.propertyValueType === PropertyValueType.LAYER_INDEX;
}

export default isLayerIndexProperty;
