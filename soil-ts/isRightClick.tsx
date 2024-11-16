/**
 * ScriptUI 右键点击谓词
 *
 * @param {MouseEvent} mouseEvent
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isRightClick(mouseEvent: MouseEvent): boolean {
    return mouseEvent.button === 2;
}

export default isRightClick;
