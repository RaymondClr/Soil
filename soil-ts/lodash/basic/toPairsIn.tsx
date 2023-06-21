import baseToPairs from "./_baseToPairs";
import keysIn from "../#keysIn";

function toPairsIn<T extends object>(object: T): Array<Array<keyof T | T[keyof T]>> {
    return baseToPairs(object, keysIn(object));
}

export default toPairsIn;
