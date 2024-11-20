// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 23:32:19
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var nativeJoin = arrayProto.join;
    var pathDesktop = Folder.desktop;
    function createPath() {
        return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
    }
    var targetPath = createPath(pathDesktop.fsName, "Soil.txt");
    alert(targetPath);
}).call(this);
