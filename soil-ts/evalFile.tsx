import castFile from "./_internal/_castFile";

/**
 * 运行文件
 *
 * @param {LooseFile} path
 * @returns {*}
 * @since 0.1.0
 * @category Soil
 * @see {@linkcode executeFile}
 * @example
 *
 * ```ts
 * const jsxPath = _.createPath(_.pathDesktop.fsName, "script.jsx");
 * _.writeFile(jsxPath, "alert('Hello After Effects')");
 * _.evalFile(jsxPath);
 * // 结果：桌面被写入 script.jsx 文件，随后被调用执行，弹窗中显示内容 Hello After Effects。
 * ```
 */
function evalFile(path: LooseFile): any {
    const file = castFile(path);
    return $.evalFile(file.alias ? file.resolve() : file);
}

export default evalFile;
