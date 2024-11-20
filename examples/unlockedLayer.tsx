import * as _ from "../soil-ts/soil";

const activeComp = _.getActiveComp();
if (activeComp) {
    _.eachLayers(activeComp, (layer) => (layer.locked = true));
    _.eachLayers(activeComp, function (layer) {
        _.unlockedLayer(layer, function (layer) {
            layer.startTime;
        });
    });
}
// 结果：合成中图层全部被锁定后，每个图层的开始时间被设置为 1 秒。
