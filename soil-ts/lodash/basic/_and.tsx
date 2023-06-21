function and(...args: Array<boolean>): boolean {
    let index = -1;
    const length = arguments.length;

    while (++index < length) {
        if (!arguments[index]) {
            return false;
        }
    }
    return true;
}

export default and;
