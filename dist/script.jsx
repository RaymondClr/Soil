// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2023/7/13 22:58:26
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isCompItem = createIsNativeType(CompItem);
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    var activeItem = getActiveComp();
    if (activeItem) {
        alert(activeItem.name);
    }
}).call(this);
