import partition from "../lodash/#partition";
import isEven from "./_isEven";

function partitionPrefsPairs<T extends string>(array: Array<T>): [Array<T>, Array<T>] {
    array.shift();
    return partition(array, function (value: T, index: number) {
        return isEven(index);
    });
}

export default partitionPrefsPairs;
