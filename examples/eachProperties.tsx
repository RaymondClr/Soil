import * as _ from "../soil-ts/soil";

const selectedLayer = _.getFirstSelectedLayer();
if (_.isLayer(selectedLayer)) {
    _.eachProperties(selectedLayer, function (property) {
        _.log(`${property.propertyIndex} | ${property.name} | ${property.matchName}`);
    });
}
// 结果：桌面日志会记录选中图层的的所有根 Property 的名称和其对应的匹配名。

if (_.hasLayerMask(selectedLayer)) {
    _.eachProperties(selectedLayer.mask, function (maskAtom: MaskPropertyGroup) {
        // 当 Property 组的父子层级固定时，建议手动收窄谓词函数的参数类型，从而获得更精确的类型提示。
        _.log(maskAtom.maskPath.value.vertices);
    });
}
// 结果：选中图层存在 Mask 的前提下，桌面日志会记录所有 mask 的点数据。
