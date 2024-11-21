import castFile from "./_internal/_castFile";

/**
 * 移动文件
 *
 * @param {LooseFile} path
 * @param {string} newPath
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode copyFile}
 * @example
 *
 * ```ts
 * const before = _.createPath(_.pathDesktop.fsName, "Foo", "Soil.txt");
 * const after = _.createPath(_.pathDesktop.fsName, "Bar", "Soil.txt");
 * // 警告，移动大文件存在文件丢失或损坏的风险，建议使用先复制，再删除原文件的方法保证数据安全。
 * _.moveFile(before, after);
 * // 结果：桌面 Foo 文件夹中的文件被移动至桌面的 Bar 文件夹。
 * ```
 */
function moveFile(path: LooseFile, newPath: string): boolean {
    const file = castFile(path);
    return file.exists ? file.rename(newPath) : false;
}

export default moveFile;
