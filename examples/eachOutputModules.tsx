import * as _ from "../soil-ts/soil";

_.eachItems(app.project.renderQueue, function (renderQueueItem, index) {
    _.eachOutputModules(renderQueueItem, function (outputModule) {
        _.log(`${index} ${outputModule.name}`);
    });
});
// 结果：桌面日志会记录项目中所有输出模块的名称。
