import isCustomValueProperty from "./isCustomValueProperty";
import isNoValueProperty from "./isNoValueProperty";
import isProperty from "./isProperty";

function canSetPropertyValue(property: any): property is CanSetPropertyValueType {
    return isProperty(property) && !isNoValueProperty(property) && !isCustomValueProperty(property);
}

export default canSetPropertyValue;
