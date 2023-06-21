import contains from "./lodash/basic/contains";
import { SPATIAL_PROPERTY_VALUE_TYPE } from "./_internal/_global";

function isSpatialPropertyValue(property: Property): property is Property<TwoDSpatialType | ThreeDSpatialType> {
    return contains(SPATIAL_PROPERTY_VALUE_TYPE, property.propertyValueType);
}

export default isSpatialPropertyValue;
