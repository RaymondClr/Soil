import isString from "./lodash/#isString";
import baseGetProperty from "./_internal/_baseGetPropertyByIndex";
import isAddableProperty from "./isAddableProperty";

/**
 * 通过 Property 路径获取 Property。路径支持 Property 名称、匹配名和索引，它们可以混搭。
 *
 * @template {Property | PropertyGroup} TResult
 * @param {(Property | PropertyGroup)} rootProperty
 * @param {Array<PropertyName>} path
 * @returns {(TResult | undefined | null)}
 * @since 0.1.0
 * @category Soil
 * @see setPropertyValue
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isLightLayer(selectedLayer)) {
 *     // 由于 Property 名称、索引或匹配名均不和 Property 类型具有关联性，所以通过路径获取的 Property 类型是不可推导的。
 *     // 为了能够以一种简洁的方式获取返回的 Property 类型，建议使用泛型参数手动指定返回类型。
 *     const property = _.getProperty<ColorProperty>(selectedLayer, ["ADBE Light Options Group", "ADBE Light Color"]);
 *     if (_.isColorProperty(property)) {
 *         const color = property.value;
 *         _.log(color);
 *     }
 * }
 * // 结果：桌面日志会记录「颜色」灯光选项的 rgba 值。
 * ```
 */
function getProperty<TResult extends Property | PropertyGroup>(rootProperty: Property | PropertyGroup, path: Array<PropertyName>): TResult | undefined | null {
    let index = 0;
    const length = path.length;
    let nested: Property | PropertyGroup | null = rootProperty;

    while (nested && isAddableProperty(nested) && index < length) {
        const name = path[index++];
        nested = isString(name) ? nested.property(name) : baseGetProperty(nested, name);
    }
    return index && index === length ? (nested as TResult) : undefined;
}

export default getProperty;
