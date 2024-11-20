// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 22:32:04
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var pathDesktop = Folder.desktop;
    function newFolder(path) {
        return new Folder(path);
    }
    var isFolder = createIsNativeType(Folder);
    function castFolder(folder) {
        return isFolder(folder) ? folder : newFolder(folder);
    }
    function revealFolder(value) {
        var newFolder = castFolder(value);
        return newFolder.exists ? newFolder.execute() : false;
    }
    revealFolder(pathDesktop.fsName);
}).call(this);
