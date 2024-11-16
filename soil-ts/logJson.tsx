import { pathDesktop } from "./_internal/_global";
import writeJson from "./writeJson";
import createPath from "./createPath";

/**
 * 将任意值作为 json 写入到桌面 soil_log.json 文件中
 *
 * @param {*} object
 * @since 0.1.0
 * @category Soil
 * @see log
 * @example
 * foo(param)
 * // => result
 */
function logJson(object: any): void {
    writeJson(createPath(pathDesktop.toString(), "soil_log.json"), object);
}

export default logJson;
