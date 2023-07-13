import { nativeConcat, nativeSlice } from "./lodash/basic/_global";
import assign from "./lodash/basic/assign";
import contains from "./lodash/basic/contains";
import isArray from "./lodash/basic/isArray";
import stubFalse from "./lodash/basic/stubFalse";
import uniq from "./lodash/#uniq";
import clone from "./lodash/#clone";
import forEach from "./lodash/#forEach";
import forOwn from "./lodash/#forOwn";
import has from "./lodash/#has";
import isNil from "./lodash/#isNil";
import isNull from "./lodash/#isNull";
import isObject from "./lodash/#isObject";
import map from "./lodash/#map";
import some from "./lodash/#some";
import isPanel from "./isPanel";
import isWindow from "./isWindow";

const root = this;
const global = $.global;
const tree: Tree = { version: "beta 1.0.0", parse: runInContext, windows: [] };
const layoutModeFlags = [0, 1, 2];
const validContainerType = ["dialog", "palette", "window"];
const mainContainerDefault: ContainerDefault = { dockable: true, show: true, singleton: false };

const controlParamRef = {
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
    treeview: 3,
};
const containerParamRef = { group: 2, panel: 3, tab: 3, tabbedpanel: 3 };

const elementTypeFlags = {
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
    window: "W",
};

const reCombination = /[CGMNTW][ABDEFGHIKNOPQRSUV]|[DK]J|[VL][LJ]|UT/,
    reContainer = /[DGKLNTUV]/,
    reListItemContainer = /[DKLV]/,
    reSelectableElement = /[DKUV]/,
    reNativeContainer = /[GNTU]/,
    reNativeControl = /[ABDEHIKOPQRSV]/;

const isContainer = createIsElementFlag<ContainerFlags>(reContainer),
    isListItemContainer = createIsElementFlag<ListItemContainerFlags>(reListItemContainer),
    isNativeContainer = createIsElementFlag<NativeContainerFlags>(reNativeContainer),
    isNativeControl = createIsElementFlag<NativeControlFlags>(reNativeControl),
    isSelectableElement = createIsElementFlag<SelectableElementFlags>(reSelectableElement);

function addContainer(container: LooseContainer, value: object, flag: string, collector: ElementCollector): LooseContainer {
    return flag == "node" ? addNodeContainer(container as TreeViewNode, value, flag, collector) : addGeneralContainer(container as NativeContainer, value, flag, collector);
}

function addControl(container: LooseContainer, value: object, key: string, collector: ElementCollector): void {
    const element = isListItemContainer(container.type) ? addListItem(container as ListItemContainer, value, key, collector) : addGeneralControl(container as NativeContainer, value, key, collector);
    assign(element, getElementStyle(value));
}

function addGeneralContainer(container: NativeContainer, value: object, flag: string, collector: ElementCollector) {
    const style = getElementStyle(value);
    const newContainer = nativeAddContainer(container, flag, assignElementParam(value, flag));

    if (isSelectableElement(flag) && has(style, "selection")) {
        const value = { container: newContainer as SelectableElement, itemIndex: (style as AnyObject).selection };
        collector.selectableElement.push(value);
        delete (style as AnyObject)["selection"];
        return assign(newContainer, style);
    }

    assign(newContainer, style);
    return newContainer;
}

function addGeneralControl(container: NativeContainer, value: object, flag: string, collector: ElementCollector): NativeControl {
    return nativeAddControl(container, flag, assignElementParam(value, flag));
}

function addGetElementMethods(constructors: [typeof Window, typeof Panel, typeof Group]): void {
    forEach(constructors, constructor => {
        const prototype = constructor.prototype as AnyObject;
        prototype.getElementById = getElementById;
        prototype.getElementsByName = getElementsByName;
        prototype.getElementsByType = getElementsByType;
        freezeProperty(prototype, "getElementById");
        freezeProperty(prototype, "getElementsByName");
        freezeProperty(prototype, "getElementsByType");
    });
}

function addListItem(container: ListItemContainer, value: object, flag: string, collector: ElementCollector): ListItem {
    return nativeAddNodeItem(container, getListItemParam(value));
}

function addNodeContainer(container: TreeViewNode, value: object, flag: string, collector: ElementCollector): TreeViewNode {
    const style = getElementStyle(value) as AnyObject;
    const node = nativeAddNode(container, getListItemParam(value));
    if (style.expanded) {
        collector.nodeItems.push(node);
    }
    delete style["expanded"];
    assign(node, style);

    return node;
}

function assignContext(global: unknown, dockable: boolean, isSingletonWindow: boolean) {
    if (isSingletonWindow || !dockable) {
        return Window;
    }
    if (isValidContext(root)) {
        return root;
    }
    return isValidContext(global) ? global : Window;
}

function assignElementParam(value: object, flag: string): Array<unknown> {
    return assignUniqueName(getElementParam(value), flag);
}

