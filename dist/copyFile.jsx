// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/18 09:40:20
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
    function copyFile(sourceFile, newPath) {
        var source = castFile(sourceFile);
        if (!source.exists) {
            return false;
        }
        var target = castFile(newPath);
        if (source.fullName === target.fullName) {
            return false;
        }
        return source.copy(target.fsName);
    }
    function createPath() {
        return nativeJoin.call(arguments, Folder.fs === "Windows" ? "\\" : "/");
    }
    var projectFile = app.project.file;
    if (isFile(projectFile)) {
        var newPath = createPath(pathDesktop.fsName, projectFile.displayName);
        copyFile(projectFile, newPath);
    }
}).call(this);
