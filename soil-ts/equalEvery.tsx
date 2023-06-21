import every from "./lodash/#every";

function equalEvery(array: Array<any>): boolean {
    if (array.length === 0) {
        return false;
    }
    const target = array[0];
    return every(array, function (element) {
        return element === target;
    });
}

export default equalEvery;
