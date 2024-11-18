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

/**
 * 调试工具。将任意值换行写入到桌面 soil_log.txt 文件中。
 *
 * @param {*} object
 * @param {?boolean} [rawMode]
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see logJson
 * @example
 *
 * ```ts
 * _.log("Hello After Effects!");
 * 
 * _.log(1);
 * 
 * _.log([1, 2, 3]);
 * ```
 */
function log(object: any, rawMode?: boolean): string {
    const content = !rawMode && isArray(object) ? formatArrayLog(object) : String(object);
    const logFile = createPath(pathDesktop.toString(), "soil_log.txt");
    writeFile(logFile, content + "\n", undefined, "a");
    return content;
}

export default log;
