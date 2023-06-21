import { nativeJoin } from "./lodash/basic/_global";

function createPath(...args: Array<string>): string {
    return nativeJoin.call(arguments, "/");
}

export default createPath;
