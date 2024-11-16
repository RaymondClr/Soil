import importFile from "./importFile";

/**
 * 将文件作为工程导入 Ae 中
 *
 * @param {LooseFile} file
 * @returns {(_ItemClasses | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function importAsProject(file: LooseFile): _ItemClasses | null {
    return importFile(file, ImportAsType.PROJECT);
}

export default importAsProject;
