import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isRasterLayer(selectedLayer)) {
    _.addProperty(selectedLayer, ["ADBE Effect Parade", "ADBE Checkbox Control"]);
}
// 结果：选中图层上会被添加一个「复选框控制」效果。

if (_.isRasterLayer(selectedLayer)) {
    // 注意：不推荐直接使用效果名称或 Property 索引作为路径，
    // 因为不同语言的 Ae 会有不同的效果名称，推荐使用匹配名。
    _.addProperty(selectedLayer, ["effect", "颜色控制"]);
}
// 结果：选中图层上会被添加一个「颜色控制」效果。

const shapeLayer = _.getFirstSelectedLayer();
if (_.isShapeLayer(shapeLayer)) {
    _.addProperty(shapeLayer, ["ADBE Root Vectors Group", "ADBE Vector Shape - Ellipse"]);
}
// 结果：形状图层「内容」Property Group 下会被添加一个「椭圆路径」Property。
