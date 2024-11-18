import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isRasterLayer(selectedLayer)) {
    _.addProperty(selectedLayer, ["ADBE Effect Parade", "ADBE Fill"]);
}
// 结果：如果选中图层为光栅层，会被填充为红色。
