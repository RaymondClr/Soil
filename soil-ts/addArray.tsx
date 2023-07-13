function addArray<T extends TwoDPoint | ThreeDPoint | Array<number>>(...args: Array<T>): T {
    let argsLength = arguments.length;
    let minLength = Infinity;
    let argsIndex = -1;

    while (++argsIndex < argsLength) {
        if (arguments[argsIndex].length < minLength) {
            minLength = arguments[argsIndex].length;
        }
    }

    const result = new Array(minLength);
    let index = -1;

    while (++index < minLength) {
        result[index] = 0;
        let subIndex = -1;
        while (++subIndex < argsLength) {
            result[index] += arguments[subIndex][index];
        }
    }
    return result as T;
}

export default addArray;
