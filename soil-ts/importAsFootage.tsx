import importFile from "./importFile";

/**
 * 将文件作为素材导入 Ae 中
 *
 * @param {LooseFile} file
 * @param {boolean} sequence
 * @returns {(FootageItem | null)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode importAsComp}
 * @example
 *
 * ```ts
 * const sequencePath = _.createPath(_.pathDesktop.fsName, "Sequence", "image_01.png");
 * _.importAsFootage(sequencePath, false);
 * // 结果：桌面 Sequence 文件夹中的 png 序列第一帧被导入为素材。
 *
 * _.importAsFootage(sequencePath, true);
 * // 结果：桌面 Sequence 文件夹中的 png 序列被导入为素材。
 * ```
 */
function importAsFootage(file: LooseFile, sequence: boolean): FootageItem | null {
    return importFile(file, ImportAsType.FOOTAGE, sequence);
}

export default importAsFootage;
