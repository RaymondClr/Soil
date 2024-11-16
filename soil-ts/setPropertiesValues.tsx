import forOwn from "./lodash/#forOwn";
import canSetPropertyValue from "./canSetPropertyValue";

/**
 * 通过键值对批量设置 Property 值
 *
 * @param {PropertyGroup} propertyGroup
 * @param {object} values
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function setPropertiesValues(propertyGroup: PropertyGroup, values: object): void {
    forOwn(values, function (value: any, matchName: string) {
        const property = propertyGroup.property(matchName);
        if (canSetPropertyValue(property)) {
            property.setValue(value);
        }
    });
}

export default setPropertiesValues;
