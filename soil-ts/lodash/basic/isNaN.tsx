import isNumber from "../#isNumber";

function isNaN(value: any): value is number {
    return isNumber(value) && value != +value;
}

export default isNaN;
