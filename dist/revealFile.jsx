// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 22:32:04
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isFile = createIsNativeType(File);
    function newFile(path) {
        return new File(path);
    }
    function castFile(file) {
        return isFile(file) ? file : newFile(file);
    }
    function newFolder(path) {
        return new Folder(path);
    }
    var isFolder = createIsNativeType(Folder);
    function castFolder(folder) {
        return isFolder(folder) ? folder : newFolder(folder);
    }
    function revealFile(value) {
        var file = castFile(value);
        if (!file.exists) {
            return false;
        }
        var folder = castFolder(file.path);
        return folder.execute();
    }
    var projectPath = app.project.file;
    if (projectPath) {
        revealFile(projectPath);
    }
}).call(this);
