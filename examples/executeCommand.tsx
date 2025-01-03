import * as _ from "../soil-ts/soil";

var firstSelectedLayer = _.getFirstSelectedLayer();
if (_.isRasterLayer(firstSelectedLayer)) {
    // 查询命令 ID：https://hyperbrew.github.io/after-effects-command-ids
    _.executeCommand(9006);
    _.setPropertyValue(firstSelectedLayer, ["ADBE Layer Styles", "solidFill/enabled", "solidFill/color"], [0, 1, 0, 1]);
}
// 结果：在选中图层为光栅图层的前提下，图层样式的「颜色叠加」选项被启用，图层变成绿色。
