/**
 * Make all properties in T required
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};

declare type _Record<K extends keyof any, T> = {
    [P in K]: T;
};

/**
 * Exclude from T those types that are assignable to U
 */
declare type Exclude<T, U> = T extends U ? never : T;

/**
 * Extract from T those types that are assignable to U
 */
declare type Extract<T, U> = T extends U ? T : never;

/**
 * Construct a type with the properties of T except for those in type K.
 */
declare type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

/**
 * Exclude null and undefined from T
 */
declare type NonNullable<T> = T & {};

/**
 * Obtain the parameters of a function type in a tuple
 */
declare type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Obtain the parameters of a constructor function type in a tuple
 */
declare type ConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

/**
 * Obtain the return type of a function type
 */
declare type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Obtain the return type of a constructor function type
 */
declare type InstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

declare interface String {
    replace(searchValue: RegExp, replaceValue: (substring: string, ...args: string[]) => void): string;
    split(delimiter: RegExp | string, limit?: number): string[];
}

declare interface RegExp {
    source: string;
    lastIndex: number;
    global: boolean;
}

declare interface Property {
    keyLabel(keyIndex: number): number;
    setLabelAtKey(keyIndex: number, labelIndex: number): void;
}

interface ArrayLike<T> {
    readonly length: number;
    readonly [n: number]: T;
}

declare function alert(message: any, title?: string, errorIcon?: boolean): void;

declare type RasterLayer = AVLayer | ShapeLayer | TextLayer;

declare type List<T> = ArrayLike<T>;

declare type LooseFile = File | string;
declare type LooseFolder = Folder | string;

declare type Falsey = null | undefined | false | 0 | "";

declare type AdbePath = string[];
declare type EditableProperty = PropertyGroup | MaskPropertyGroup | Layer;

declare type AnyObject = _Record<string, any>;
declare type AnyFunction = (...args: Array<any>) => any;

declare type PropertyName = string | number;
declare type PropertyKey = PropertyName;
declare type PropertyPath = Many<PropertyName>;

declare type ArrayIterator<T, TResult> = (value: T, index: number, collection: T[]) => TResult;
declare type ListIterator<T, TResult> = (value: T, index: number, collection: List<T>) => TResult;
declare type ObjectIterator<TObject, TResult> = (value: TObject[keyof TObject], key: string, collection: TObject) => TResult;
declare type CollectionIterator<TCollectionItem, TCollection, TResult> = (value: TCollectionItem, index: number, collection: TCollection) => TResult;
declare type ValueKeyIteratee<T> = (value: T, key: string) => unknown;

declare type EmptyObject<T> = { [K in keyof T]?: never };
declare type EmptyObjectOf<T> = EmptyObject<T> extends T ? EmptyObject<T> : never;

declare type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;

declare type InTemporalEase = GetReturnType<Property["keyInTemporalEase"]>;
declare type OutTemporalEase = GetReturnType<Property["keyOutTemporalEase"]>;
declare type InSpatialTangent = GetReturnType<Property["keyInSpatialTangent"]>;
declare type OutSpatialTangent = GetReturnType<Property["keyOutSpatialTangent"]>;
declare type CanSetValueProperty = Property<ThreeDType | TwoDType | TwoDSpatialType | ThreeDSpatialType | OneDType | ColorType | MarkerValueType | ShapePropertyType | TextDocumentType | MaskIndexType | LayerIndexType>;
declare type SpatialProperty = Property<TwoDSpatialType | ThreeDSpatialType>;
declare type Predicate<T> = (...value: T[]) => boolean;
declare type Iteratee<T, R> = (...value: T[]) => R;
declare interface ThreeDSpatialType extends PropertyClassMembers {
    propertyValueType: PropertyValueType.ThreeD_SPATIAL;
    value: ThreeDPoint;
}

declare type ShortcutsGroup = _TransformGroup | _LightOptionsGroup | _CameraOptionsGroup | _LayerStyles | _BlendOptionsGroup | _AdvBlendGroup | _DropShadow | _InnerShadow | _OuterGlow | _InnerGlow | _BevelAndEmboss | _Satin | _ColorOverlay | _GradientOverlay | _Stroke | _GeometryOptionsGroup | _MaterialOptionsGroup | _AudioGroup | _TextProperties | _TextPathOptions | _TextMoreOptions;

declare type Keyframe = {
    keyTime: number;
    keyValue: any | null;
    keySelected?: boolean | null;
    keyInTemporalEase?: InTemporalEase | null;
    keyOutTemporalEase?: OutTemporalEase | null;
    keyTemporalContinuous?: boolean | null;
    keyTemporalAutoBezier?: boolean | null;
    keyInInterpolationType?: KeyframeInterpolationType | null;
    keyOutInterpolationType?: KeyframeInterpolationType | null;
    keyInSpatialTangent?: InSpatialTangent | null;
    keyOutSpatialTangent?: OutSpatialTangent | null;
    keySpatialAutoBezier?: boolean | null;
    keySpatialContinuous?: boolean | null;
    keyRoving?: boolean | null;
    keyLabel?: number | null;
};

declare type JsonEscape = "\b" | "\t" | "\n" | "\f" | "\r" | "\v" | '"' | "\\";

