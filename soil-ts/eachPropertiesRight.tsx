/**
 * 反向迭代 Properties
 *
 * @template {PropertyGroup} T
 * @template {_PropertyClasses} U
 * @param {T} propertyGroup
 * @param {(property: U, index: number, propertyGroup: T) => unknown} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachProperties
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (_.isLayer(selectedLayer)) {
 *     _.eachPropertiesRight(selectedLayer, function (property) {
 *         _.log(`${property.propertyIndex} | ${property.name} | ${property.matchName}`);
 *     });
 * }
 * // 结果：桌面日志会反序记录选中图层的的所有根 Property 的名称和其对应的匹配名。
 *
 * if (_.hasLayerMask(selectedLayer)) {
 *     _.eachPropertiesRight(selectedLayer.mask, function (property) {
 *         property.remove();
 *     });
 * }
 * // 结果：选中图层存在 Mask 的前提下，所有 Mask 都会被移除。
 * ```
 */
function eachPropertiesRight<T extends PropertyGroup, U extends _PropertyClasses>(propertyGroup: T, iteratee: (property: U, index: number, propertyGroup: T) => unknown): T {
    let index = propertyGroup.numProperties + 1;

    while (--index) {
        if (iteratee(propertyGroup.property(index) as U, index, propertyGroup) === false) {
            break;
        }
    }
    return propertyGroup;
}

export default eachPropertiesRight;
