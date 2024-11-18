import * as _ from "../soil-ts/soil";

_.eachItemsRight(app.project.renderQueue, function (renderQueueItem) {
    _.eachOutputModulesRight(renderQueueItem, function (outputModule, index) {
        if (index > 1) {
            // 注意：Ae 不允许删除第一个输出模块。
            outputModule.remove();
        }
    });
});
// 结果：项目中的所有输出模块都会被删除（不包含每个渲染项目的第一个输出模块）。
