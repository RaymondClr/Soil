import * as _ from "../soil-ts";

_.log(_.filterFiles(_.pathDesktop.fsName, (file) => file.displayName[0] === "G"));
// 结果：桌面日志会记录所有桌面上以大写 G 开头的文件路径，不包括文件夹。
