import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
// 注意：如果没有活动合成会返回 undefined
if (_.isRasterLayer(selectedLayer)) {
    _.setPropertyValue(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 1);
    // 因为效果已经被创建，所以第二次不会再次创建相同效果，但不影响参数修改。
    // 如果不希望跳过已存在 Property，建议使用 setPropertyValueAlone。
    _.setPropertyValue(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 2);
}
// 结果：选中图层是光栅图层的前提下，图层会被添加「通道模糊」效果，且「Alpha 模糊度」参数被设置为 2。
