import forOwn from "./lodash/#forOwn";
import isProperty from "./isProperty";

function assignPropertyValues(propertyGroup: PropertyGroup, values: AnyObject): PropertyGroup {
    forOwn(values, (value, matchName) => {
        const property = propertyGroup.property(matchName);
        if (isProperty(property)) {
            property.setValue(value);
        }
    });
    return propertyGroup;
}

export default assignPropertyValues;