function assignLayoutMode(setAll: number, setAlone: number): number {
    if (contains(layoutModeFlags, setAlone)) {
        return setAlone;
    }
    if (contains(layoutModeFlags, setAll)) {
        return setAll;
    }
    return 0;
}

function assignUniqueName(param: Array<unknown>, flag: string): Array<unknown> {
    const name = param[0];
    if (isNil(name)) {
        return param;
    }
    const index = getCreationPropertiesIndex(flag);
    const creationProperties = param[index];
    if (!isObject(creationProperties)) {
        param[index] = {};
    }
    if (has(creationProperties, "name")) {
        return param;
    }
    (param[index] as AnyObject).name = name;

    return param;
}

function assignWindowType(param: Array<unknown>): Array<unknown> {
    const type = String(param[0]);
    param[0] = contains(validContainerType, type) ? type : ["palette"];
    return param;
}

function baseGet(object: AnyObject, key: string): any {
    return isNil(object) ? undefined : object[key];
}

function baseGetConfig(value: object): any {
    return baseGet(value, "config");
}

function baseGetElementId(element: _Control): string {
    const properties = (element as AnyObject).properties;
    return properties && properties.name;
}

function baseGetListItemParam(value: object): any {
    return baseGet(value, "param");
}

function baseGetParam(value: object): Array<unknown> {
    const result = baseGet(value, "param");
    return isArray(result) ? mapNullToUndefined(result) : [];
}

function baseGetStyle(value: object): object {
    const result = baseGet(value, "style");
    return isObject(result) ? result : {};
}

function buildNativeWindow(resource: AnyObject, context: MainContainer, showWindow: boolean, layoutMode: boolean): MainContainer {
    const container = bulidElements(resource, context);
    initLayout(container, layoutMode);
    if (isWindow(container) && showWindow) {
        container.show();
    }
    return container;
}

