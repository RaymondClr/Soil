// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 12:11:45
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
    function createPath() {
        return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
    }
    function newFolder(path) {
        return new Folder(path);
    }
    var isFolder = createIsNativeType(Folder);
    function castFolder(folder) {
        return isFolder(folder) ? folder : newFolder(folder);
    }
    function deleteFolder(path) {
        var folder = castFolder(path);
        if (!folder.exists) {
            return true;
        }
        return folder.remove();
    }
    var targetPath = createPath(pathDesktop.fsName, "Soil");
    var targetFolder = new Folder(targetPath);
    if (targetFolder.exists) {
        deleteFolder(targetFolder);
    }
}).call(this);
