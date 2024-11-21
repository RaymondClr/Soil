import eachProperties from "./eachProperties";

/**
 * Ae 类数组集合转常规数组
 *
 * @template {PropertyGroup} T
 * @param {T} propertyGroup
 * @returns {_PropertyClasses[]}
 * @since 0.2.0
 * @category Soil
 * @see {@linkcode collectionToArray}
 * @example
 *
 * ```ts
 * const selectedLayer = _.getFirstSelectedLayer();
 * if (selectedLayer) {
 *     const properties = _.propertyGroupToArray(selectedLayer.transform);
 *     const keysProperties = _.filter(properties, _.hasKeyframes);
 *     _.forEach(keysProperties, _.removeKeyframes);
 * }
 * // 结果：选中图层变换组下的所有 Proeprty，如果存在关键帧，则所有关键帧会被移除。
 * ```
 */
function propertyGroupToArray<T extends PropertyGroup>(propertyGroup: T): _PropertyClasses[] {
    const result: _PropertyClasses[] = Array(propertyGroup.numProperties);
    eachProperties(propertyGroup, function (item, index) {
        result[index] = item;
    });
    return result;
}

export default propertyGroupToArray;
