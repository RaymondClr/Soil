import encodeImageString from "./encodeImageString";
/**
 * 生成可以被 ScriptUI 控件读取的纯色图片编码明文
 * @param size 图片尺寸
 * @param color 图片颜色
 * @returns
 * @example 将图片批量写入到桌面 image 文件夹中
 * ```ts
 * let pathDesktop = _.pathDesktop.fsName;
 * _.times(100, index => {
 *     let image = _.newSolidImage([100, 100], [10 * index, 20 * index, 30 * index]) as unknown as string;
 *     _.writeFile(_.templateString("${0}/image/icon_${1}.png", pathDesktop, String(index)), image, "binary");
 * });
 * ```
 */
function newSolidImage(size: [number, number], color: [number, number, number]): ScriptUIImage {
    const imageData = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, size[0], 0, 0, 0, size[1], 1, 3, 0, 0, 0, 1, 24, 7, 9, 0, 0, 0, 3, 80, 76, 84, 69, color[0], color[1], color[2], 63, 26, 7, 10, 0, 0, 0, 11, 73, 68, 65, 84, 8, 215, 99, 32, 5, 0, 0, 0, 45, 0, 1, 226, 21, 94, 0, 56, 50, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 0, 56, 50];
    return encodeImageString(imageData) as unknown as ScriptUIImage;
}

export default newSolidImage;
