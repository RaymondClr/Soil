import * as _ from "../soil-ts/soil";

const projectPath = app.project.file;
if (projectPath) {
    _.revealFile(projectPath);
}
// 结果：当前 Ae 工程文件被保存的前提下，资源管理器会打开工程文件所在文件夹。
