import { IS_KEY_LABEL_EXISTS } from "./_global";

function getKeyframeValueByIndex(property: Property, keyIndex: number, isSpatialValue: boolean, isCustomValue: boolean): Keyframe {
    return {
        property: property,
        keyTime: property.keyTime(keyIndex),
        keyValue: isCustomValue ? null : property.keyValue(keyIndex),
        keySelected: property.keySelected(keyIndex),
        keyInTemporalEase: property.keyInTemporalEase(keyIndex),
        keyOutTemporalEase: property.keyOutTemporalEase(keyIndex),
        keyTemporalContinuous: property.keyTemporalContinuous(keyIndex),
        keyTemporalAutoBezier: property.keyTemporalAutoBezier(keyIndex),
        keyInInterpolationType: property.keyInInterpolationType(keyIndex),
        keyOutInterpolationType: property.keyOutInterpolationType(keyIndex),
        keyInSpatialTangent: isSpatialValue ? property.keyInSpatialTangent(keyIndex) : null,
        keyOutSpatialTangent: isSpatialValue ? property.keyOutSpatialTangent(keyIndex) : null,
        keySpatialAutoBezier: isSpatialValue ? property.keySpatialAutoBezier(keyIndex) : null,
        keySpatialContinuous: isSpatialValue ? property.keySpatialContinuous(keyIndex) : null,
        keyRoving: isSpatialValue ? property.keyRoving(keyIndex) : null,
        keyLabel: IS_KEY_LABEL_EXISTS ? property.keyLabel(keyIndex) : null,
    };
}

export default getKeyframeValueByIndex;
