// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/18 11:17:38
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var nativeJoin = arrayProto.join;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    function getTag(value) {
        if (value == null) {
            return value === undefined ? "[object Undefined]" : "[object Null]";
        }
        return nativeToString.call(value);
    }
    function isArray(value) {
        return getTag(value) == "[object Array]";
    }
    function map(array, iteratee) {
        var index = -1;
        var length = array == null ? 0 : array.length;
        var result = new Array(length);
        while (++index < length) {
            result[index] = iteratee(array[index], index, array);
        }
        return result;
    }
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var pathDesktop = Folder.desktop;
    var reTemplateString = /\$\{(\d+)\}/g;
    function collectionEach(collection, iteratee) {
        var index = 0;
        var length = collection.length + 1;
        while (++index < length) {
            if (iteratee(collection[index], index, collection) === false) {
                break;
            }
        }
        return collection;
    }
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
    function newFolder(path) {
        return new Folder(path);
    }
    function eachItems(itemCollection, iteratee) {
        collectionEach(itemCollection.items, function(value, index) {
            if (iteratee(value, index, itemCollection) === false) {
                return false;
            }
        });
    }
    function eachOutputModules(renderQueueItem, iteratee) {
        collectionEach(renderQueueItem.outputModules, function(value, index) {
            if (iteratee(value, index, renderQueueItem) === false) {
                return false;
            }
        });
    }
    function templateString(string) {
        var values = nativeSlice.call(arguments, 1);
        return string.replace(reTemplateString, function(matched, $1) {
            return values[Number($1)];
        });
    }
    function writeFile(path, content, encoding, mode) {
        if (encoding === void 0) {
            encoding = "utf-8";
        }
        if (mode === void 0) {
            mode = "w";
        }
        var file = castFile(path);
        file.encoding = encoding;
        var fileFolder = newFolder(file.path);
        if (!fileFolder.exists) {
            fileFolder.create();
        }
        return file.open(mode) && file.write(content) && file.close();
    }
    function formatArrayItemLog(item, index) {
        return templateString("${0}: ${1}", String(index), String(item));
    }
    function formatArrayLog(array) {
        var source = array.toSource();
        var title = source.length > 200 ? "[...]" : source;
        return templateString(">(${0})", String(array.length)) + title + "\n" + map(array, formatArrayItemLog).join("\n");
    }
    function log(object, rawMode) {
        var content = !rawMode && isArray(object) ? formatArrayLog(object) : String(object);
        var logFile = createPath(pathDesktop.toString(), "soil_log.txt");
        writeFile(logFile, content + "\n", undefined, "a");
        return content;
    }
    eachItems(app.project.renderQueue, function(renderQueueItem, index) {
        eachOutputModules(renderQueueItem, function(outputModule) {
            log("".concat(index, " ").concat(outputModule.name));
        });
    });
}).call(this);