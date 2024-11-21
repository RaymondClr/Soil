import importFile from "./importFile";

/**
 * 将文件作为合成导入 Ae 中
 *
 * @param {LooseFile} file
 * @param {boolean} sequence
 * @returns {(CompItem | null)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode importAsFootage}
 * @example
 *
 * ```ts
 * const psdPath = _.createPath(_.pathDesktop.fsName, "Soil.psd");
 * _.importAsComp(psdPath, false);
 * // 结果：桌面 psd 文件被导入为合成。
 * ```
 */
function importAsComp(file: LooseFile, sequence: boolean): CompItem | null {
    return importFile(file, ImportAsType.COMP, sequence);
}

export default importAsComp;
