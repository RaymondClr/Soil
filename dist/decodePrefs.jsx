// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/20 22:53:00
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
    function HexToDecimal(hex) {
        return parseInt(hex, 16);
    }
    function charToHex(character) {
        return character.charCodeAt(0).toString(16);
    }
    function decodePrefs(string) {
        var hexString = string.replace(/\n/g, "").replace(/"([^"]+)"/g, function(match, $1) {
            return map($1.split(""), charToHex).join("");
        });
        var dataBlock = hexString.match(/([\W\w]{4})/g);
        return dataBlock === null ? [] : map(dataBlock, HexToDecimal);
    }
    function newFolder(path) {
        return new Folder(path);
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
    var compositionSettings6 = '00000000000000000000"u0"00000BB50000000000000BB503090309001DF8"R"0000000A0000000B0001000100000000B4000000"h"01000000000000"h"01000000000080000000100000000000000000';
    log(decodePrefs(compositionSettings6));
}).call(this);
