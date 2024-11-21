import castFile from "./_internal/_castFile";

/**
 * 执行文件
 *
 * @param {LooseFile} path
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode evalFile}
 * @example
 *
 * ```ts
 * _.executeFile("C:\\Windows\\System32\\notepad.exe");
 * // 注意：执行文件受限于 Ae 的安全策略，请在执行前确保 首选项 > 脚本和表达式，并关闭「执行文件时警告用户」选项。
 * // 结果：操作系统为 Windows 的前提下，记事本应用被打开。
 * ```
 */
function executeFile(path: LooseFile): boolean {
    const file = castFile(path);
    if (!file.exists) {
        return false;
    }
    return file.execute();
}

export default executeFile;
