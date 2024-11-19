// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/19 18:34:32
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var objectProto = Object.prototype;
    var nativeToString = objectProto.toString;
    var INFINITY = 1 / 0;
    var MAX_ARRAY_LENGTH = 4294967295;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    var charCodeOfDot = ".".charCodeAt(0);
    var reEscapeChar = /\\(\\)?/g;
    var rePropName = /[^.[\]]+|\[(?:([^"'][^[]*)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    function getTag(value) {
        if (value == null) {
            return value === undefined ? "[object Undefined]" : "[object Null]";
        }
        return nativeToString.call(value);
    }
    function isArray(value) {
        return getTag(value) == "[object Array]";
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
    function filter(array, predicate) {
        var index = -1;
        var resIndex = 0;
        var length = array == null ? 0 : array.length;
        var result = [];
        while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
                result[resIndex++] = value;
            }
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
    function isFunction(value) {
        return typeof value === "function";
    }
    function isNil(value) {
        return value == null;
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
    var IS_KEY_LABEL_EXISTS = parseFloat(app.version) > 22.5;
    var PROPERTY_INTERPOLATION_TYPE = [ 6612, 6613, 6614 ];
    function getValidInterpolationTypes(property) {
        return filter(PROPERTY_INTERPOLATION_TYPE, function(enumNumber) {
            return property.isInterpolationTypeValid(enumNumber);
        });
    }
    function isHoldInterpolationTypeOnly(property) {
        var validInterpolationTypes = getValidInterpolationTypes(property);
        return validInterpolationTypes.length === 1 && validInterpolationTypes[0] === KeyframeInterpolationType.HOLD;
    }
    function canSetKeyframeVelocity(property) {
        return !isHoldInterpolationTypeOnly(property);
    }
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
    function eachKeyframeIndexesRight(property, iteratee) {
        var keyIndex = property.numKeys + 1;
        while (--keyIndex) {
            if (iteratee(property, keyIndex) === false) {
                break;
            }
        }
        return property;
    }
    function createGetAppProperty(path) {
        return function() {
            return get(app, path);
        };
    }
    var getFirstSelectedProperty = createGetAppProperty([ "project", "activeItem", "selectedProperties", "0" ]);
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
    function hasKeyframes(property) {
        return isProperty(property) && canSetPropertyValue(property) && property.numKeys > 0;
    }
    function removeKeyframes(property) {
        eachKeyframeIndexesRight(property, function(property, keyIndex) {
            property.removeKey(keyIndex);
        });
        return property;
    }
    function mapTemporalEaseValueToClasses(keyTemporalEaseValue) {
        return map(keyTemporalEaseValue, function(keyframeEase) {
            var speed = keyframeEase.speed;
            var influence = keyframeEase.influence;
            return new KeyframeEase(speed, influence === 0 ? 0.1 : influence);
        });
    }
    function setKeyframeValues(property, keyframeValues) {
        if (keyframeValues.length === 0) {
            return;
        }
        forEach(keyframeValues, function(keyframe) {
            var keyTime = keyframe.keyTime;
            var keyValue = keyframe.keyValue;
            property.setValueAtTime(keyTime, keyValue);
        });
        var isSpatialValue = property.isSpatial && !isColorProperty(property);
        var canSetVelocity = canSetKeyframeVelocity(property);
        forEach(keyframeValues, function(keyframe) {
            var keyIndex = property.nearestKeyIndex(keyframe.keyTime);
            var keyInSpatialTangent = keyframe.keyInSpatialTangent;
            var keyOutSpatialTangent = keyframe.keyOutSpatialTangent;
            var keySpatialAutoBezier = keyframe.keySpatialAutoBezier;
            var keySpatialContinuous = keyframe.keySpatialContinuous;
            var keyInTemporalEase = keyframe.keyInTemporalEase;
            var keyOutTemporalEase = keyframe.keyOutTemporalEase;
            var keyTemporalContinuous = keyframe.keyTemporalContinuous;
            var keyTemporalAutoBezier = keyframe.keyTemporalAutoBezier;
            var keyInInterpolationType = keyframe.keyInInterpolationType;
            var keyOutInterpolationType = keyframe.keyOutInterpolationType;
            var keyRoving = keyframe.keyRoving;
            var keyLabel = keyframe.keyLabel;
            var keySelected = keyframe.keySelected;
            if (isSpatialValue) {
                !isNil(keyInSpatialTangent) && property.setSpatialTangentsAtKey(keyIndex, keyInSpatialTangent, keyOutSpatialTangent);
                !isNil(keySpatialAutoBezier) && property.setSpatialAutoBezierAtKey(keyIndex, keySpatialAutoBezier);
                !isNil(keySpatialContinuous) && property.setSpatialContinuousAtKey(keyIndex, keySpatialContinuous);
                !isNil(keyRoving) && property.setRovingAtKey(keyIndex, keyRoving);
            }
            if (canSetVelocity) {
                !isNil(keyInTemporalEase) && property.setTemporalEaseAtKey(keyIndex, mapTemporalEaseValueToClasses(keyInTemporalEase), !isNil(keyOutTemporalEase) ? mapTemporalEaseValueToClasses(keyOutTemporalEase) : void 0);
            }
            !isNil(keyTemporalContinuous) && property.setTemporalContinuousAtKey(keyIndex, keyTemporalContinuous);
            !isNil(keyTemporalAutoBezier) && property.setTemporalAutoBezierAtKey(keyIndex, keyTemporalAutoBezier);
            !isNil(keyInInterpolationType) && property.setInterpolationTypeAtKey(keyIndex, keyInInterpolationType, !isNil(keyOutInterpolationType) ? keyOutInterpolationType : void 0);
            if (IS_KEY_LABEL_EXISTS) {
                !isNil(keyLabel) && property.setLabelAtKey(keyIndex, keyLabel);
            }
            !isNil(keySelected) && property.setSelectedAtKey(keyIndex, keySelected);
        });
    }
    var selectedProperty = getFirstSelectedProperty();
    if (selectedProperty) {
        if (hasKeyframes(selectedProperty)) {
            var keys = getKeyframeValues(selectedProperty);
            var offsetKeys = map(keys, function(key) {
                key.keyTime += 0.1;
                return key;
            });
            removeKeyframes(selectedProperty);
            setKeyframeValues(selectedProperty, offsetKeys);
        }
    }
}).call(this);
