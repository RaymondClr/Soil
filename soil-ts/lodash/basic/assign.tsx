import has from "../#has";
import isObject from "../#isObject";

function assign<T extends object, U extends object>(object: T, source: U): { [P in keyof T | keyof U]: P extends keyof U ? U[P] : P extends keyof T ? T[P] : never } {
    const result: any = Object(object);

    if (isObject(source)) {
        for (const key in source) {
            if (has(source, key)) {
                result[key] = source[key];
            }
        }
    }
    return result;
}

export default assign;
