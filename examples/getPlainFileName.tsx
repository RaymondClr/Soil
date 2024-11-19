import * as _ from "../soil-ts/soil";

const projectFile = app.project.file;
// 注意：未保存的工程文件返回 null。
if (_.isFile(projectFile)) {
    const fileName = _.getPlainFileName(projectFile);
    _.log(fileName);
}
// 结果：桌面日志会记录移除后缀名的文件名（不包含路径，只有文件名）。
