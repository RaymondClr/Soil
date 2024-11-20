import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
// 注意：如果没有活动合成会返回 undefined
if (_.isRasterLayer(selectedLayer)) {
    _.setPropertyValueAlone(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 1);
    _.setPropertyValueAlone(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 2);
}
// 结果：选中图层是光栅图层的前提下，图层会被添加 2 个「通道模糊」效果，且「Alpha 模糊度」参数被分别设置为 1 和 2。
