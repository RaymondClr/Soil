import castFolder from "./_internal/_castFolder";

/**
 * 显示本地文件夹
 *
 * @param {LooseFolder} value
 * @returns {boolean}
 * @since 0.1.0
 * @category Soil
 * @see revealFile
 * @example
 *
 * ```ts
 * _.revealFolder(_.pathDesktop.fsName);
 * // 结果：资源管理器会打开桌面所在文件夹。
 * ```
 */
function revealFolder(value: LooseFolder): boolean {
    const newFolder = castFolder(value);
    return newFolder.exists ? newFolder.execute() : false;
}

export default revealFolder;
