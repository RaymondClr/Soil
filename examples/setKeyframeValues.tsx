import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isLayer(selectedLayer)) {
    const targetProperty = selectedLayer.position;
    const activeComp = selectedLayer.containingComp;
    const frameDuration = activeComp.frameDuration;
    const keyframeValues = _.times(5, function (n) {
        const keyframe: Keyframe = { keyTime: n * frameDuration * 8, keyValue: [n * 100, n * 100] };
        return keyframe;
    });
    if (_.canSetPropertyValue(targetProperty)) {
        _.setKeyframeValues(targetProperty, keyframeValues);
    }
}
// 结果：选中图层的位置 Property 会被添加 5 个关键帧，每个关键帧之间的间隔为 8 帧，关键帧水平和垂直位置每次移动 100 像素。

const selectedLayers = _.getSelectedLayers();
if (selectedLayers && selectedLayers.length === 2) {
    // 对选中图层按索引排序，确保图层的上下顺序不受选择顺序影响。
    const [firstLayer, secondLayer] = selectedLayers.sort((layer) => layer.index);
    const firstLayerPos = firstLayer.position;
    const secondLayerPos = secondLayer.position;
    // 因为不同类型的关键帧值数据结构存在差异，所以应用之前需要确保两者为同类型 Property。
    if (_.canSetPropertyValue(secondLayerPos) && _.isTwoDSpatialProperty(secondLayerPos)) {
        const firstLayerKeys = _.getKeyframeValues(firstLayerPos);
        _.setKeyframeValues(secondLayerPos, firstLayerKeys);
    }
}
// 结果：选中两个图层的前提下，第一个选中图层的位置关键帧被拷贝到第二个图层的位置 Property 上。
