// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/19 15:15:36
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function collectionEachRight(collection, iteratee) {
        var index = collection.length + 1;
        while (--index) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
    function eachRenderQueueItemsRight(renderQueue, iteratee) {
        collectionEachRight(renderQueue.items, function(value, index) {
            if (iteratee(value, index, renderQueue) === false) {
                return false;
            }
        });
        return renderQueue;
    }
    eachRenderQueueItemsRight(app.project.renderQueue, function(renderQueueItem) {
        renderQueueItem.remove();
    });
}).call(this);
