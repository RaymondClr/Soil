import map from "./lodash/#map";
import zipObject from "./lodash/#zipObject";
import extractPrefskeyName from "./_internal/_extractPrefskeyName";
import partitionPrefsPairs from "./_internal/_partitionPrefsPairs";
import splitPrefsPairs from "./_internal/_splitPrefsPairs";
import splitPrefsSection from "./_internal/_splitPrefsSection";
import trimPrefsBlankChar from "./_internal/_trimPrefsBlankChar";
import readFile from "./readFile";

/**
 * 将首选项文件转换为对象键值对
 *
 * @param {LooseFile} path
 * @returns {{ [x: string]: { [x: string]: string } }}
 * @since 0.1.0
 * @category Soil
 * @see decodePrefs
 * @example
 *
 * ```ts
 * const prefPath = _.createPath(_.pathUserData.fsName, "Adobe", "After Effects", "22.6", "Adobe After Effects 22.6 设置.txt");
 * // 注意：每个版本的 Ae，偏好文件的存放位置都不同，主要区别在路径中的版本号，请确保正确的版本号方可读取。
 * const prefData = _.parsePrefs(prefPath);
 * _.logJson(prefData);
 * // 结果：桌面 Json 日志会记录转换为标准 Json 的偏好文件。
 * ```
 */
function parsePrefs(path: LooseFile): { [x: string]: { [x: string]: string } } {
    const splitSection = splitPrefsSection(readFile(path) as string);
    const groupedSection = partitionPrefsPairs(splitSection);
    const section = map(groupedSection[0], extractPrefskeyName);
    const pairs = map(map(groupedSection[1], splitPrefsPairs), function (values) {
        const groupedPairs = partitionPrefsPairs(values);
        const keys = map(groupedPairs[0], extractPrefskeyName);
        return zipObject(keys, map(groupedPairs[1], trimPrefsBlankChar));
    });
    return zipObject(section, pairs);
}

export default parsePrefs;
