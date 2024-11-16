/**
 * 查找菜单 ID
 *
 * @param {string} command
 * @returns {number}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function findMenuCommandId(command: string): number {
    return app.findMenuCommandId(command);
}

export default findMenuCommandId;
