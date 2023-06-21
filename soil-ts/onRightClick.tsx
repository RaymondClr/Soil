import isRightClick from "./isRightClick";

function onRightClick(element: _Control, callback: (mouseEvent: MouseEvent) => void) {
    return element.addEventListener("mousedown", (mouseEvent: MouseEvent) => {
        if (isRightClick(mouseEvent)) {
            callback(mouseEvent);
        }
    });
}

export default onRightClick;
