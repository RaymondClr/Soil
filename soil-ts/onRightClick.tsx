import isRightClick from "./isRightClick";

/**
 * ScriptUI 右键点击事件的捆绑器
 *
 * @param {_Control} element
 * @param {(mouseEvent: MouseEvent) => void} callback
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function onRightClick(element: _Control, callback: (mouseEvent: MouseEvent) => void): boolean {
    return element.addEventListener("mousedown", (mouseEvent: MouseEvent) => {
        if (isRightClick(mouseEvent)) {
            callback(mouseEvent);
        }
    });
}

export default onRightClick;
