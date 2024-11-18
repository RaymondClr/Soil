import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    _.eachLayers(activeComp, function (layer, index) {
        _.log(`${index + 1} ${layer.name}`);
    });
}
// 结果：桌面日志会记录活动合成中的所有图层名称。
