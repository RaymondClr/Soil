import * as _ from "../soil-ts";

_.eachFilesRight(_.pathDesktop.fsName, function (file, index) {
    _.log(`${index + 1} ${file.fsName}`);
});
// 结果：桌面日志会记录所有桌面上的文件路径，不包括文件夹。
