import * as _ from "../soil-ts";

const imagePath = _.createPath(_.pathDesktop.fsName, "image.png");
_.log(_.fileToBinary(imagePath));
// 结果：桌面日志会记录桌面上 image 图片的二进制数据。
