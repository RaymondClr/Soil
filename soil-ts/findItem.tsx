/**
 * 通过谓词从项目中查找 Item
 *
 * @template {Project | FolderItem} T
 * @param {T} collection
 * @param {CollectionIterator<_ItemClasses, T, boolean>} iteratee
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function findItem<T extends Project | FolderItem>(collection: T, iteratee: CollectionIterator<_ItemClasses, T, boolean>) {
    let index = 0;
    const length = collection.numItems + 1;
    const items = collection.items;

    while (++index < length) {
        let item = items[index];
        if (iteratee(item, index, collection)) {
            return item;
        }
    }
}

export default findItem;
