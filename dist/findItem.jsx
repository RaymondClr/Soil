// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 11:41:20
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function findItem(collection, iteratee) {
        var index = 0;
        var length = collection.numItems + 1;
        var items = collection.items;
        while (++index < length) {
            var item = items[index];
            if (iteratee(item, index, collection)) {
                return item;
            }
        }
    }
    var compItem = findItem(app.project, isCompItem);
    if (compItem) {
        alert(compItem.name);
    }
}).call(this);
