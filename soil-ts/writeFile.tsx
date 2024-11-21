import castFile from "./_internal/_castFile";
import newFolder from "./_internal/_newFolder";

/**
 * 写入文件
 *
 * @param {LooseFile} path
 * @param {string} content
 * @param {string} [encoding="utf-8"]
 * @param {string} [mode="w"]
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode readFile}, {@linkcode writeJson}
 * @example
 *
 * ```ts
 * const textPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
 * _.writeFile(textPath, "Hello After Effects");
 * const content = _.readFile(textPath);
 * alert(content);
 * // 结果：桌面被写入 Soil.txt 文件，弹窗内容显示 Hello After Effects。
 * ```
 */
function writeFile(path: LooseFile, content: string, encoding: string = "utf-8", mode: string = "w"): boolean {
    let file = castFile(path);
    file.encoding = encoding;
    let fileFolder = newFolder(file.path);
    if (!fileFolder.exists) {
        fileFolder.create();
    }
    return file.open(mode) && file.write(content) && file.close();
}

export default writeFile;
