import filter from "./#filter";
import keys from "./#keys";

/**
 * Creates an array of function property names from own enumerable properties
 * of `object`.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the function names.
 * @see functionsIn
 * @example
 *
 * function Foo() {
 *   this.a = () => 'a'
 *   this.b = () => 'b'
 * }
 *
 * Foo.prototype.c = () => 'c'
 *
 * functions(new Foo)
 * // => ['a', 'b']
 */
function functions(object: any): Array<string> {
    if (object == null) {
        return [];
    }
    const props = keys(object);
    return filter(props, (key): key is string => typeof object[key] === "function");
}

export default functions;
// /**
//  * Creates an array of function property names from own enumerable properties
//  * of `object`.
//  *
//  * @since 0.1.0
//  * @category Object
//  * @param {Object} object The object to inspect.
//  * @returns {Array} Returns the function names.
//  * @see functionsIn
//  * @example
//  *
//  * function Foo() {
//  *   this.a = () => 'a'
//  *   this.b = () => 'b'
//  * }
//  *
//  * Foo.prototype.c = () => 'c'
//  *
//  * functions(new Foo)
//  * // => ['a', 'b']
//  */
// function functions(object) {
//     if (object == null) {
//         return [];
//     }
//     return Object.keys(object).filter(key => typeof object[key] === "function");
// }

// export default functions;
