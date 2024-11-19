// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/19 18:18:31
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var nativeJoin = arrayProto.join;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    var nativeFloor = Math.floor;
    var INFINITY = 1 / 0;
    var MAX_ARRAY_LENGTH = 4294967295;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboMarksExtendedRange = "\\u1ab0-\\u1aff";
    var rsComboMarksSupplementRange = "\\u1dc0-\\u1dff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[".concat(rsAstralRange, "]");
    var rsCombo = "[".concat(rsComboRange, "]");
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:".concat(rsCombo, "|").concat(rsFitz, ")");
    var rsNonAstral = "[^".concat(rsAstralRange, "]");
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[".concat(rsZWJ + rsAstralRange + rsComboRange + rsVarRange, "]"));
    var reOptMod = "".concat(rsModifier, "?");
    var rsOptVar = "[".concat(rsVarRange, "]?");
    var rsOptJoin = "(?:".concat(rsZWJ, "(?:").concat([ rsNonAstral, rsRegional, rsSurrPair ].join("|"), ")").concat(rsOptVar + reOptMod, ")*");
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsNonAstralCombo = "".concat(rsNonAstral).concat(rsCombo, "?");
    var rsSymbol = "(?:".concat([ rsNonAstralCombo, rsCombo, rsRegional, rsSurrPair, rsAstral ].join("|"), ")");
    var reUnicode = RegExp("".concat(rsFitz, "(?=").concat(rsFitz, ")|").concat(rsSymbol + rsSeq), "g");
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
    function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
            return [];
        }
        start = start == null ? 0 : start;
        end = end === undefined ? length : end;
        if (start < 0) {
            start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
            end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var index = -1;
        var result = new Array(length);
        while (++index < length) {
            result[index] = array[index + start];
        }
        return result;
    }
    function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined ? length : end;
        return !start && end >= length ? array : slice(array, start, end);
    }
    function hasUnicode(string) {
        return reHasUnicode.test(string);
    }
    function asciiToArray(string) {
        return string.split("");
    }
    function unicodeToArray(string) {
        return string.match(reUnicode) || [];
    }
    function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
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
    function baseToString(value) {
        if (typeof value === "string") {
            return value;
        }
        if (isArray(value)) {
            return "".concat(map(value, baseToString));
        }
        var result = "".concat(value);
        return result === "0" && 1 / value === -INFINITY ? "-0" : result;
    }
    function asciiSize(string) {
        return string.length;
    }
    function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
            ++result;
        }
        return result;
    }
    function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function repeat(string, n) {
        var result = "";
        if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result;
        }
        do {
            if (n % 2) {
                result += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
                string += string;
            }
        } while (n);
        return result;
    }
    function createPadding(length, chars) {
        chars = chars === undefined ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
            return charsLength ? repeat(chars, length) : chars;
        }
        var result = repeat(chars, Math.ceil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length);
    }
    function padStart(string, length, chars) {
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string || "";
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
    var reTemplateString = /\$\{(\d+)\}/g;
    var isCompItem = createIsNativeType(CompItem);
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
    function saveFrameToPng(file, compItem, time) {
        if (time === void 0) {
            time = compItem.time;
        }
        compItem.saveFrameToPng(time, castFile(file));
    }
    function secondToFrames(seconds, frameRate) {
        return nativeFloor(seconds * frameRate);
    }
    function savePngSequence(compItem, outputPath, prefix) {
        if (prefix === void 0) {
            prefix = compItem.name;
        }
        var folder = castFolder(outputPath);
        if (!folder.exists) {
            folder.create();
        }
        var folderPath = folder.fsName;
        var frameRate = compItem.frameRate;
        var start = secondToFrames(compItem.workAreaStart, frameRate);
        var duraion = secondToFrames(compItem.workAreaDuration, frameRate);
        var frameDigtis = String(duraion).length;
        var frameDuration = compItem.frameDuration;
        var files = times(duraion, function(index) {
            var sequenceNumber = padStart(String(start + index), frameDigtis, "0");
            return new File(createPath(folderPath, templateString("${0}_${1}.png", prefix, sequenceNumber)));
        });
        forEach(files, function(file, index) {
            saveFrameToPng(file, compItem, index * frameDuration);
        });
    }
    var activeComp = getActiveComp();
    if (activeComp) {
        var outputPath = createPath(pathDesktop.fsName, "Sequence");
        savePngSequence(activeComp, outputPath, "image");
    }
}).call(this);
