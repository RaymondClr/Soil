import * as _ from "../soil-ts";

const projectFile = app.project.file;
// 未保存的工程文件返回 null
if (_.isFile(projectFile)) {
    const newPath = _.createPath(_.pathDesktop.fsName, projectFile.displayName);
    _.copyFile(projectFile, newPath);
}
// 结果：当前 Ae 工程文件被拷贝至桌面。
