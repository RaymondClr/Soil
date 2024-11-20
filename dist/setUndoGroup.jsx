// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 16:51:45
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
    function setUndoGroup(undoString, func) {
        app.beginUndoGroup(undoString);
        func();
        app.endUndoGroup();
    }
    var activeComp = getActiveComp();
    if (activeComp) {
        setUndoGroup("New Text Layer", function() {
            activeComp.layers.addText("After Effects");
        });
    }
}).call(this);
