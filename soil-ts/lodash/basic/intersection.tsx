import contains from "./contains";

function intersection<T>(array: Array<T>, ...rest: Array<Array<T>>): Array<T> {
    let index = -1;
    const length = array.length;
    const argsLength = arguments.length;
    const result = [];

    while (++index < length) {
        const value = array[index];
        if (contains(result, value)) {
            continue;
        }
        let argsIndex = 0;
        while (++argsIndex < argsLength) {
            if (!contains(arguments[argsIndex], value)) {
                break;
            }
        }
        if (argsIndex === argsLength) {
            result.push(value);
        }
    }
    return result;
}

export default intersection;
