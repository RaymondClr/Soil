import { nativeSlice } from "./lodash/basic/_global";
import { reTemplateString } from "./_internal/_global";

function templateString(string: string, ...rest: Array<PropertyName>): string {
    const values = nativeSlice.call(arguments, 1) as Array<PropertyName>;
    return string.replace(reTemplateString, (matched, $1) => values[Number($1)]);
}

export default templateString;
