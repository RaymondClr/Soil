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
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function reverseKeyframeValues(keyframeValues: Array<Keyframe>, reverseKeyTime: boolean = true): Array<Keyframe> {
    let keyTimes = map(keyframeValues, keyframe => keyframe.keyTime);
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
