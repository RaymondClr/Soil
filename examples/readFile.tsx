import * as _ from "../soil-ts/soil";

const textPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
_.writeFile(textPath, "Hello After Effects");

const utfContent = _.readFile(textPath);
alert(utfContent);
// 结果：弹窗显示读取的 UTF-8 内容。

const binaryContent = _.readFile(textPath, "binary");
alert(binaryContent);
// 结果：弹窗显示读取的 Binary 内容。
