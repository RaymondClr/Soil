import * as _ from "../soil-ts";

const targetPath = _.createPath(_.pathDesktop.fsName, "Soil.txt");
const targetFile = new File(targetPath);
if (targetFile.exists) {
    // 警告：删除的文件不会进入回收站，删除前请评估文件安全风险。
    _.deleteFile(targetFile);
}
// 结果：如果桌面存在 Soil.txt 文件，会被删除。
