import importFile from "./importFile";

/**
 * 将文件作为裁剪图层导入 Ae 中
 *
 * @param {LooseFile} file
 * @param {boolean} sequence
 * @returns {(CompItem | null)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode importAsComp}
 * @example
 *
 * ```ts
 * const psdPath = _.createPath(_.pathDesktop.fsName, "Soil.psd");
 * _.importAsCroppedLayers(psdPath, false);
 * // 结果：桌面 psd 文件被导入为裁剪图层的合成。
 * ```
 */
function importAsCroppedLayers(file: LooseFile, sequence: boolean): CompItem | null {
    return importFile(file, ImportAsType.COMP_CROPPED_LAYERS, sequence);
}

export default importAsCroppedLayers;
