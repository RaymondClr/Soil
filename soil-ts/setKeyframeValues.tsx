import { IS_KEY_LABEL_EXISTS } from "./_internal/_global";
import forEach from "./lodash/#forEach";
import isNil from "./lodash/#isNil";
import mapTemporalEaseValueToClasses from "./_internal/_mapTemporalEaseValueToClasses";
import canSetKeyframeVelocity from "./canSetKeyframeVelocity";
import isColorProperty from "./isColorProperty";
import isProperty from "./isProperty";

/**
 * 设置 Property 关键帧
 *
 * @param {Property} property 需要设置关键帧的 Property
 * @param {Array<Keyframe>} keyframeValues 一组关键帧
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode getKeyframeValues}
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isLayer(selectedLayer)) {
 *     const targetProperty = selectedLayer.position;
 *     const activeComp = selectedLayer.containingComp;
 *     const frameDuration = activeComp.frameDuration;
 *     const keyframeValues = _.times(5, function (n) {
 *         const keyframe: Keyframe = { keyTime: n * frameDuration * 8, keyValue: [n * 100, n * 100] };
 *         return keyframe;
 *     });
 *     if (_.canSetPropertyValue(targetProperty)) {
 *         _.setKeyframeValues(targetProperty, keyframeValues);
 *     }
 * }
 * // 结果：选中图层的位置 Property 会被添加 5 个关键帧，每个关键帧之间的间隔为 8 帧，关键帧水平和垂直位置每次移动 100 像素。
 *
 * const selectedLayers = _.getSelectedLayers();
 * if (selectedLayers && selectedLayers.length === 2) {
 *     // 对选中图层按索引排序，确保图层的上下顺序不受选择顺序影响。
 *     const [firstLayer, secondLayer] = selectedLayers.sort((layer) => layer.index);
 *     const firstLayerPos = firstLayer.position;
 *     const secondLayerPos = secondLayer.position;
 *     // 因为不同类型的关键帧值数据结构存在差异，所以应用之前需要确保两者为同类型 Property。
 *     if (_.canSetPropertyValue(secondLayerPos) && _.isTwoDSpatialProperty(secondLayerPos)) {
 *         const firstLayerKeys = _.getKeyframeValues(firstLayerPos);
 *         _.setKeyframeValues(secondLayerPos, firstLayerKeys);
 *     }
 * }
 * // 结果：选中两个图层的前提下，第一个选中图层的位置关键帧被拷贝到第二个图层的位置 Property 上。
 * ```
 */
function setKeyframeValues(property: Property, keyframeValues: Array<Keyframe>): void {
    if (keyframeValues.length === 0) {
        return;
    }
    forEach(keyframeValues, (keyframe) => {
        const keyTime = keyframe.keyTime;
        const keyValue = keyframe.keyValue;
        property.setValueAtTime(keyTime, keyValue);
    });
    const isSpatialValue = property.isSpatial && !isColorProperty(property);
    const canSetVelocity = canSetKeyframeVelocity(property);
    forEach(keyframeValues, (keyframe) => {
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
