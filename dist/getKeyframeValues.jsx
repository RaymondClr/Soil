// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/18 17:06:02
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeJoin = arrayProto.join;
    var nativeToString = objectProto.toString;
    var MAX_ARRAY_LENGTH = 4294967295;
    var MAX_SAFE_INTEGER = 9007199254740991;
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
    function stubTrue() {
        return true;
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
    function isFunction(value) {
        return typeof value === "function";
    }
    function isString(value) {
        var type = typeof value;
        return type === "string" || type === "object" && value != null && !isArray(value) && getTag(value) == "[object String]";
    }
    function times(n, iteratee) {
        if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
        }
        var index = -1;
        var length = Math.min(n, MAX_ARRAY_LENGTH);
        var result = new Array(length);
        while (++index < length) {
            result[index] = iteratee(index);
        }
        index = MAX_ARRAY_LENGTH;
        n -= MAX_ARRAY_LENGTH;
        while (++index < n) {
            iteratee(index);
        }
        return result;
    }
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var pathDesktop = Folder.desktop;
    var IS_KEY_LABEL_EXISTS = parseFloat(app.version) > 22.5;
    var jsonEscapes = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        "\v": "\\v",
        '"': '\\"',
        "\\": "\\\\"
    };
    var reEscapedJson = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    var reHasEscapedJson = new RegExp(reEscapedJson.source);
    var isCompItem = createIsNativeType(CompItem);
    function isCustomValueProperty(property) {
        return property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
    }
    function isNoValueProperty(property) {
        return property.propertyValueType === PropertyValueType.NO_VALUE;
    }
    var isProperty = createIsNativeType(Property);
    function canSetPropertyValue(property) {
        return isProperty(property) && !isNoValueProperty(property) && !isCustomValueProperty(property);
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
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
    }
    function getKeyframeValueByIndex(property, keyIndex, isSpatialValue, isCustomValue) {
        return {
            keyTime: property.keyTime(keyIndex),
            keyValue: isCustomValue ? null : property.keyValue(keyIndex),
            keySelected: property.keySelected(keyIndex),
            keyInTemporalEase: property.keyInTemporalEase(keyIndex),
            keyOutTemporalEase: property.keyOutTemporalEase(keyIndex),
            keyTemporalContinuous: property.keyTemporalContinuous(keyIndex),
            keyTemporalAutoBezier: property.keyTemporalAutoBezier(keyIndex),
            keyInInterpolationType: property.keyInInterpolationType(keyIndex),
            keyOutInterpolationType: property.keyOutInterpolationType(keyIndex),
            keyInSpatialTangent: isSpatialValue ? property.keyInSpatialTangent(keyIndex) : null,
            keyOutSpatialTangent: isSpatialValue ? property.keyOutSpatialTangent(keyIndex) : null,
            keySpatialAutoBezier: isSpatialValue ? property.keySpatialAutoBezier(keyIndex) : null,
            keySpatialContinuous: isSpatialValue ? property.keySpatialContinuous(keyIndex) : null,
            keyRoving: isSpatialValue ? property.keyRoving(keyIndex) : null,
            keyLabel: IS_KEY_LABEL_EXISTS ? property.keyLabel(keyIndex) : null
        };
    }
    function isColorProperty(property) {
        return property.propertyValueType === PropertyValueType.COLOR;
    }
    function getKeyframeValues(property, predicate) {
        var func = isFunction(predicate) ? predicate : stubTrue;
        var isSpatialValue = property.isSpatial && !isColorProperty(property);
        var isCustomValue = isCustomValueProperty(property);
        var result = [];
        times(property.numKeys, function(index) {
            var keyIndex = index + 1;
            if (func(property, keyIndex)) {
                result.push(getKeyframeValueByIndex(property, keyIndex, isSpatialValue, isCustomValue));
            }
        });
        return result;
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
    function concatJsonKey(string) {
        return reHasEscapedJson.test(string) ? '"' + escapeJsonKey(string) + '"' : '"' + string + '"';
    }
    function concatSpaceIndent(n) {
        var indent = "", index = -1;
        while (++index < n) {
            indent += " ";
        }
        return indent;
    }
    function escapeJsonKey(string) {
        return string.replace(reEscapedJson, function(matched) {
            var escaped = has(jsonEscapes, matched) ? jsonEscapes[matched] : undefined;
            return isString(escaped) ? escaped : hexEncode(matched);
        });
    }
    function getPrimitiveValue(value) {
        return isDate(value) ? value.toString() : value.valueOf();
    }
    function hexEncode(string) {
        return "\\u" + ("0000" + string.charCodeAt(0).toString(16)).slice(-4);
    }
    function stringify(value, indent) {
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
            partial.push(concatJsonKey(key) + colon + stringifyValue(value, indent, gap));
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
            return concatJsonKey(primitive);

          case "number":
            return isFinite(primitive) ? String(primitive) : "null";

          case "boolean":
            return String(primitive);

          case "object":
            return isArray(primitive) ? stringifyArray(primitive, indent, gap) : stringifyObject(primitive, indent, gap);

          case "function":
            return '"' + escapeJsonKey(primitive.toString()) + '"';

          default:
            return "null";
        }
    }
    function writeJson(path, object, indent) {
        if (indent === void 0) {
            indent = 4;
        }
        return writeFile(path, stringify(object, indent));
    }
    function logJson(object) {
        writeJson(createPath(pathDesktop.toString(), "soil_log.json"), object);
    }
    var activeComp = getActiveComp();
    if (isCompItem(activeComp)) {
        var selectedProperty = activeComp.selectedProperties[0];
        if (canSetPropertyValue(selectedProperty)) {
            var redKeys = getKeyframeValues(selectedProperty, function(property, keyIndex) {
                return property.keyLabel(keyIndex) === 1;
            });
            logJson(redKeys);
        }
    }
}).call(this);
