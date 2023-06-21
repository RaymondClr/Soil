function isIndexedGroupType(property: Property): property is Property {
    return property.propertyType == PropertyType.INDEXED_GROUP;
}

export default isIndexedGroupType;
