import importFile from "./importFile";

/**
 * 将文件作为工程导入 Ae 中
 *
 * @param {LooseFile} file
 * @returns {(_ItemClasses | null)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode importAsFootage}
 * @example
 *
 * ```ts
 * const aepPath = _.createPath(_.pathDesktop.fsName, "Soil.aep");
 * _.importAsProject(aepPath);
 * // 结果：桌面 aep 文件被导入为工程。
 * ```
 */
function importAsProject(file: LooseFile): _ItemClasses | null {
    return importFile(file, ImportAsType.PROJECT);
}

export default importAsProject;
