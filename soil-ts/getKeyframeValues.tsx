import stubTrue from "./lodash/basic/stubTrue";
import isFunction from "./lodash/#isFunction";
import times from "./lodash/#times";
import getKeyframeValueByIndex from "./_internal/_getKeyframeValueByIndex";
import isCustomValueProperty from "./isCustomValueProperty";

function getKeyframeValues(property: Property, predicate?: (property: Property, keyIndex: number) => boolean) {
    const func = isFunction(predicate) ? predicate : stubTrue;
    const isSpatialValue = property.isSpatial;
    const isCustomValue = isCustomValueProperty(property);
    const result: Array<Keyframe> = [];
    times(property.numKeys, index => {
        let keyIndex = index + 1;
        if (func(property, keyIndex)) {
            result.push(getKeyframeValueByIndex(property, keyIndex, isSpatialValue, isCustomValue));
        }
    });
    return result;
}

export default getKeyframeValues;
