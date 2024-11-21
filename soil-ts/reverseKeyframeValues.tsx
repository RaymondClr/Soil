import map from "./lodash/#map";
import swapObjectValue from "./_internal/_swapObjectValue";

/**
 * 反转一组关键帧的空间插值
 *
 * @param {Array<Keyframe>} keyframeValues
 * @param {boolean} [reverseKeyTime=true]
 * @returns {Array<Keyframe>}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const selectedProperties = _.getSelectedProperties();
 * // 注意：如果没有活动合成会返回 undefined
 * if (selectedProperties) {
 *     _.forEach(selectedProperties, function (property) {
 *         if (_.hasKeyframes(property)) {
 *             const keyframes = _.getKeyframeValues(property);
 *             const reversedKeys = _.reverseKeyframeValues(keyframes, false);
 *             _.setUndoGroup("Reverse Keyframe", function () {
 *                 _.removeKeyframes(property);
 *                 _.setKeyframeValues(property, reversedKeys);
 *             });
 *         }
 *     });
 * }
 * // 结果：选中的 Property 中，所有存在关键帧的 Porperty，关键帧属性会被反转。
 * ```
 */
function reverseKeyframeValues(keyframeValues: Array<Keyframe>, reverseKeyTime: boolean = true): Array<Keyframe> {
    let keyTimes = map(keyframeValues, (keyframe) => keyframe.keyTime);
    keyTimes = reverseKeyTime ? keyTimes.reverse() : keyTimes;
    keyframeValues = map(keyframeValues, (keyframe, index) => {
        keyframe.keyTime = keyTimes[index];
        swapObjectValue(keyframe, "keyInTemporalEase", "keyOutTemporalEase");
        swapObjectValue(keyframe, "keyInInterpolationType", "keyOutInterpolationType");
        swapObjectValue(keyframe, "keyInSpatialTangent", "keyOutSpatialTangent");
        return keyframe;
    }).reverse();
    return keyframeValues;
}

export default reverseKeyframeValues;
