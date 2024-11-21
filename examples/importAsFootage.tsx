import * as _ from "../soil-ts/soil";

const sequencePath = _.createPath(_.pathDesktop.fsName, "Sequence", "image_01.png");
_.importAsFootage(sequencePath, false);
// 结果：桌面 Sequence 文件夹中的 png 序列第一帧被导入为素材。

_.importAsFootage(sequencePath, true);
// 结果：桌面 Sequence 文件夹中的 png 序列被导入为素材。
