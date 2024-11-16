import readFile from "./readFile";

/**
 * 文件转二进制 Binary
 *
 * @param {LooseFile} file
 * @returns {string}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function fileToBinary(file: LooseFile): string {
    const content = readFile(file, "binary");
    return content === null ? "" : content.toSource();
}

export default fileToBinary;
