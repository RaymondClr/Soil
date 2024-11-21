/**
 * 迭代 Properties
 *
 * @template {PropertyGroup} T
 * @template {_PropertyClasses} U
 * @param {T} propertyGroup
 * @param {(property: U, index: number, propertyGroup: T) => unknown} iteratee
 * @returns {T}
 * @since 0.2.0
 * @category Soil
 * @see {@linkcode eachPropertiesRight}
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isLayer(selectedLayer)) {
 *     _.eachProperties(selectedLayer, function (property) {
 *         _.log(`${property.propertyIndex} | ${property.name} | ${property.matchName}`);
 *     });
 * }
 * // 结果：桌面日志会记录选中图层的的所有根 Property 的名称和其对应的匹配名。
 *
 * if (_.hasLayerMask(selectedLayer)) {
 *     _.eachProperties(selectedLayer.mask, function (maskAtom: MaskPropertyGroup) {
 *         // 当 Property 组的父子层级固定时，建议手动收窄谓词函数的参数类型，从而获得更精确的类型提示。
 *         _.log(maskAtom.maskPath.value.vertices);
 *     });
 * }
 * // 结果：选中图层存在 Mask 的前提下，桌面日志会记录所有 mask 的点数据。
 * ```
 */
function eachProperties<T extends PropertyGroup, U extends _PropertyClasses>(propertyGroup: T, iteratee: (property: U, index: number, propertyGroup: T) => unknown): T {
    let index = 0;
    const length = propertyGroup.numProperties + 1;

    while (++index < length) {
        if (iteratee(propertyGroup.property(index) as U, index, propertyGroup) === false) {
            break;
        }
    }
    return propertyGroup;
}

export default eachProperties;
