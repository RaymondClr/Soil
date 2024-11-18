/**
 * 迭代 Properties
 *
 * @template {PropertyGroup} T
 * @param {T} propertyGroup
 * @param {(property: _PropertyClasses, index: number, propertyGroup: T) => boolean | void} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see eachPropertiesRight
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * 
 * if (_.isLayer(selectedLayer)) {
 *     _.eachProperties(selectedLayer, function (property) {
 *         _.log(`${property.propertyIndex} | ${property.name} | ${property.matchName}`);
 *     });
 * }
 * // 结果：桌面日志会记录选中图层的的所有根 Property 的名称和其对应的匹配名。
 * ```
 */
function eachProperties<T extends PropertyGroup>(propertyGroup: T, iteratee: (property: _PropertyClasses, index: number, propertyGroup: T) => boolean | void): T {
    let index = 0;
    const length = propertyGroup.numProperties + 1;

    while (++index < length) {
        if (iteratee(propertyGroup.property(index), index, propertyGroup) === false) {
            break;
        }
    }
    return propertyGroup;
}

export default eachProperties;
