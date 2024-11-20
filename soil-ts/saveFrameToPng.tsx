import castFile from "./_internal/_castFile";

/**
 * 将合成帧保存为 png 图像
 *
 * @param {LooseFile} file
 * @param {CompItem} compItem
 * @param {number} [time=compItem.time]
 * @since 0.1.0
 * @category Soil
 * @see savePngSequence
 * @example
 *
 * ```ts
 * const activeComp = _.getActiveComp();
 * // 注意：如果没有活动合成会返回 undefined
 * if (activeComp) {
 *     const outputPath = _.createPath(_.pathDesktop.fsName, "frame.png");
 *     _.saveFrameToPng(outputPath, activeComp, 0);
 * }
 * // 结果：活动合成的第一帧会以名称 frame.png 被导出至桌面
 * ```
 */
function saveFrameToPng(file: LooseFile, compItem: CompItem, time: number = compItem.time): void {
    compItem.saveFrameToPng(time, castFile(file));
}

export default saveFrameToPng;
