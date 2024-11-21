// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 11:00:32
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
    function moveFile(path, newPath) {
        var file = castFile(path);
        return file.exists ? file.rename(newPath) : false;
    }
    var before = createPath(pathDesktop.fsName, "Foo", "Soil.txt");
    var after = createPath(pathDesktop.fsName, "Bar", "Soil.txt");
    moveFile(before, after);
}).call(this);
