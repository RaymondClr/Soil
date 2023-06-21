import { reFlags } from "../basic/_global";

/** Used to match `RegExp` flags from their coerced string values. */
// const reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp: RegExp): RegExp {
    const matched = reFlags.exec(regexp.toString());
    const flags = matched === null ? undefined : matched.toString();
    const RegExpCtor = regexp.constructor as RegExpConstructor;
    const result = new RegExpCtor(regexp.source, flags);
    result.lastIndex = regexp.lastIndex;
    return result;
}

export default cloneRegExp;
// /** Used to match `RegExp` flags from their coerced string values. */
// const reFlags = /\w*$/;

// /**
//  * Creates a clone of `regexp`.
//  *
//  * @private
//  * @param {Object} regexp The regexp to clone.
//  * @returns {Object} Returns the cloned regexp.
//  */
// function cloneRegExp(regexp) {
//     const result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
//     result.lastIndex = regexp.lastIndex;
//     return result;
// }

// export default cloneRegExp;
