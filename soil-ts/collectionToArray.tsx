import collectionEach from "./_internal/_collectionEach";

function collectionToArray<T extends CollectionMembers>(collection: T): Array<T[number]> {
    const result = Array<T[number]>(collection.length);
    collectionEach(collection, function (item, index) {
        result[index - 1] = item;
    });
    return result;
}

export default collectionToArray;
