// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/18 11:22:07
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function collectionEachRight(collection, iteratee) {
        var index = collection.length + 1;
        while (--index) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
    function eachLayersRight(compItem, iteratee) {
        collectionEachRight(compItem.layers, function(value, index) {
            if (iteratee(value, index, compItem) === false) {
                return false;
            }
        });
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    var activeComp = getActiveComp();
    if (isCompItem(activeComp)) {
        eachLayersRight(activeComp, function(layer) {
            layer.remove();
        });
    }
}).call(this);
