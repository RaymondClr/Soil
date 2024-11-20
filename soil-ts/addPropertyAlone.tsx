import isAddableProperty from "./isAddableProperty";

/**
 * 单独添加 Property，不同于 addProperty，它无视已存在 Property。
 *
 * @template {Property | PropertyGroup} TResult
 * @param {_PropertyClasses} rootProperty
 * @param {AdbePath} path
 * @returns {(TResult | undefined)}
 * @since 0.1.0
 * @category Soil
 * @see addProperty
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isRasterLayer(selectedLayer)) {
 *     _.times(3, () => {
 *         const newProperty = _.addPropertyAlone(selectedLayer, ["ADBE Effect Parade", "ADBE Checkbox Control"]);
 *         // 如果路径无效或不存在，会返回 undefined。
 *         if (newProperty) {
 *             _.log(newProperty.name);
 *         }
 *     });
 * }
 * // 结果：选中图层上会被添加 3 个「复选框控制」效果。桌面日志分别记录 3 个效果名称。
 * ```
 */
function addPropertyAlone<TResult extends Property | PropertyGroup>(rootProperty: _PropertyClasses, path: AdbePath): TResult | undefined {
    let index = 0;
    const length = path.length;
    let nested = rootProperty;

    while (nested && isAddableProperty(nested) && index < length) {
        let name = String(path[index++]);
        nested = nested.canAddProperty(name) ? nested.addProperty(name) : nested.property(name);
    }
    return index && index === length ? (nested as TResult) : undefined;
}

export default addPropertyAlone;
