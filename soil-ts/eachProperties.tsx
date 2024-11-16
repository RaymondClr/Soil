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
