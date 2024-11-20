// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 22:32:04
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var nativeFloor = Math.floor;
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
    function secondToFrames(seconds, frameRate) {
        return nativeFloor(seconds * frameRate);
    }
    var activeComp = getActiveComp();
    if (activeComp) {
        var second = activeComp.duration;
        var frameRate = activeComp.frameRate;
        var frames = secondToFrames(second, frameRate);
        alert(frames);
    }
}).call(this);
