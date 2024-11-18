import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isLightLayer(selectedLayer)) {
    // 由于 Property 名称、索引或匹配名均不和 Property 类型具有关联性，所以通过路径获取的 Property 类型是不可推导的。
    // 为了能够以一种简洁的方式获取返回的 Property 类型，建议使用泛型参数手动指定返回类型。
    const property = _.getProperty<ColorProperty>(selectedLayer, ["ADBE Light Options Group", "ADBE Light Color"]);
    if (_.isColorProperty(property)) {
        const color = property.value;
        _.log(color);
    }
}
// 结果：桌面日志会记录「颜色」灯光选项的 rgba 值。
