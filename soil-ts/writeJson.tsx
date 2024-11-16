import stringify from "./stringify";
import writeFile from "./writeFile";

/**
 * 写入 json 文件
 *
 * @param {LooseFile} path
 * @param {object} object
 * @param {(string | number)} [indent=4]
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see writeFile
 * @example
 * writeJson(param)
 * // => result
 */
function writeJson(path: LooseFile, object: object, indent: string | number = 4): boolean {
    return writeFile(path, stringify(object, indent));
}

export default writeJson;
