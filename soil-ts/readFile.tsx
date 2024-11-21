import castFile from "./_internal/_castFile";

/**
 * 读取本地文件
 *
 * @param {LooseFile} path
 * @param {string} [encoding="utf-8"]
 * @returns {(string | null)}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode writeFile}, {@linkcode writeJson}
 * @example
 *
 * ```ts
 * const textPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
 * _.writeFile(textPath, "Hello After Effects");
 *
 * const utfContent = _.readFile(textPath);
 * alert(utfContent);
 * // 结果：弹窗显示读取的 UTF-8 内容。
 *
 * const binaryContent = _.readFile(textPath, "binary");
 * alert(binaryContent);
 * // 结果：弹窗显示读取的 Binary 内容。
 * ```
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
