import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (_.isCompItem(activeComp)) {
    _.eachLayersRight(activeComp, function (layer) {
        layer.remove();
    });
}
// 结果：活动合成中的所有图层都会被删除。
