import stubTrue from "./lodash/basic/stubTrue";
import isFunction from "./lodash/#isFunction";
import times from "./lodash/#times";
import getKeyframeValueByIndex from "./_internal/_getKeyframeValueByIndex";
import isColorProperty from "./isColorProperty";
import isCustomValueProperty from "./isCustomValueProperty";

/**
 * 获取关键帧的所有值
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @param {?(property: T, keyIndex: number) => boolean} [predicate]
 * @returns {Array<Keyframe>}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode setKeyframeValues}
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (_.isCompItem(activeComp)) {
 *     const selectedProperty = activeComp.selectedProperties[0];
 *     if (_.canSetPropertyValue(selectedProperty)) {
 *         // 注意：keyLabel 方法在 Ae 22.6 中添加。
 *         const redKeys = _.getKeyframeValues(selectedProperty, function (property, keyIndex) {
 *             return property.keyLabel(keyIndex) === 1;
 *         });
 *         _.log(redKeys);
 *     }
 * }
 * // 结果：桌面 json 日志会记录所有被过滤的红色关键帧的值。
 * ```
 */
function getKeyframeValues<T extends CanSetValueProperty>(property: T, predicate?: (property: T, keyIndex: number) => boolean): Array<Keyframe> {
    const func = isFunction(predicate) ? predicate : stubTrue;
    const isSpatialValue = property.isSpatial && !isColorProperty(property);
    const isCustomValue = isCustomValueProperty(property);
    const result: Array<Keyframe> = [];
    times(property.numKeys, (index) => {
        let keyIndex = index + 1;
        if (func(property, keyIndex)) {
            result.push(getKeyframeValueByIndex(property, keyIndex, isSpatialValue, isCustomValue));
        }
    });
    return result;
}

export default getKeyframeValues;
