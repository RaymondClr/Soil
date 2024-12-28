// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/12/28 22:07:17
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeJoin = arrayProto.join;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    var MAX_ARRAY_LENGTH = 4294967295;
    var MAX_SAFE_INTEGER = 9007199254740991;
    function has(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }
    function contains(array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return true;
            }
        }
        return false;
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
    var SPATIAL_PROPERTY_VALUE_TYPE = [ PropertyValueType.ThreeD_SPATIAL, PropertyValueType.TwoD_SPATIAL ];
    var reTemplateString = /\$\{(\d+)\}/g;
    var isCompItem = createIsNativeType(CompItem);
    var isProperty = createIsNativeType(Property);
    function isCustomValueProperty(property) {
        return isProperty(property) && property.propertyValueType === PropertyValueType.CUSTOM_VALUE;
    }
    function isNoValueProperty(property) {
        return isProperty(property) && property.propertyValueType === PropertyValueType.NO_VALUE;
    }
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
    function getKeyframeValueByIndex(property, keyIndex, hasSpatialValue, isCustomValue) {
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
            keyInSpatialTangent: hasSpatialValue ? property.keyInSpatialTangent(keyIndex) : null,
            keyOutSpatialTangent: hasSpatialValue ? property.keyOutSpatialTangent(keyIndex) : null,
            keySpatialAutoBezier: hasSpatialValue ? property.keySpatialAutoBezier(keyIndex) : null,
            keySpatialContinuous: hasSpatialValue ? property.keySpatialContinuous(keyIndex) : null,
            keyRoving: hasSpatialValue ? property.keyRoving(keyIndex) : null,
            keyLabel: IS_KEY_LABEL_EXISTS ? property.keyLabel(keyIndex) : null
        };
    }
    function getKeyframeValues(property, predicate) {
        var func = isFunction(predicate) ? predicate : stubTrue;
        var hasSpatialValue = contains(SPATIAL_PROPERTY_VALUE_TYPE, property.propertyValueType);
        var hasCustomValue = isCustomValueProperty(property);
        var result = [];
        times(property.numKeys, function(index) {
            var keyIndex = index + 1;
            if (func(property, keyIndex)) {
                result.push(getKeyframeValueByIndex(property, keyIndex, hasSpatialValue, hasCustomValue));
            }
        });
        return result;
    }
    function getActiveItem() {
        return app.project.activeItem;
    }
    function getActiveComp() {
        var item = getActiveItem();
        return isCompItem(item) ? item : undefined;
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
    var activeComp = getActiveComp();
    if (isCompItem(activeComp)) {
        var selectedProperty = activeComp.selectedProperties[0];
        if (canSetPropertyValue(selectedProperty)) {
            var redKeys = getKeyframeValues(selectedProperty, function(property, keyIndex) {
                return property.keyLabel(keyIndex) === 1;
            });
            log(redKeys);
        }
    }
}).call(this);
