import addProperty from "./addProperty";
import canSetPropertyValue from "./canSetPropertyValue";

function setPropertyValue(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property | undefined {
    const property = addProperty(rootProperty, path);
    if (canSetPropertyValue(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValue;
