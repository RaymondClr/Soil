import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    const shapeLayer = _.findLayer(activeComp, _.isShapeLayer);
    // 注意：找不到会返回 undefined。
    if (shapeLayer) {
        alert(shapeLayer.name);
    }
}
// 结果：如果活动合成中存在形状层，那么弹窗会显示从上往下第一个形状图层的名称。
