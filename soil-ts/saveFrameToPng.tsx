import castFile from "./_internal/_castFile";

/**
 * 将合成帧保存为 png 图像
 *
 * @param {LooseFile} file
 * @param {CompItem} compItem
 * @param {number} [time=compItem.time]
 * @since 0.1.0
 * @category Soil
 * @see foo, bar, yoo
 * @example 
 * foo(param)
 * // => result
 */
function saveFrameToPng(file: LooseFile, compItem: CompItem, time: number = compItem.time): void {
    compItem.saveFrameToPng(time, castFile(file));
}

export default saveFrameToPng;
