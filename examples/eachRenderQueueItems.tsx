import * as _ from "../soil-ts/soil";

_.eachRenderQueueItems(app.project.renderQueue, function (renderQueueItem, index) {
    _.log(`${index} ${renderQueueItem.status}`);
});
// 结果：桌面日志会记录项目中所有渲染队列 Item 的渲染状态。
