import isCustomValueProperty from "./isCustomValueProperty";
import isLayerIndexProperty from "./isLayerIndexProperty";
import isMaskIndexProperty from "./isMaskIndexProperty";
import isNoValueProperty from "./isNoValueProperty";
import isProperty from "./isProperty";

function canSetPropertyValue(property: _PropertyClasses): property is CanSetPropertyValueType {
    return isProperty(property) && !isNoValueProperty(property) && !isCustomValueProperty(property) && !isLayerIndexProperty(property) && !isMaskIndexProperty(property);
}

export default canSetPropertyValue;
