import { IS_KEY_LABEL_EXISTS } from "./_internal/_global";
import forEach from "./lodash/#forEach";
import canSetKeyframeVelocity from "./canSetKeyframeVelocity";
import mapTemporalEaseValueToClasses from "./_internal/_mapTemporalEaseValueToClasses";
import isSpatialPropertyValue from "./isSpatialPropertyValue";

function setKeyframeValues(keyframeValues: Array<Keyframe>): void {
    forEach(keyframeValues, keyframe => {
        const property = keyframe.property;
        const keyTime = keyframe.keyTime;
        const keyValue = keyframe.keyValue;
        property.setValueAtTime(keyTime, keyValue);
    });
    forEach(keyframeValues, keyframe => {
        const property = keyframe.property;
        const keyIndex = property.nearestKeyIndex(keyframe.keyTime);
        const keyInSpatialTangent = keyframe.keyInSpatialTangent;
        const keyOutSpatialTangent = keyframe.keyOutSpatialTangent;
        const keySpatialAutoBezier = keyframe.keySpatialAutoBezier;
        const keySpatialContinuous = keyframe.keySpatialContinuous;
        const keyRoving = keyframe.keyRoving;
        const keyInTemporalEase = mapTemporalEaseValueToClasses(keyframe.keyInTemporalEase);
        const keyOutTemporalEase = mapTemporalEaseValueToClasses(keyframe.keyOutTemporalEase);
        const keyTemporalContinuous = keyframe.keyTemporalContinuous;
        const keyTemporalAutoBezier = keyframe.keyTemporalAutoBezier;
        const keyInInterpolationType = keyframe.keyInInterpolationType;
        const keyOutInterpolationType = keyframe.keyOutInterpolationType;
        const keyLabel = keyframe.keyLabel;
        if (isSpatialPropertyValue(property)) {
            property.setSpatialTangentsAtKey(keyIndex, keyInSpatialTangent as [number, number, number], keyOutSpatialTangent as [number, number, number]);
            property.setSpatialAutoBezierAtKey(keyIndex, keySpatialAutoBezier as boolean);
            property.setSpatialContinuousAtKey(keyIndex, keySpatialContinuous as boolean);
            property.setRovingAtKey(keyIndex, keyRoving as boolean);
        }
        if (canSetKeyframeVelocity(property)) {
            property.setTemporalEaseAtKey(keyIndex, keyInTemporalEase, keyOutTemporalEase);
        }
        property.setTemporalContinuousAtKey(keyIndex, keyTemporalContinuous);
        property.setTemporalAutoBezierAtKey(keyIndex, keyTemporalAutoBezier);
        property.setInterpolationTypeAtKey(keyIndex, keyInInterpolationType, keyOutInterpolationType);

        if (IS_KEY_LABEL_EXISTS) {
            property.setLabelAtKey(keyIndex, keyLabel as number);
        }
        property.setSelectedAtKey(keyIndex, keyframe.keySelected);
    });
}

export default setKeyframeValues;
