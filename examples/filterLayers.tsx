import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    const shapeLayers = _.filterLayers(activeComp, _.isShapeLayer);
    // 注意：找不到会返回 undefined。
    _.log(_.map(shapeLayers, (layer) => layer.name));
}
// 结果：桌面日志会记录当前活动合成中所有形状图层的名称。
