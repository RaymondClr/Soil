import isVisibleWindow from "./isVisibleWindow";

/**
 * 构建 ScriptUI 单例窗口
 *
 * @param {() => Window} callback
 * @returns {(this: object) => any}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function buildSingletonWindow(callback: () => Window): (this: object) => any {
    let window: Window | null = null;
    return function () {
        return isVisibleWindow(window) ? window : (window = callback.apply(null, arguments));
    };
}

export default buildSingletonWindow;
