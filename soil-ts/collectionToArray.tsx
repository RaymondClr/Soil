import collectionEach from "./_internal/_collectionEach";

/**
 * Ae 类数组集合转常规数组
 *
 * @template {CollectionMembers} T
 * @param {T} collection
 * @returns {Array<T[number]>}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const projectItems = app.project.items;
 * const itemsArr = _.collectionToArray(projectItems);
 * _.log(_.map(itemsArr, (item) => item.name));
 * // 结果：桌面日志记会录项目中所有的 Item 名称。
 * 
 * const activeComp = _.getActiveComp();
 * 
 * if (_.isCompItem(activeComp)) {
 *     const layers = _.collectionToArray(activeComp.layers);
 *     _.each(layers, function (layer, index) {
 *         _.log(`${index + 1} ${layer.name}`);
 *     });
 * }
 * // 结果：桌面日志会记录活动合成中的所有图层名称。
 * ```
 */
function collectionToArray<T extends CollectionMembers>(collection: T): Array<T[number]> {
    const result = Array<T[number]>(collection.length);
    collectionEach(collection, function (item, index) {
        result[index - 1] = item;
    });
    return result;
}

export default collectionToArray;
