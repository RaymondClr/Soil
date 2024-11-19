import * as _ from "../soil-ts/soil";

const selectedLayers = _.getSelectedLayers();
// 注意：如果没有活动合成会返回 undefined
if (selectedLayers) {
    _.forEach(selectedLayers, function (layer) {
        layer.label = 2;
    });
}
// 结果：所有选中图层的标签色会被改为黄色。
