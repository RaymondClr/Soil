import { pathDesktop } from "./_internal/_global";
import isArray from "./lodash/basic/isArray";
import map from "./lodash/#map";
import createPath from "./createPath";
import templateString from "./templateString";
import writeFile from "./writeFile";

function formatArrayItemLog(item: any, index: number) {
    return templateString("${0}: ${1}", String(index), String(item));
}

function formatArrayLog(array: Array<any>) {
    const source = array.toSource();
    const title = source.length > 200 ? "[...]" : source;
    return templateString(">(${0})", String(array.length)) + title + "\n" + map(array, formatArrayItemLog).join("\n");
}

function log(object: any, rawMode?: boolean) {
    const content = !rawMode && isArray(object) ? formatArrayLog(object) : String(object);
    const logFile = createPath(pathDesktop.toString(), "soil_log.txt");
    writeFile(logFile, content + "\n", undefined, "a");
    return content;
}

export default log;
