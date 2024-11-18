import * as _ from "../soil-ts";

_.eachItems(app.project, function (item, index) {
    _.log(`${index} ${item.name}`);
});
// 结果：桌面日志会记录项目中所有 Item 的名称。

_.eachItems(app.project.rootFolder, function (item, index) {
    _.log(`${index} ${item.name}`);
});
// 结果：桌面日志会记录项目中根目录下所有 Item 的名称。

_.eachItems(app.project.renderQueue, function (renderQueueItem, index) {
    _.log(`${index} ${renderQueueItem.comp.name}`);
});
// 结果：桌面日志会记录项目中所有 renderQueueItem 对应的合成名称。
