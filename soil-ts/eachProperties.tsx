/**
 * 迭代 Properties
 *
 * @template {PropertyGroup} T
 * @param {T} propertyGroup
 * @param {(property: _PropertyClasses, index: number, propertyGroup: T) => boolean | void} iteratee
 * @returns {T}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
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
