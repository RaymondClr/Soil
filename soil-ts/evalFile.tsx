import castFile from "./_internal/_castFile";

/**
 * 运行文件
 *
 * @param {LooseFile} path
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function evalFile(path: LooseFile): any {
    const file = castFile(path);
    return $.evalFile(file.alias ? file.resolve() : file);
}

export default evalFile;
