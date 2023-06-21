import addPropertyAlone from "./addPropertyAlone";
import isProperty from "./isProperty";

function setPropertyValueAlone(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property | undefined {
    const property = addPropertyAlone(rootProperty, path);
    if (isProperty(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValueAlone;
