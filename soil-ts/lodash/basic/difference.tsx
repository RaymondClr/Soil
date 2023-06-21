import { nativeSlice } from "./_global";
import contains from "./contains";
import filter from "../#filter";
import flatten from "../#flatten";

function difference<T>(array: Array<T>, ...args: Array<any>): Array<T> {
    const values = flatten(nativeSlice.call(arguments, 1));
    return filter(array, function (value): value is T {
        return !contains(values, value);
    });
}

export default difference;
