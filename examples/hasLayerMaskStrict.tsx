import * as _ from "../soil-ts";

const selectedLayer = _.getFirstSelectedLayer();
if (_.hasLayerMaskStrict(selectedLayer)) {
    let shapePoints: Shape["vertices"] = [];
    _.eachProperties(selectedLayer.mask, function (maskAtom: MaskPropertyGroup) {
        if (maskAtom.maskMode !== MaskMode.NONE) {
            shapePoints = shapePoints.concat(maskAtom.maskPath.value.vertices);
        }
    });
    const xPoints = _.map(shapePoints, (point) => point[0]);
    const yPoints = _.map(shapePoints, (point) => point[1]);
    const minX = Math.min.apply(null, xPoints);
    const minY = Math.min.apply(null, yPoints);
    const maxX = Math.max.apply(null, xPoints);
    const maxY = Math.max.apply(null, yPoints);
    const maskSourceRect = { top: minY, left: minX, width: maxX - minX, height: maxY - minY };
    _.log(maskSourceRect);
}
// 结果：选中图层存在 Mask 且 MaskMode 至少有一个不是 MaskMode.NONE 的前提下，桌面日志会记录所有 mask 组合后的 SoureRect。
