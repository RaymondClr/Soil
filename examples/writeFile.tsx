import * as _ from "../soil-ts/soil";

const textPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
_.writeFile(textPath, "Hello After Effects");
const content = _.readFile(textPath);
alert(content);
// 结果：桌面被写入 Soil.txt 文件，弹窗内容显示 Hello After Effects。
