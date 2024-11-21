import { pathDesktop } from "./_internal/_global";
import writeJson from "./writeJson";
import createPath from "./createPath";

/**
 * 将任意值作为 json 写入到桌面 soil_log.json 文件中
 *
 * @param {*} object
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode log}
 * @example
 *
 * ```ts
 * _.logJson("Hello After Effects!");
 * // 桌面 json 日志记录 "Hello After Effects!"。
 *
 * _.logJson(undefined);
 * // 桌面 json 日志记录 null。
 *
 * _.logJson([1, 2, 3]);
 * // 桌面 json 日志换行记录 ["1", "2", "3"]。
 * ```
 */
function logJson(object: any): void {
    writeJson(createPath(pathDesktop.toString(), "soil_log.json"), object);
}

export default logJson;
