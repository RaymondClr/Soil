// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - 2024/11/22 23:05:40
// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）
// 爱发电：https://afdian.net/a/raymondclr

(function() {
    var arrayProto = Array.prototype;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeConcat = arrayProto.concat;
    var nativeSlice = arrayProto.slice;
    var nativeToString = objectProto.toString;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reFlags = /\w*$/;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function has(object, key) {
        return object != null && hasOwnProperty.call(object, key);
    }
    function isObject(value) {
        if (value == null) {
            return false;
        }
        var type = typeof value;
        return type === "object" || type === "function";
    }
    function assign(object, source) {
        var result = Object(object);
        if (isObject(source)) {
            for (var key in source) {
                if (has(source, key)) {
                    result[key] = source[key];
                }
            }
        }
        return result;
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
    function isArguments(value) {
        return isObjectLike(value) && getTag(value) == "[object Arguments]";
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
    function stubFalse() {
        return false;
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
    function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && or(type === "number", reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value);
        var isArg = !isArr && isArguments(value);
        var skipIndexes = isArr || isArg;
        var length = value.length;
        var result = new Array(skipIndexes ? length : 0);
        var index = skipIndexes ? -1 : length;
        while (++index < length) {
            result[index] = "".concat(index);
        }
        for (var key in value) {
            if ((inherited || has(value, key)) && !(skipIndexes && (key === "length" || isIndex(key, length)))) {
                result.push(key);
            }
        }
        return result;
    }
    function isLength(value) {
        return typeof value === "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    function isArrayLike(value) {
        return value != null && typeof value !== "function" && isLength(value.length);
    }
    function keys(object) {
        if (object == null) {
            return [];
        }
        if (isArrayLike(object)) {
            return arrayLikeKeys(object);
        }
        var result = [];
        for (var key in object) {
            if (has(object, key)) {
                result.push(key);
            }
        }
        return result;
    }
    function arrayEach(array, iteratee) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (iteratee(array[index], index, array) === false) {
                break;
            }
        }
        return array;
    }
    function baseFor(object, iteratee, keysFunc) {
        var iterable = Object(object);
        var props = keysFunc(object);
        var length = props.length;
        var index = -1;
        while (length--) {
            var key = props[++index];
            if (iteratee(iterable[key], key, iterable) === false) {
                break;
            }
        }
        return object;
    }
    function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
    }
    function cloneRegExp(regexp) {
        var matched = reFlags.exec(regexp.toString());
        var flags = matched === null ? undefined : matched.toString();
        var RegExpCtor = regexp.constructor;
        var result = new RegExpCtor(regexp.source, flags);
        result.lastIndex = regexp.lastIndex;
        return result;
    }
    function copyArray(source, array) {
        var index = -1;
        var length = source.length;
        array || (array = new Array(length));
        while (++index < length) {
            array[index] = source[index];
        }
        return array;
    }
    function copyObject(source, props, object) {
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
            var key = props[index];
            object[key] = source[key];
        }
        return object;
    }
    function initCloneObject(object) {
        var Ctor = object.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor ? new Ctor : {};
    }
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var stringTag = "[object String]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[stringTag] = true;
    cloneableTags[errorTag] = false;
    function initCloneByTag(object, tag) {
        var Ctor = object.constructor;
        switch (tag) {
          case boolTag:
          case dateTag:
            return new Ctor(object.valueOf());

          case numberTag:
          case stringTag:
            return new Ctor(object);

          case regexpTag:
            return cloneRegExp(object);
        }
    }
    function isRegExpExecArray(array) {
        return typeof array[0] === "string" && has(array, "index");
    }
    function initCloneArray(array) {
        var length = array.length;
        var Ctor = array.constructor;
        var result = new Ctor(length);
        if (length && isRegExpExecArray(array)) {
            result.index = array.index;
            result.input = array.input;
        }
        return result;
    }
    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
        var result;
        if (customizer) {
            result = object ? customizer(value, key, object) : customizer(value);
        }
        if (result !== undefined) {
            return result;
        }
        if (!isObject(value)) {
            return value;
        }
        var isArr = isArray(value);
        var tag = getTag(value);
        if (isArr) {
            result = initCloneArray(value);
            if (!isDeep) {
                return copyArray(value, result);
            }
        } else {
            var isFunc = typeof value === "function";
            if (or(tag == objectTag, tag == argsTag, isFunc && !object)) {
                result = isFunc ? {} : initCloneObject(value);
                if (!isDeep) {
                    return copyObject(value, keys(value), result);
                }
            } else {
                return cloneableTags[tag] ? initCloneByTag(value, tag) : object ? value : {};
            }
        }
        stackA || (stackA = []);
        stackB || (stackB = []);
        var length = stackA.length;
        while (length--) {
            if (stackA[length] == value) {
                return stackB[length];
            }
        }
        stackA.push(value);
        stackB.push(result);
        if (isArr) {
            arrayEach(value, function(subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
        } else {
            baseForOwn(value, function(subValue, key) {
                result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
            });
        }
        return result;
    }
    function clone(value) {
        return baseClone(value, false);
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
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length;
        var index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
            if (predicate(array[index], index, array)) {
                return index;
            }
        }
        return -1;
    }
    function baseIsNaN(value) {
        return value !== value;
    }
    function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1;
        var length = array.length;
        while (++index < length) {
            if (array[index] === value) {
                return index;
            }
        }
        return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, target, comparator) {
        if (array == null) {
            return false;
        }
        var index = -1;
        var length = array.length;
        while (++index < length) {
            var value = array[index];
            if (comparator(target, value)) {
                return true;
            }
        }
        return false;
    }
    function some(array, predicate) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
            if (predicate(array[index], index, array)) {
                return true;
            }
        }
        return false;
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
    function isFunction(value) {
        return typeof value === "function";
    }
    function isNil(value) {
        return value == null;
    }
    function isNull(value) {
        return value === null;
    }
    function baseUniq(array, iteratee, comparator) {
        var index = -1;
        var includes = arrayIncludes;
        var isCommon = true;
        var result = [];
        var seen = result;
        var hasIteratee = isFunction(iteratee);
        var hasComparator = isFunction(comparator);
        var length = array.length;
        if (hasComparator) {
            isCommon = false;
            includes = arrayIncludesWith;
        } else {
            seen = hasIteratee ? [] : result;
        }
        outer: while (++index < length) {
            var value = array[index];
            var computed = hasIteratee ? iteratee(value) : value;
            value = hasComparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                    if (seen[seenIndex] === computed) {
                        continue outer;
                    }
                }
                if (hasIteratee) {
                    seen.push(computed);
                }
                result.push(value);
            } else if (!includes(seen, computed, comparator)) {
                if (seen !== result) {
                    seen.push(computed);
                }
                result.push(value);
            }
        }
        return result;
    }
    function uniq(array) {
        return array != null && array.length ? baseUniq(array) : [];
    }
    function createIsNativeType(nativeObject) {
        return function(value) {
            return value != null && value instanceof nativeObject;
        };
    }
    var isPanel = createIsNativeType(Panel);
    var isWindow = createIsNativeType(Window);
    var root = this;
    var global = $.global;
    var tree = {
        version: "beta 1.0.0",
        parse: runInContext,
        windows: []
    };
    var layoutModeFlags = [ 0, 1, 2 ];
    var validMainContainerTypeName = [ "dialog", "palette", "window" ];
    var mainContainerDefault = {
        dockable: true,
        show: true,
        singleton: false
    };
    var controlParamRef = {
        button: 3,
        checkbox: 3,
        dropdownlist: 3,
        edittext: 3,
        iconbutton: 3,
        image: 3,
        listbox: 3,
        progressbar: 4,
        radiobutton: 3,
        scrollbar: 5,
        slider: 5,
        statictext: 3,
        treeview: 3
    };
    var containerParamRef = {
        group: 2,
        panel: 3,
        tab: 3,
        tabbedpanel: 3
    };
    var elementTypeFlags = {
        button: "A",
        checkbox: "B",
        dialog: "C",
        dropdownlist: "D",
        edittext: "E",
        group: "G",
        iconbutton: "H",
        image: "I",
        item: "J",
        listbox: "K",
        node: "L",
        palette: "M",
        panel: "N",
        progressbar: "O",
        radiobutton: "P",
        scrollbar: "Q",
        slider: "R",
        statictext: "S",
        tab: "T",
        tabbedpanel: "U",
        treeview: "V",
        window: "W"
    };
    var reCombination = /[CGMNTW][ABDEFGHIKNOPQRSUV]|[DK]J|[VL][LJ]|UT/, reContainer = /[DGKLNTUV]/, reListItemContainer = /[DKLV]/, reSelectableElement = /[DKUV]/, reNativeContainer = /[GNTU]/, reNativeControl = /[ABDEHIKOPQRSV]/;
    var isContainer = createIsElementFlag(reContainer), isListItemContainer = createIsElementFlag(reListItemContainer), isNativeContainer = createIsElementFlag(reNativeContainer), isNativeControl = createIsElementFlag(reNativeControl), isSelectableElement = createIsElementFlag(reSelectableElement);
    function addContainer(container, value, flag, collector) {
        return flag == "node" ? addNodeContainer(container, value, flag, collector) : addGeneralContainer(container, value, flag, collector);
    }
    function addControl(container, value, key, collector) {
        var element = isListItemContainer(container.type) ? addListItem(container, value) : addGeneralControl(container, value, key);
        assign(element, getElementStyle(value));
    }
    function addGeneralContainer(container, value, flag, collector) {
        var style = getElementStyle(value);
        var newContainer = nativeAddContainer(container, flag, assignElementParam(value, flag));
        if (isSelectableElement(flag) && has(style, "selection")) {
            var value_1 = {
                container: newContainer,
                itemIndex: style.selection
            };
            collector.selectableElement.push(value_1);
            delete style["selection"];
            return assign(newContainer, style);
        }
        assign(newContainer, style);
        return newContainer;
    }
    function addGeneralControl(container, value, flag, collector) {
        return nativeAddControl(container, flag, assignElementParam(value, flag));
    }
    function addGetElementMethods(constructors) {
        forEach(constructors, function(constructor) {
            var prototype = constructor.prototype;
            prototype.getElementById = getElementById;
            prototype.getElementsByName = getElementsByName;
            prototype.getElementsByType = getElementsByType;
            freezeProperty(prototype, "getElementById");
            freezeProperty(prototype, "getElementsByName");
            freezeProperty(prototype, "getElementsByType");
        });
    }
    function addListItem(container, value, flag, collector) {
        return nativeAddNodeItem(container, getListItemParam(value));
    }
    function addNodeContainer(container, value, flag, collector) {
        var style = getElementStyle(value);
        var node = nativeAddNode(container, getListItemParam(value));
        if (style.expanded) {
            collector.nodeItems.push(node);
        }
        delete style["expanded"];
        assign(node, style);
        return node;
    }
    function assignContext(global, dockable, isSingletonWindow) {
        if (isSingletonWindow || !dockable) {
            return Window;
        }
        if (isValidContext(root)) {
            return root;
        }
        return isValidContext(global) ? global : Window;
    }
    function assignElementParam(value, flag) {
        return assignUniqueName(getElementParam(value), flag);
    }
    function assignLayoutMode(setAll, setAlone) {
        if (contains(layoutModeFlags, setAlone)) {
            return setAlone;
        }
        if (contains(layoutModeFlags, setAll)) {
            return setAll;
        }
        return 0;
    }
    function assignUniqueName(param, flag) {
        var name = param[0];
        if (isNil(name)) {
            return param;
        }
        var location = getCreationPropertiesLocation(flag);
        var creationProperties = param[location];
        if (isObject(creationProperties)) {
            if (has(creationProperties, "name")) {
                return param;
            } else {
                param[location].name = name;
                return param;
            }
        } else {
            param[location] = {
                name: name
            };
            return param;
        }
    }
    function assignWindowType(param) {
        var type = String(param[0]);
        param[0] = contains(validMainContainerTypeName, type) ? type : "palette";
        return param;
    }
    function baseGet(object, key) {
        return isNil(object) ? undefined : object[key];
    }
    function baseGetConfig(value) {
        return baseGet(value, "config");
    }
    function baseGetElementId(element) {
        var properties = element.properties;
        return properties && properties.name;
    }
    function baseGetListItemParam(value) {
        return baseGet(value, "param");
    }
    function baseGetParam(value) {
        var result = baseGet(value, "param");
        return isArray(result) ? mapNullToUndefined(result) : [];
    }
    function baseGetStyle(value) {
        var result = baseGet(value, "style");
        return isObject(result) ? result : {};
    }
    function buildNativeWindow(resource, context, showWindow, layoutMode) {
        var container = bulidElements(resource, context);
        initLayout(container, layoutMode);
        if (isWindow(container) && showWindow) {
            container.show();
        }
        return container;
    }
    function buildSingletonWindow(resource, context, showWindow, layoutMode) {
        var container;
        return function() {
            if (isInvisibleContainer(container)) {
                container = bulidElements(resource, context);
            }
            initLayout(container, layoutMode);
            if (isWindow(container) && showWindow) {
                container.show();
            }
            return container;
        };
    }
    function buildWindow(isSingletonWindow) {
        var func = isSingletonWindow ? buildSingletonWindow : buildNativeWindow;
        return func.apply(null, nativeSlice.call(arguments, 1));
    }
    function bulidElements(resource, context) {
        var container = initMainContainer(resource, context);
        var collector = {
            nodeItems: [],
            selectableElement: []
        };
        parseElement(resource, container, collector);
        selectChildItem(collector.selectableElement);
        expandTreeViewNodes(collector.nodeItems);
        return container;
    }
    function castArray(value) {
        return isArray(value) ? value : [ value ];
    }
    function createIsElementFlag(regex) {
        return function(flag) {
            if (has(elementTypeFlags, flag)) {
                return regex.test(elementTypeFlags[flag]);
            }
            return false;
        };
    }
    function baseEachElement(containers, accumulator, breaker, predicate) {
        return some(containers, function(container) {
            var result = [];
            var isDone = some(container.children, function(element) {
                if (isNativeContainer(element.type)) {
                    result.push(element);
                }
                if (predicate(element)) {
                    accumulator.push(element);
                }
                return breaker(accumulator);
            });
            return isDone ? true : baseEachElement(result, accumulator, breaker, predicate);
        });
    }
    function expandTreeViewNodes(nodes) {
        forEach(nodes, function(node) {
            node.expanded = true;
        });
    }
    function filterFindElementInput(input) {
        return uniq(map(nativeConcat.apply([], input), String));
    }
    function freezeProperty(object, property) {
        object.watch(property, function(name, oldValue) {
            return oldValue;
        });
    }
    function getCreationPropertiesLocation(key) {
        if (isNativeControl(key)) {
            return controlParamRef[key];
        } else if (isNativeContainer(key)) {
            return containerParamRef[key];
        } else {
            return 0;
        }
    }
    function getElementById(targetId) {
        var id = String(targetId);
        var result = [];
        var breaker = function(accumulator) {
            return accumulator.length > 0;
        };
        baseEachElement([ this ], result, breaker, function(element) {
            var elementId = baseGetElementId(element);
            if (isNil(elementId)) {
                return false;
            }
            return id === elementId;
        });
        return result.length === 0 ? null : result[0];
    }
    function getElementParam(value) {
        return isArray(value) ? mapNullToUndefined(value) : baseGetParam(value);
    }
    function getElementStyle(value) {
        return isArray(value) ? {} : baseGetStyle(value);
    }
    function getElementsByName() {
        var targetNames = filterFindElementInput(arguments);
        var seen = [];
        var result = [];
        var breaker = function() {
            return targetNames.length === seen.length;
        };
        baseEachElement([ this ], result, breaker, function(element) {
            var elementId = baseGetElementId(element);
            if (isNil(elementId)) {
                return false;
            }
            if (contains(targetNames, elementId) && !contains(seen, elementId)) {
                seen.push(elementId);
                return true;
            }
            return false;
        });
        return result.length === 0 ? null : result;
    }
    function getElementsByType() {
        var targetTypes = filterFindElementInput(arguments);
        var result = [];
        baseEachElement([ this ], result, stubFalse, function(element) {
            return contains(targetTypes, element.type);
        });
        return result.length === 0 ? null : result;
    }
    function getListItemParam(value) {
        var result = isObject(value) ? baseGetListItemParam(value) : value;
        return String(result);
    }
    function getMainContainer(param, context) {
        return isPanel(context) ? context : new Window(param[0], param[1], param[2], param[3]);
    }
    function initBuildValues(resource, parserSelf) {
        var config = assign(clone(mainContainerDefault), baseGetConfig(resource));
        var showWindow = Boolean(config.show);
        var dockable = Boolean(config.dockable);
        var isSingletonWindow = Boolean(config.singleton);
        var context = assignContext(parserSelf.context, dockable, isSingletonWindow);
        var layoutMode = assignLayoutMode(parserSelf.layoutMode, config.layoutMode);
        return [ isSingletonWindow, resource, context, showWindow, layoutMode ];
    }
    function initLayout(container, layoutMode) {
        container.layout.layout(layoutMode);
        container.layout.resize();
    }
    function initMainContainer(resource, context) {
        var mainContainer = getMainContainer(assignWindowType(baseGetParam(resource)), context);
        mainContainer.onResizing = mainContainer.onResize = function() {
            this.layout.resize();
        };
        assign(mainContainer, baseGetStyle(resource));
        return mainContainer;
    }
    function isInvisibleContainer(container) {
        return isNil(container) || !container.visible;
    }
    function isTabbedpanel(element) {
        return element.type == "tabbedpanel";
    }
    function isValidCombination(parentType, childType) {
        var flagCombination = elementTypeFlags[parentType] + elementTypeFlags[childType];
        return reCombination.test(flagCombination);
    }
    function isValidContext(context) {
        return context === global || isPanel(context);
    }
    function isValidElement(flag) {
        return has(elementTypeFlags, flag);
    }
    function mapNullToUndefined(array) {
        return map(array, function(value) {
            return isNull(value) ? undefined : value;
        });
    }
    function nativeAddContainer(container, type, param) {
        return container.add(type, param[1], param[2], param[3]);
    }
    function nativeAddControl(container, type, param) {
        return container.add(type, param[1], param[2], param[3], param[4], param[5]);
    }
    function nativeAddNode(container, text) {
        return container.add("node", text);
    }
    function nativeAddNodeItem(node, text) {
        return node.add("item", text);
    }
    function parseElement(resource, container, collector) {
        forOwn(resource, function(value, key) {
            var flag = trimNumber(key).toLowerCase();
            if (isValidElement(flag) && isValidCombination(container.type, flag)) {
                if (isContainer(flag)) {
                    var newContainer = addContainer(container, value, flag, collector);
                    parseElement(value, newContainer, collector);
                } else {
                    addControl(container, value, flag);
                }
            }
        });
    }
    function runInContext(resource) {
        addGetElementMethods([ Window, Panel, Group ]);
        var resource_ = isObject(resource) ? resource : {};
        var container = buildWindow.apply(null, initBuildValues(resource_, tree));
        tree.windows.push(container);
        return container;
    }
    function selectChildItem(selectableElementValues) {
        forEach(selectableElementValues, function(value) {
            var container = value.container;
            var itemIndex = value.itemIndex;
            if (isTabbedpanel(container)) {
                container.selection = itemIndex;
            } else {
                container.selection = map(castArray(itemIndex), function(value) {
                    return container.items[value];
                });
            }
        });
    }
    function trimNumber(string) {
        return string.replace(/\d/g, "");
    }
    function foo() {
        alert("Yoooooo!!!");
    }
    tree.parse({
        style: {
            margins: 5,
            alignChildren: [ "fill", "fill" ]
        },
        param: [ "palette", "", undefined, {
            resizeable: true
        } ],
        group1: {
            style: {
                margins: 0,
                spacing: 0,
                orientation: "column",
                alignChildren: [ "fill", "fill" ]
            },
            param: [ "mainGroup1", undefined, undefined ],
            edittext1: {
                style: {
                    preferredSize: [ 180, 230 ]
                },
                param: [ "console", undefined, "console", {
                    multiline: true,
                    scrolling: true
                } ]
            }
        },
        group2: {
            style: {
                orientation: "column",
                alignChildren: [ "fill", "fill" ],
                alignment: [ "fill", "bottom" ]
            },
            param: [ "paramGroup1", undefined, undefined ],
            group1: {
                style: {
                    orientation: "row",
                    alignment: [ "fill", "bottom" ]
                },
                param: [ "dropdownlistGroup" ],
                statictext1: [ undefined, [ 0, 0, 30, 25 ], "方向" ],
                dropdownlist1: {
                    style: {
                        alignment: [ "fill", "" ],
                        selection: 3
                    },
                    param: [ "direction", [ 0, 0, 170, 25 ], [ "+x", "-x", "+y", "-y" ] ]
                }
            },
            group2: {
                style: {
                    spacing: 5,
                    orientation: "row",
                    alignChildren: [ "fill", "fill" ],
                    alignment: [ "fill", "bottom" ]
                },
                param: [ "settingGroup" ],
                group1: {
                    style: {
                        orientation: "column",
                        alignment: [ "left", "bottom" ]
                    },
                    param: [ "mainGroup" ],
                    statictext1: [ "time", [ 0, 0, 30, 25 ], "时间" ],
                    statictext2: [ "transition", [ 0, 0, 30, 25 ], "过渡" ],
                    statictext3: [ "distance", [ 0, 0, 30, 25 ], "距离" ]
                },
                group2: {
                    style: {
                        orientation: "column",
                        alignChildren: [ "fill", "fill" ]
                    },
                    param: [ "mainGroup" ],
                    slider1: [ "time", [ 0, 0, 140, 25 ], 1, 0, 3 ],
                    slider2: [ "transition", [ 0, 0, 140, 25 ], 1, 0, 3 ],
                    slider3: [ "distance", [ 0, 0, 140, 25 ], 1, 0, 3 ]
                },
                group3: {
                    style: {
                        orientation: "column",
                        alignment: [ "right", "bottom" ]
                    },
                    param: [ "mainGroup" ],
                    edittext1: [ "time", [ 0, 0, 45, 25 ], "10" ],
                    edittext2: [ "transition", [ 0, 0, 45, 25 ], "10" ],
                    edittext3: [ "distance", [ 0, 0, 45, 25 ], "10" ]
                }
            }
        },
        button1: {
            style: {
                onClick: foo
            },
            param: [ "button", undefined, "添加" ]
        }
    });
}).call(this);
