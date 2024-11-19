import * as _ from "../soil-ts/soil";

_.eachRenderQueueItemsRight(app.project.renderQueue, function (renderQueueItem) {
    renderQueueItem.remove();
});
// 结果：Ae 渲染队列的所有渲染子项都会被删除。
