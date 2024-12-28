import { IS_KEY_LABEL_EXISTS } from "./_global";

function getKeyframeValueByIndex(property: Property, keyIndex: number, hasSpatialValue: boolean, isCustomValue: boolean): Keyframe {
    return {
        keyTime: property.keyTime(keyIndex),
        keyValue: isCustomValue ? null : property.keyValue(keyIndex),
        keySelected: property.keySelected(keyIndex),
        keyInTemporalEase: property.keyInTemporalEase(keyIndex),
        keyOutTemporalEase: property.keyOutTemporalEase(keyIndex),
        keyTemporalContinuous: property.keyTemporalContinuous(keyIndex),
        keyTemporalAutoBezier: property.keyTemporalAutoBezier(keyIndex),
        keyInInterpolationType: property.keyInInterpolationType(keyIndex),
        keyOutInterpolationType: property.keyOutInterpolationType(keyIndex),
        keyInSpatialTangent: hasSpatialValue ? property.keyInSpatialTangent(keyIndex) : null,
        keyOutSpatialTangent: hasSpatialValue ? property.keyOutSpatialTangent(keyIndex) : null,
        keySpatialAutoBezier: hasSpatialValue ? property.keySpatialAutoBezier(keyIndex) : null,
        keySpatialContinuous: hasSpatialValue ? property.keySpatialContinuous(keyIndex) : null,
        keyRoving: hasSpatialValue ? property.keyRoving(keyIndex) : null,
        keyLabel: IS_KEY_LABEL_EXISTS ? property.keyLabel(keyIndex) : null,
    };
}

export default getKeyframeValueByIndex;
