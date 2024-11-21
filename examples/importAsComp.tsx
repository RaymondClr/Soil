import * as _ from "../soil-ts/soil";

const psdPath = _.createPath(_.pathDesktop.fsName, "Soil.psd");
_.importAsComp(psdPath, false);
// 结果：桌面 psd 文件被导入为合成。