function buildSingletonWindow(resource: AnyObject, context: MainContainer, showWindow: boolean, layoutMode: boolean): () => MainContainer {
    let container: MainContainer;

    return () => {
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

function buildWindow(isSingletonWindow: boolean): Window | Panel {
    const func = isSingletonWindow ? buildSingletonWindow : buildNativeWindow;
    return func.apply(null, nativeSlice.call(arguments, 1));
}

function bulidElements(resource: AnyObject, context: MainContainer): MainContainer {
    const container = initMainContainer(resource, context);
    const collector: ElementCollector = { nodeItems: [], selectableElement: [] };
    parseElement(resource, container, collector);
    selectChildItem(collector.selectableElement);
    expandTreeViewNodes(collector.nodeItems);
    return container;
}

function castArray<T>(value: T | Array<T>): Array<T> {
    return isArray(value) ? value : [value];
}

function createIsElementFlag<T extends string>(regex: RegExp) {
    return (flag: string): flag is T => {
        if (has(elementTypeFlags, flag)) {
            return regex.test(elementTypeFlags[flag as ElementFlags]);
        }
        return false;
    };
}

function baseEachElement(containers: Array<Container>, accumulator: Array<_Control>, breaker: (accumulator: Array<_Control>) => boolean, predicate: (element: _Control) => boolean): boolean {
    return some(containers, container => {
        const result: Array<Container> = [];
        const isDone = some(container.children, element => {
            if (isNativeContainer(element.type)) {
                result.push(element as Container);
            }
            if (predicate(element)) {
                accumulator.push(element);
            }
            return breaker(accumulator);
        });
        return isDone ? true : baseEachElement(result, accumulator, breaker, predicate);
    });
}

function expandTreeViewNodes(nodes: Array<TreeViewNode>): void {
    forEach(nodes, node => {
        node.expanded = true;
    });
}

function filterFindElementInput(input: unknown): Array<string> {
    return uniq(map(nativeConcat.apply([], input), String));
}

function freezeProperty<T extends object>(object: T, property: string) {
    object.watch(property, (name: string, oldValue: T) => oldValue);
}

function getCreationPropertiesIndex(key: string): number {
    if (isNativeControl(key)) {
        return controlParamRef[key];
    }
    if (isNativeContainer(key)) {
        return containerParamRef[key];
    }
    return 0;
}

function getElementById(this: Container, targetId: unknown): _Control | null {
    const id = String(targetId);
    const result: Array<_Control> = [];

    const breaker = (accumulator: Array<_Control>): boolean => accumulator.length > 0;

    baseEachElement([this], result, breaker, element => {
        const elementId = baseGetElementId(element);
        if (isNil(elementId)) {
            return false;
        }
        return id === elementId;
    });

    return result.length === 0 ? null : result[0];
}

function getElementParam(value: object): Array<unknown> {
    return isArray(value) ? mapNullToUndefined(value) : baseGetParam(value);
}

function getElementStyle(value: object): object {
    return isArray(value) ? {} : baseGetStyle(value);
}

function getElementsByName(this: Container, ...args: Array<unknown>): Array<_Control> | null {
    const targetNames = filterFindElementInput(arguments);
    const seen: Array<string> = [];
    const result: Array<_Control> = [];

    const breaker = (): boolean => targetNames.length === seen.length;

    baseEachElement([this], result, breaker, element => {
        const elementId = baseGetElementId(element);
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

function getElementsByType(this: Container, ...args: Array<unknown>): Array<_Control> | null {
    const targetTypes = filterFindElementInput(arguments);
    const result: Array<_Control> = [];

    baseEachElement([this], result, stubFalse, element => contains(targetTypes, element.type));

    return result.length === 0 ? null : result;
}

function getListItemParam(value: unknown): string {
    const result = isObject(value) ? baseGetListItemParam(value) : value;
    return String(result);
}

function getMainContainer(param: Array<any>, context: MainContainer): _Panel | Window {
    return isPanel(context) ? context : new Window(param[0], param[1], param[2], param[3]);
}

function initBuildValues(resource: AnyObject, parserSelf: AnyObject) {
    const config = assign(clone(mainContainerDefault), baseGetConfig(resource));
    const showWindow = Boolean(config.show);
    const dockable = Boolean(config.dockable);
    const isSingletonWindow = Boolean(config.singleton);
    const context = assignContext(parserSelf.context, dockable, isSingletonWindow);
    const layoutMode = assignLayoutMode(parserSelf.layoutMode, config.layoutMode);
    return [isSingletonWindow, resource, context, showWindow, layoutMode];
}

function initLayout(container: Container, layoutMode: boolean): void {
    container.layout.layout(layoutMode);
    container.layout.resize();
}

function initMainContainer(resource: AnyObject, context: MainContainer): MainContainer {
    const mainContainer = getMainContainer(assignWindowType(baseGetParam(resource)), context) as _Window;
    mainContainer.onResizing = mainContainer.onResize = function () {
        this.layout.resize();
    };
    assign(mainContainer, baseGetStyle(resource));
    return mainContainer;
}

function isInvisibleContainer(container: Panel | Window): boolean {
    return isNil(container) || !container.visible;
}

function isTabbedpanel(element: _Control): element is TabbedPanel {
    return element.type == "tabbedpanel";
}

function isValidCombination(parentType: ElementFlags, childType: ElementFlags): boolean {
    const flagCombination = elementTypeFlags[parentType] + elementTypeFlags[childType];
    return reCombination.test(flagCombination);
}

function isValidContext(context: unknown): boolean {
    return context === global || isPanel(context);
}

function isValidElement(flag: string): flag is ElementFlags {
    return has(elementTypeFlags, flag);
}

function mapNullToUndefined(array: Array<unknown>): Array<unknown> {
    return map(array, value => (isNull(value) ? undefined : value));
}

function nativeAddContainer(container: NativeContainer, type: any, param: Array<any>): NativeContainer {
    return container.add(type, param[1], param[2], param[3]) as unknown as NativeContainer;
}

function nativeAddControl(container: NativeContainer, type: any, param: Array<any>): NativeControl {
    return container.add(type, param[1], param[2], param[3], param[4], param[5]) as unknown as NativeControl;
}

function nativeAddNode(container: TreeViewNode, text: string): TreeViewNode {
    return container.add("node", text) as TreeViewNode;
}

function nativeAddNodeItem(node: ListItemContainer, text: string): ListItem {
    return node.add("item", text);
}

function parseElement(resource: AnyObject, container: LooseContainer, collector: ElementCollector) {
    forOwn(resource, (value, key) => {
        const flag = trimNumber(key).toLowerCase();
        if (isValidElement(flag) && isValidCombination(container.type as ElementFlags, flag)) {
            if (isContainer(flag)) {
                const newContainer = addContainer(container, value, flag, collector);
                parseElement(value, newContainer, collector);
            } else {
                addControl(container, value, flag, collector);
            }
        }
    });
}

function runInContext(resource: AnyObject): MainContainer {
    addGetElementMethods([Window, Panel, Group]);
    const resource_ = isObject(resource) ? resource : {};
    const container = buildWindow.apply(null, initBuildValues(resource_, tree));
    tree.windows.push(container);
    return container;
}

function selectChildItem(selectableElementValues: Array<SelectableElementValue>) {
    forEach(selectableElementValues, value => {
        const container = value.container;
        const itemIndex = value.itemIndex;

        if (isTabbedpanel(container)) {
            container.selection = itemIndex;
        } else {
            container.selection = map(castArray(itemIndex), value => container.items[value]) as unknown as ListItem;
        }
    });
}

function trimNumber(string: string): string {
    return string.replace(/\d/g, "");
}

export default tree;
