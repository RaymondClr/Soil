import getKeyframeValues from "./getKeyframeValues";
import eachRight from "./lodash/#eachRight";

/**
 * 反向迭代 Property 关键帧
 *
 * @template {CanSetValueProperty} T
 * @param {T} property
 * @param {(property: T, keyIndex: number, keyframe: Keyframe) => unknown} iteratee
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see eachKeyframesRight
 * @example
 *
 * ```ts
 * const selectedProperty = _.getFirstSelectedProperty();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperty) {
 *     if (_.hasKeyframes(selectedProperty)) {
 *         _.eachKeyframesRight(selectedProperty, function (property, keyIndex, Keyframe) {
 *             _.log(_.stringify(Keyframe));
 *         });
 *     }
 * }
 * // 结果：桌面日志会记录选中 Property 上的所有关键帧的值。
 * ```
 */
function eachKeyframesRight<T extends CanSetValueProperty>(property: T, iteratee: (property: T, keyIndex: number, keyframe: Keyframe) => unknown): T {
    const keyframes = getKeyframeValues(property);
    eachRight(keyframes, function (keyframe, index) {
        if (iteratee(property, index + 1, keyframe) === false) {
            return false;
        }
    });
    return property;
}

export default eachKeyframesRight;
