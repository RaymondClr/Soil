import importFile from "./importFile";

/**
 * 将文件作为素材导入 Ae 中
 *
 * @param {LooseFile} file
 * @param {boolean} sequence
 * @returns {(FootageItem | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function importAsFootage(file: LooseFile, sequence: boolean): FootageItem | null {
    return importFile(file, ImportAsType.FOOTAGE, sequence);
}

export default importAsFootage;
