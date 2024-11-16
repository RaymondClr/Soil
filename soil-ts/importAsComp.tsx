import importFile from "./importFile";

/**
 * 将文件作为合成导入 Ae 中
 *
 * @param {LooseFile} file
 * @param {boolean} sequence
 * @returns {(CompItem | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function importAsComp(file: LooseFile, sequence: boolean): CompItem | null {
    return importFile(file, ImportAsType.COMP, sequence);
}

export default importAsComp;
