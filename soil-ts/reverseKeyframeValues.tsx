import map from "./lodash/#map";
import swapObjectValue from "./_internal/_swapObjectValue";

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
