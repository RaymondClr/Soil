// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/18 11:34:23
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
    function eachItemsRight(itemCollection, iteratee) {
        collectionEachRight(itemCollection.items, function(value, index) {
            if (iteratee(value, index, itemCollection) === false) {
                return false;
            }
        });
    }
    function eachOutputModulesRight(renderQueueItem, iteratee) {
        collectionEachRight(renderQueueItem.outputModules, function(value, index) {
            if (iteratee(value, index, renderQueueItem) === false) {
                return false;
            }
        });
    }
    eachItemsRight(app.project.renderQueue, function(renderQueueItem) {
        eachOutputModulesRight(renderQueueItem, function(outputModule, index) {
            if (index > 1) {
                outputModule.remove();
            }
        });
    });
}).call(this);
