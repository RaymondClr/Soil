import * as _ from "../soil-ts/soil";

const prefPath = _.createPath(_.pathUserData.fsName, "Adobe", "After Effects", "22.6", "Adobe After Effects 22.6 设置.txt");
// 注意：每个版本的 Ae，偏好文件的存放位置都不同，主要区别在路径中的版本号，请确保正确的版本号方可读取。
const prefData = _.parsePrefs(prefPath);
_.logJson(prefData);
// 结果：桌面 Json 日志会记录转换为标准 Json 的偏好文件。
