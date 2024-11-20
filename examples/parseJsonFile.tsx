import * as _ from "../soil-ts/soil";

const textPath = _.createPath(_.pathDesktop.fsName, "Soil.json");
_.writeJson(textPath, { version: 2025, name: "After Effects" });
const data = _.parseJsonFile(textPath);
alert(`${data.name} ${data.version}`);
// 结果：桌面被写入一个 Soil.json 文件，弹窗显示内容 After Effects 2025。
