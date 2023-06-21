function isVisibleWindow(container: Window | null): container is Window {
    return container !== null && container.visible;
}

export default isVisibleWindow;
