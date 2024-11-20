import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
// 注意：如果没有活动合成会返回 undefined
if (_.isRasterLayer(selectedLayer)) {
    const effect = selectedLayer.effect;
    const blurEffect = effect.addProperty("ADBE Channel Blur") as PropertyGroup;
    _.setPropertiesValues(blurEffect, {
        "ADBE Channel Blur-0001": 10,
        "ADBE Channel Blur-0002": 10,
        "ADBE Channel Blur-0003": 10,
        "ADBE Channel Blur-0004": 1,
        "ADBE Channel Blur-0005": 1,
    });
}
// 结果：选中图层是光栅图层的前提下，图层会被添加「通道模糊」效果，且参数依次被设置为 10，10，10，1，1。
