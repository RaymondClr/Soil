import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (selectedLayer) {
    const properties = _.propertyGroupToArray(selectedLayer.transform);
    const keysProperties = _.filter(properties, _.hasKeyframes);
    _.forEach(keysProperties, _.removeKeyframes);
}
// 结果：选中图层变换组下的所有 Proeprty，如果存在关键帧，则所有关键帧会被移除。
