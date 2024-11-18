import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isLayer(selectedLayer)) {
    _.eachProperties(selectedLayer, function (property) {
        _.log(`${property.propertyIndex} | ${property.name} | ${property.matchName}`);
    });
}
// 结果：桌面日志会记录选中图层的的所有根 Property 的名称和其对应的匹配名。
