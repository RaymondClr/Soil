import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isRasterLayer(selectedLayer)) {
    _.addProperty(selectedLayer, ["ADBE Effect Parade", "ADBE Fill"]);
}
// 结果：如果选中图层为光栅层，会被填充为红色。

const selectedLayers = _.getSelectedLayers();
if (selectedLayers) {
    const rasterLayers = _.filter(selectedLayers, _.isRasterLayer);
    const maskGroups = _.map(rasterLayers, (layer) => layer.mask);
    _.each(maskGroups, function (maskGroup) {
        _.eachPropertiesRight(maskGroup, (property) => property.remove());
    });
}
// 结果：如果选中图层中存在光栅层，则图层上的所有 Mask 都会被移除。
