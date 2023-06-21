import isArray from "./isArray";
import isArguments from "../#isArguments";

function isFlattenable(value: any): value is Array<any> {
    return isArray(value) || isArguments(value);
}

export default isFlattenable;
