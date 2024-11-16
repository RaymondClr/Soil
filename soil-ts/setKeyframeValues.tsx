import { IS_KEY_LABEL_EXISTS } from "./_internal/_global";
import forEach from "./lodash/#forEach";
import isNil from "./lodash/#isNil";
import mapTemporalEaseValueToClasses from "./_internal/_mapTemporalEaseValueToClasses";
import canSetKeyframeVelocity from "./canSetKeyframeVelocity";
import isColorProperty from "./isColorProperty";
import isProperty from "./isProperty";

function setKeyframeValues(keyframeValues: Array<Keyframe>, targetProperty?: Property): void {
    if (keyframeValues.length === 0) {
        return;
    }
    const sourceProperty = keyframeValues[0].property;
    const property = isProperty(targetProperty) ? targetProperty : sourceProperty;
    forEach(keyframeValues, keyframe => {
        const keyTime = keyframe.keyTime;
        const keyValue = keyframe.keyValue;
        property.setValueAtTime(keyTime, keyValue);
    });
    const isSpatialValue = property.isSpatial && !isColorProperty(property);
    const canSetVelocity = canSetKeyframeVelocity(property);
    forEach(keyframeValues, keyframe => {
        const keyIndex = property.nearestKeyIndex(keyframe.keyTime);
        const keyInSpatialTangent = keyframe.keyInSpatialTangent;
        const keyOutSpatialTangent = keyframe.keyOutSpatialTangent;
        const keySpatialAutoBezier = keyframe.keySpatialAutoBezier;
        const keySpatialContinuous = keyframe.keySpatialContinuous;
        const keyInTemporalEase = keyframe.keyInTemporalEase;
        const keyOutTemporalEase = keyframe.keyOutTemporalEase;
        const keyTemporalContinuous = keyframe.keyTemporalContinuous;
        const keyTemporalAutoBezier = keyframe.keyTemporalAutoBezier;
        const keyInInterpolationType = keyframe.keyInInterpolationType;
        const keyOutInterpolationType = keyframe.keyOutInterpolationType;
        const keyRoving = keyframe.keyRoving;
        const keyLabel = keyframe.keyLabel;
        const keySelected = keyframe.keySelected;
        if (isSpatialValue) {
            !isNil(keyInSpatialTangent) && property.setSpatialTangentsAtKey(keyIndex, keyInSpatialTangent as [number, number, number], keyOutSpatialTangent as [number, number, number]);
            !isNil(keySpatialAutoBezier) && property.setSpatialAutoBezierAtKey(keyIndex, keySpatialAutoBezier);
            !isNil(keySpatialContinuous) && property.setSpatialContinuousAtKey(keyIndex, keySpatialContinuous);
            !isNil(keyRoving) && property.setRovingAtKey(keyIndex, keyRoving);
        }
        if (canSetVelocity) {
            !isNil(keyInTemporalEase) && property.setTemporalEaseAtKey(keyIndex, mapTemporalEaseValueToClasses(keyInTemporalEase), !isNil(keyOutTemporalEase) ? mapTemporalEaseValueToClasses(keyOutTemporalEase) : void 0);
        }
        !isNil(keyTemporalContinuous) && property.setTemporalContinuousAtKey(keyIndex, keyTemporalContinuous);
        !isNil(keyTemporalAutoBezier) && property.setTemporalAutoBezierAtKey(keyIndex, keyTemporalAutoBezier);
        !isNil(keyInInterpolationType) && property.setInterpolationTypeAtKey(keyIndex, keyInInterpolationType, !isNil(keyOutInterpolationType) ? keyOutInterpolationType : void 0);
        if (IS_KEY_LABEL_EXISTS) {
            !isNil(keyLabel) && property.setLabelAtKey(keyIndex, keyLabel);
        }
        !isNil(keySelected) && property.setSelectedAtKey(keyIndex, keySelected);
    });
}

export default setKeyframeValues;
