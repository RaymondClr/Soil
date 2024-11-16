/**
 * 从右向左修剪路径
 *
 * @param {string} path
 * @param {number} length
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function trimPathRight(path: string, length: number): string {
    let pathPartial = path.replace(/(\\\\|\\)/g, "/").split("/");
    return pathPartial.slice(0, -length).join("/");
}

export default trimPathRight;
