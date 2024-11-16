import isString from "./lodash/#isString";
import parseJson from "./parseJson.jsx";
import readFile from "./readFile.jsx";

/**
 * 读取 json 文件并解析为对象
 *
 * @param {LooseFile} path
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see parseJson
 * @example
 * foo(param)
 * // => result
 */
function parseJsonFile(path: LooseFile): any {
    const content = readFile(path);
    return isString(content) ? parseJson(content) : content;
}

export default parseJsonFile;
