import castFile from "./_internal/_castFile";

/**
 * 读取本地文件
 *
 * @param {LooseFile} path
 * @param {string} [encoding="utf-8"]
 * @returns {(string | null)}
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function readFile(path: LooseFile, encoding: string = "utf-8"): string | null {
    const file = castFile(path);
    if (!file.exists) {
        return null;
    }
    file.encoding = encoding;
    file.open("r");
    const contents = file.read();
    file.close();
    return contents;
}

export default readFile;