declare type CollectionMembers = ItemCollection | LayerCollection | OMCollection | RQItemCollection;
declare type BuildIndexUnion<T extends number, K extends unknown[] = []> = K["length"] extends T ? K[number] : BuildIndexUnion<T, [...K, K["length"]]>;

declare type NestedArray<T> = Array<T | NestedArray<T>>;

declare type filterArr<T, U> = T extends readonly [infer R, ...infer H] ? (R extends U ? [R, ...filterArr<H, U>] : filterArr<H, U>) : [];

declare class MouseEvent extends UIEvent {
    altKey: boolean;
    button: number;
    clientX: number;
    clientY: number;
    ctrlKey: boolean;
    detail: number;
    metaKey: boolean;
    relatedTarget: any;
    screenX: number;
    screenY: number;
    shiftKey: boolean;
    type: string;

    getModifierState(keyIdentifier: string): boolean;
    initMouseEvent(eventName: string, bubble: boolean, isCancelable: boolean, view: any, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget?: any): void;
}

declare type KeyframeCloneOptions = {
    source: Property;
    target: Property;
    removeRaw?: boolean;
    flip?: boolean;
    reverse?: boolean;
    time?: number;
    predicate?: (keyframe: Property, keyIndex: number) => boolean;
};

declare type Reducer<T, TResult> = (accumulator: TResult, currentValue: T, currentIndex: number, array: T[]) => TResult;

declare interface Dictionary<T> {
    [index: string]: T;
}
declare interface NumericDictionary<T> {
    [index: number]: T;
}
declare interface Function {
    apply(thisObj: any, args: any): any;
    call(thisObj: any, ...arguments: any[]): any;
}

declare type Curry<T extends any[], R> = T extends [] ? R : T extends [infer A] ? (a: A) => R : T extends [infer A, infer B] ? (a: A) => (b: B) => R : T extends [infer A, infer B, infer C] ? (a: A) => (b: B) => (c: C) => R : T extends [infer A, infer B, infer C, infer D] ? (a: A) => (b: B) => (c: C) => (d: D) => R : never;
declare type CurryRight<T extends any[], R> = T extends [] ? R : T extends [infer A] ? (a: A) => R : T extends [infer A, infer B] ? (b: B) => (a: A) => R : T extends [infer A, infer B, infer C] ? (c: C) => (b: B) => (a: A) => R : T extends [infer A, infer B, infer C, infer D] ? (d: D) => (c: C) => (b: B) => (a: A) => R : never;

declare type Func<T, R> = (arg: T) => R;

declare type FlatArray<T> = T extends string ? T : T extends Array<any> ? never : T;
declare type Many<T> = T | Array<T>;

declare type ArrayIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: Array<T>) => value is S;
declare type ObjectIteratorTypeGuard<T, S extends T[keyof T]> = (value: T[keyof T], key: string, collection: T) => value is S;

declare interface CustomValueType extends PropertyClassMembers {
    propertyValueType: PropertyValueType.CUSTOM_VALUE;
    /*     value: never; */
}

declare interface MaskIndexType extends PropertyClassMembers {
    propertyValueType: PropertyValueType.MASK_INDEX;
    value: number;
}

declare interface LayerIndexType extends PropertyClassMembers {
    propertyValueType: PropertyValueType.LAYER_INDEX;
    value: number;
}

type Fn = (...args: any) => any;
type OverloadReturns<F extends Fn> = ReturnType<OverloadSignatures<F>>;
type OverloadParameters<F extends Fn> = Parameters<OverloadSignatures<F>>;
type MatchOverload<F extends Fn, P extends Fn> = Extract<OverloadSignatures<F>, P>;
type OverloadSignatures<F extends Fn> = OverloadsToTuple<F>[number];
type OverloadsToTuple<T> = T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3; (...args: infer P4): infer R4; (...args: infer P5): infer R5; (...args: infer P6): infer R6; (...args: infer P7): infer R7; (...args: infer P8): infer R8 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3, (...args: P4) => R4, (...args: P5) => R5, (...args: P6) => R6, (...args: P7) => R7, (...args: P8) => R8]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3; (...args: infer P4): infer R4; (...args: infer P5): infer R5; (...args: infer P6): infer R6; (...args: infer P7): infer R7 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3, (...args: P4) => R4, (...args: P5) => R5, (...args: P6) => R6, (...args: P7) => R7]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3; (...args: infer P4): infer R4; (...args: infer P5): infer R5; (...args: infer P6): infer R6 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3, (...args: P4) => R4, (...args: P5) => R5, (...args: P6) => R6]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3; (...args: infer P4): infer R4; (...args: infer P5): infer R5 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3, (...args: P4) => R4, (...args: P5) => R5]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3; (...args: infer P4): infer R4 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3, (...args: P4) => R4]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2; (...args: infer P3): infer R3 }
    ? [(...args: P1) => R1, (...args: P2) => R2, (...args: P3) => R3]
    : T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2 }
    ? [(...args: P1) => R1, (...args: P2) => R2]
    : T extends { (...args: infer P1): infer R1 }
    ? [(...args: P1) => R1]
    : never;
