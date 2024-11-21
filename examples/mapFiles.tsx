import * as _ from "../soil-ts";

_.log(_.mapFiles(_.pathDesktop.fsName, (file) => file.displayName));
// 结果：桌面日志会记录所有桌面上的文件名称，不包括文件夹。

_.log(_.mapFiles(_.pathDesktop.fsName, (file) => file.fsName));
// 结果：桌面日志会记录所有桌面上的文件路径，不包括文件夹。
