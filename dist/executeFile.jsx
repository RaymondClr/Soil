// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 11:12:56
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
    function executeFile(path) {
        var file = castFile(path);
        if (!file.exists) {
            return false;
        }
        return file.execute();
    }
    executeFile("C:\\Windows\\System32\\notepad.exe");
}).call(this);
