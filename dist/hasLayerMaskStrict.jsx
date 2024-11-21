// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/21 10:37:17
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeJoin = arrayProto.join;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    var INFINITY = 1 / 0;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var charCodeOfDot = ".".charCodeAt(0);
    var reEscapeChar = /\\(\\)?/g;
    var rePropName = /[^.[\]]+|\[(?:([^"'][^[]*)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
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
    function or() {
        var index = -1;
        var length = arguments.length;
        while (++index < length) {
            if (arguments[index]) {
                return true;
            }
        }
        return false;
    }
    function isKey(value, object) {
        if (isArray(value)) {
            return false;
        }
        var type = typeof value;
        if (type === "number" || type === "boolean" || value == null) {
            return true;
        }
        return or(reIsPlainProp.test(value), !reIsDeepProp.test(value), object != null && value in Object(object));
    }
    function trimString(string) {
        return string.replace(/^\s+/, "").replace(/\s+$/, "");
    }
    function stringToPath(string) {
        var result = [];
        if (string.charCodeAt(0) === charCodeOfDot) {
            result.push("");
        }
        string.replace(rePropName, function(match, expression, quote, subString) {
            var key = match;
            if (quote) {
                key = subString.replace(reEscapeChar, "$1");
            } else if (expression) {
                key = trimString(expression);
            }
            result.push(key);
        });
        return result;
    }
    function castPath(value, object) {
        if (isArray(value)) {
            return value;
        }
        return isKey(value, object) ? [ value ] : stringToPath(value);
    }
    function toKey(value) {
        if (typeof value === "string") {
            return value;
        }
        var result = "".concat(value);
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function baseGet(object, path) {
        var partial = castPath(path, object);
        var index = 0;
        var length = partial.length;
        while (object != null && index < length) {
            object = object[toKey(partial[index++])];
        }
        return index && index == length ? object : undefined;
    }
    function get(object, path, defaultValue) {
        var result = object == null ? undefined : baseGet(object, path);
        return result === undefined ? defaultValue : result;
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
    function eachProperties(propertyGroup, iteratee) {
        var index = 0;
        var length = propertyGroup.numProperties + 1;
        while (++index < length) {
            if (iteratee(propertyGroup.property(index), index, propertyGroup) === false) {
                break;
            }
        }
        return propertyGroup;
    }
    function createGetAppProperty(path) {
        return function() {
            return get(app, path);
        };
    }
    var getFirstSelectedLayer = createGetAppProperty([ "project", "activeItem", "selectedLayers", "0" ]);
    function baseGetLayerMaskProperty(layer) {
        return layer.property("ADBE Mask Parade");
    }
    var isAVLayer = createIsNativeType(AVLayer);
    var isShapeLayer = createIsNativeType(ShapeLayer);
    var isTextLayer = createIsNativeType(TextLayer);
    function isRasterLayer(layer) {
        return isAVLayer(layer) || isShapeLayer(layer) || isTextLayer(layer);
    }
    function hasLayerMaskStrict(layer) {
        if (!isRasterLayer(layer)) {
            return false;
        }
        var maskParade = baseGetLayerMaskProperty(layer);
        var numProperties = maskParade.numProperties;
        if (numProperties === 0) {
            return false;
        }
        var index = 0;
        var length = numProperties + 1;
        while (++index < length) {
            var property = maskParade.property(index);
            if (property.maskMode !== MaskMode.NONE) {
                return true;
            }
        }
        return false;
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
    var selectedLayer = getFirstSelectedLayer();
    if (hasLayerMaskStrict(selectedLayer)) {
        var shapePoints_1 = [];
        eachProperties(selectedLayer.mask, function(maskAtom) {
            if (maskAtom.maskMode !== MaskMode.NONE) {
                shapePoints_1 = shapePoints_1.concat(maskAtom.maskPath.value.vertices);
            }
        });
        var xPoints = map(shapePoints_1, function(point) {
            return point[0];
        });
        var yPoints = map(shapePoints_1, function(point) {
            return point[1];
        });
        var minX = Math.min.apply(null, xPoints);
        var minY = Math.min.apply(null, yPoints);
        var maxX = Math.max.apply(null, xPoints);
        var maxY = Math.max.apply(null, yPoints);
        var maskSourceRect = {
            top: minY,
            left: minX,
            width: maxX - minX,
            height: maxY - minY
        };
        log(maskSourceRect);
    }
}).call(this);
