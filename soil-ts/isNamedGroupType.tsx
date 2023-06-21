function isNamedGroupType(property: Property): property is Property {
    return property.propertyType == PropertyType.NAMED_GROUP;
}

export default isNamedGroupType;
