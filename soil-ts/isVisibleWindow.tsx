/**
 * ScriptUI 可见窗口谓词
 *
 * @param {(Window | null)} container
 * @returns {container is Window}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function isVisibleWindow(container: Window | null): container is Window {
    return container !== null && container.visible;
}

export default isVisibleWindow;
