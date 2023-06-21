import addProperty from "./addProperty";
import isProperty from "./isProperty";

function setPropertyValue(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property | undefined {
    const property = addProperty(rootProperty, path);
    if (isProperty(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValue;
