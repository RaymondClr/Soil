// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 09:41:49
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
    function importFile(path, importType, sequence) {
        if (sequence === void 0) {
            sequence = false;
        }
        var file = castFile(path);
        var options = new ImportOptions(file);
        if (!options.canImportAs(importType)) {
            return null;
        }
        options.importAs = importType;
        options.sequence = sequence;
        return app.project.importFile(options);
    }
    function importAsComp(file, sequence) {
        return importFile(file, ImportAsType.COMP, sequence);
    }
    var psdPath = createPath(pathDesktop.fsName, "Soil.psd");
    importAsComp(psdPath, false);
}).call(this);
