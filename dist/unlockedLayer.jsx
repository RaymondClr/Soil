// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 16:30:33
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function collectionEach(collection, iteratee) {
        var index = 0;
        var length = collection.length + 1;
        while (++index < length) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
    function eachLayers(compItem, iteratee) {
        collectionEach(compItem.layers, function(value, index) {
            if (iteratee(value, index, compItem) === false) {
                return false;
            }
        });
        return compItem;
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    function unlockedLayer(layer, callback) {
        if (!layer.locked) {
            return callback(layer);
        }
        var result;
        layer.locked = false;
        result = callback(layer);
        layer.locked = true;
        return result;
    }
    var activeComp = getActiveComp();
    if (activeComp) {
        eachLayers(activeComp, function(layer) {
            return layer.locked = true;
        });
        eachLayers(activeComp, function(layer) {
            unlockedLayer(layer, function(layer) {});
        });
    }
}).call(this);
