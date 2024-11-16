import castFile from "./_internal/_castFile";

/**
 * 导入文件到 Ae 中
 *
 * @template {_ItemClasses} T
 * @param {LooseFile} path
 * @param {ImportAsType} importType
 * @param {boolean} [sequence=false]
 * @returns {(T | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example
 * foo(param)
 * // => result
 */
function importFile<T extends _ItemClasses>(path: LooseFile, importType: ImportAsType, sequence: boolean = false): T | null {
    const file = castFile(path);
    const options = new ImportOptions(file);
    if (!options.canImportAs(importType)) {
        return null;
    }
    options.importAs = importType;
    options.sequence = sequence;
    return app.project.importFile(options) as T | null;
}

export default importFile;
