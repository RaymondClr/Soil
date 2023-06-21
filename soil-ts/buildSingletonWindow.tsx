import isVisibleWindow from "./isVisibleWindow";

function buildSingletonWindow(callback: () => Window): (this: object) => any {
    let window: Window | null = null;
    return function () {
        return isVisibleWindow(window) ? window : (window = callback.apply(null, arguments));
    };
}

export default buildSingletonWindow;
