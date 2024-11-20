/**
 * 设置撤销组包装器。用于包装可以被用户撤销的 Ae Dom 修改操作。
 *
 * @param {string} undoString 撤销组名称，会显示在 Ae 编辑 > 历史记录菜单中。
 * @param {(...args: Array<any>) => void} func
 * @returns {void}
 * @since 0.1.0
 * @category Soil
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * if (activeComp) {
 *     _.setUndoGroup("New Text Layer", function () {
 *         activeComp.layers.addText("After Effects");
 *     });
 * }
 * // 结果：活动合成会被添加一个文本图层，使用 Ctrl + Z 可以撤销图层创建。
 * ```
 */
function setUndoGroup(undoString: string, func: (...args: Array<any>) => void): void {
    app.beginUndoGroup(undoString);
    func();
    app.endUndoGroup();
}

export default setUndoGroup;
