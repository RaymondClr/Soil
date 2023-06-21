function or(...args: Array<boolean>): boolean {
    let index = -1;
    const length = arguments.length;

    while (++index < length) {
        if (arguments[index]) {
            return true;
        }
    }
    return false;
}

export default or;
