// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 12:03:37
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeJoin = arrayProto.join;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    function has(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }
    function getTag(value) {
        if (value == null) {
            return value === undefined ? "[object Undefined]" : "[object Null]";
        }
        return nativeToString.call(value);
    }
    function isArray(value) {
        return getTag(value) == "[object Array]";
    }
    function isObjectLike(value) {
        return typeof value === "object" && value !== null;
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
    function forEach(array, iteratee) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    function forOwn(object, iteratee) {
        for (var key in object) {
            if (has(object, key)) {
                if (iteratee(object[key], key, object) === false) {
                    break;
                }
            }
        }
        return object;
    }
    function isDate(value) {
        return isObjectLike(value) && getTag(value) == "[object Date]";
    }
    function isString(value) {
        var type = typeof value;
        return type === "string" || type === "object" && value != null && !isArray(value) && getTag(value) == "[object String]";
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
    function newFolder(path) {
        return new Folder(path);
    }
    var isFolder = createIsNativeType(Folder);
    function castFolder(folder) {
        return isFolder(folder) ? folder : newFolder(folder);
    }
    function getFiles(path, mask) {
        var folder = castFolder(path);
        if (!folder.exists) {
            return [];
        }
        return folder.getFiles(mask);
    }
    function eachFiles(folder, iteratee) {
        var resIndex = 0;
        forEach(getFiles(folder), function(unknownFile, index, files) {
            if (isFile(unknownFile)) {
                if (iteratee(unknownFile, resIndex++, files) === false) {
                    return false;
                }
            }
        });
        return folder;
    }
    function filterFiles(folder, predicate) {
        var result = [];
        eachFiles(folder, function(file, index, files) {
            if (predicate(file, index, files)) {
                result.push(file);
            }
        });
        return result;
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
    function concatJson(head, partial, gap, mind, tail) {
        return gap ? head + "\n" + gap + partial.join(",\n" + gap) + "\n" + mind + tail : head + partial.join(",") + tail;
    }
    function concatSpaceIndent(n) {
        var indent = "", index = -1;
        while (++index < n) {
            indent += " ";
        }
        return indent;
    }
    function getPrimitiveValue(value) {
        return isDate(value) ? value.toString() : value.valueOf();
    }
    function stringifyLog(value, indent) {
        if (indent === void 0) {
            indent = 4;
        }
        return stringifyValue(value, isString(indent) ? indent : concatSpaceIndent(indent), "");
    }
    function stringifyArray(array, indent, gap) {
        var mind = gap;
        gap += indent;
        var partial = [];
        forEach(array, function(value, index) {
            partial[index] = stringifyValue(value, indent, gap);
        });
        return partial.length === 0 ? "[]" : concatJson("[", partial, gap, mind, "]");
    }
    function stringifyObject(object, indent, gap) {
        var mind = gap;
        gap += indent;
        var colon = gap ? ": " : ":";
        var partial = [];
        forOwn(object, function(value, key) {
            partial.push(key + colon + stringifyValue(value, indent, gap));
        });
        return partial.length === 0 ? "{}" : concatJson("{", partial, gap, mind, "}");
    }
    function stringifyValue(value, indent, gap) {
        if (value == null) {
            return "null";
        }
        var primitive = getPrimitiveValue(value);
        switch (typeof primitive) {
          case "string":
            return "'" + primitive + "'";

          case "number":
            return String(primitive);

          case "boolean":
            return String(primitive);

          case "object":
            return isArray(primitive) ? stringifyArray(primitive, indent, gap) : stringifyObject(primitive, indent, gap);

          case "function":
            return '"' + primitive.toString() + '"';

          default:
            return String(primitive);
        }
    }
    function formatArrayItemLog(item, index) {
        return templateString("${0}: ${1}", String(index), stringifyLog(item));
    }
    function formatArrayLog(array) {
        var source = array.toSource();
        var title = source.length > 200 ? "[...]" : source;
        return templateString(">(${0})", String(array.length)) + title + "\n" + map(array, formatArrayItemLog).join("\n");
    }
    function log(value, rawMode) {
        var content = !rawMode && isArray(value) ? formatArrayLog(value) : stringifyLog(value);
        var logFile = createPath(pathDesktop.toString(), "soil_log.txt");
        writeFile(logFile, content + "\n", undefined, "a");
        return content;
    }
    log(filterFiles(pathDesktop.fsName, function(file) {
        return file.displayName[0] === "G";
    }));
}).call(this);
