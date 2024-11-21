import addPropertyAlone from "./addPropertyAlone";
import canSetPropertyValue from "./canSetPropertyValue";
import isProperty from "./isProperty";

/**
 * 设置 Property 值，路径中不存在的 Property 会被创建。不同于 setPropertyValue，它无视已经存在的 Property。
 *
 * @template {UnknownPropertyType} T
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @param {*} value
 * @returns {(Property<T> | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode setPropertyValue}
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * // 注意：如果没有活动合成会返回 undefined
 * if (_.isRasterLayer(selectedLayer)) {
 *     _.setPropertyValueAlone(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 1);
 *     _.setPropertyValueAlone(selectedLayer, ["effect", "ADBE Channel Blur", "ADBE Channel Blur-0004"], 2);
 * }
 * // 结果：选中图层是光栅图层的前提下，图层会被添加 2 个「通道模糊」效果，且「Alpha 模糊度」参数被分别设置为 1 和 2。
 * ```
 */
function setPropertyValueAlone<T extends UnknownPropertyType>(rootProperty: _PropertyClasses, path: AdbePath, value: any): Property<T> | undefined {
    const property = addPropertyAlone(rootProperty, path) as T;
    if (canSetPropertyValue(property)) {
        property.setValue(value);
        return property;
    }
}

export default setPropertyValueAlone;
