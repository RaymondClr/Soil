import stubTrue from "./lodash/basic/stubTrue";
import isFunction from "./lodash/#isFunction";
import times from "./lodash/#times";
import getKeyframeValueByIndex from "./_internal/_getKeyframeValueByIndex";
import isColorProperty from "./isColorProperty";
import isCustomValueProperty from "./isCustomValueProperty";

/**
 * 获取关键帧的所有值
 *
 * @param {Property} property
 * @param {?(property: Property, keyIndex: number) => boolean} [predicate]
 * @returns {boolean) => Array<Keyframe>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function getKeyframeValues(property: Property, predicate?: (property: Property, keyIndex: number) => boolean) {
    const func = isFunction(predicate) ? predicate : stubTrue;
    const isSpatialValue = property.isSpatial && !isColorProperty(property);
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
