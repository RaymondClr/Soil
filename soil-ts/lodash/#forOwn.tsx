import has from "./#has";

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @see forEach, forEachRight, forIn, forInRight, forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * forOwn(new Foo, function(value, key) {
 *   console.log(key)
 * })
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn<T extends {}>(object: T, iteratee: ObjectIterator<T, boolean | void>): T {
    for (const key in object) {
        if (has(object, key)) {
            if (iteratee(object[key], key, object) === false) {
                break;
            }
        }
    }
    return object;
}

export default forOwn;
// /**
//  * Iterates over own enumerable string keyed properties of an object and
//  * invokes `iteratee` for each property. The iteratee is invoked with three
//  * arguments: (value, key, object). Iteratee functions may exit iteration
//  * early by explicitly returning `false`.
//  *
//  * @since 0.3.0
//  * @category Object
//  * @param {Object} object The object to iterate over.
//  * @param {Function} iteratee The function invoked per iteration.
//  * @see forEach, forEachRight, forIn, forInRight, forOwnRight
//  * @example
//  *
//  * function Foo() {
//  *   this.a = 1
//  *   this.b = 2
//  * }
//  *
//  * Foo.prototype.c = 3
//  *
//  * forOwn(new Foo, function(value, key) {
//  *   console.log(key)
//  * })
//  * // => Logs 'a' then 'b' (iteration order is not guaranteed).
//  */
// function forOwn(object, iteratee) {
//     object = Object(object);
//     Object.keys(object).forEach(key => iteratee(object[key], key, object));
// }

// export default forOwn;
