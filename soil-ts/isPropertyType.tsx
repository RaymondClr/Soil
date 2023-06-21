function isPropertyType(property: Property): property is Property {
    return property.propertyType == PropertyType.PROPERTY;
}

export default isPropertyType;
