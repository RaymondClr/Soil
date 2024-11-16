/**
 * 设置撤销组
 *
 * @param {string} undoString
 * @param {(...args: Array<any>) => void} func
 * @returns {void}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function setUndoGroup(undoString: string, func: (...args: Array<any>) => void): void {
    app.beginUndoGroup(undoString);
    func();
    app.endUndoGroup();
}

export default setUndoGroup;
