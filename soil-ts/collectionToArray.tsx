import collectionEach from "./_internal/_collectionEach";

/**
 * Ae 类数组集合转数组
 *
 * @template {CollectionMembers} T
 * @param {T} collection
 * @returns {Array<T[number]>}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function collectionToArray<T extends CollectionMembers>(collection: T): Array<T[number]> {
    const result = Array<T[number]>(collection.length);
    collectionEach(collection, function (item, index) {
        result[index - 1] = item;
    });
    return result;
}

export default collectionToArray;
