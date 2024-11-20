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
 * @see writeJson, parseJson
 * @example
 *
 * ```ts
 * const textPath = _.createPath(_.pathDesktop.fsName, "Soil.json");
 * _.writeJson(textPath, { version: 2025, name: "After Effects" });
 * const data = _.parseJsonFile(textPath);
 * alert(`${data.name} ${data.version}`);
 * // 结果：桌面被写入一个 Soil.json 文件，弹窗显示内容 After Effects 2025。
 * ```
 */
function parseJsonFile(path: LooseFile): any {
    const content = readFile(path);
    return isString(content) ? parseJson(content) : content;
}

export default parseJsonFile;
