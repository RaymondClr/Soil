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
 * @see parseJsonFile, writeFile
 * @example
 *
 * ```ts
 * const textPath = _.createPath(_.pathDesktop.fsName, "Soil.json");
 * _.writeJson(textPath, { version: 2025, name: "After Effects" });
 * // 结果：桌面被写入一个 Soil.json 文件，文件存储对象被字符串化后的内容。
 * ```
 */
function writeJson(path: LooseFile, object: object, indent: string | number = 4): boolean {
    return writeFile(path, stringify(object, indent));
}

export default writeJson;
