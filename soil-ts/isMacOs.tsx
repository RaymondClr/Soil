import isWindowsOs from "./isWindowsOs";

function isMacOs(): boolean {
    return !isWindowsOs();
}

export default isMacOs;
