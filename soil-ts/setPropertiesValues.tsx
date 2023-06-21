import forOwn from "./lodash/#forOwn";
import canSetPropertyValue from "./canSetPropertyValue";

function setPropertiesValues(propertyGroup: PropertyGroup, values: object): void {
    forOwn(values, function (value: any, matchName: string) {
        const property = propertyGroup.property(matchName);
        if (canSetPropertyValue(property)) {
            property.setValue(value);
        }
    });
}

export default setPropertiesValues;
