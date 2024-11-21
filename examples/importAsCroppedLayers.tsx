import * as _ from "../soil-ts/soil";

const psdPath = _.createPath(_.pathDesktop.fsName, "Soil.psd");
_.importAsCroppedLayers(psdPath, false);
// 结果：桌面 psd 文件被导入为裁剪图层的合成。
