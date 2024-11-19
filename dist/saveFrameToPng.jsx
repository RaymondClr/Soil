// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/19 18:18:31
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var nativeJoin = arrayProto.join;
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var pathDesktop = Folder.desktop;
    var isCompItem = createIsNativeType(CompItem);
    var isFile = createIsNativeType(File);
    function newFile(path) {
        return new File(path);
    }
    function castFile(file) {
        return isFile(file) ? file : newFile(file);
    }
    function createPath() {
        return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    function saveFrameToPng(file, compItem, time) {
        if (time === void 0) {
            time = compItem.time;
        }
        compItem.saveFrameToPng(time, castFile(file));
    }
    var activeComp = getActiveComp();
    if (activeComp) {
        var outputPath = createPath(pathDesktop.fsName, "frame.png");
        saveFrameToPng(outputPath, activeComp, 0);
    }
}).call(this);
