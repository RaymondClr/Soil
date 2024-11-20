import * as _ from "../soil-ts/soil";

const textPath = _.createPath(_.pathDesktop.fsName, "Soil.json");
_.writeJson(textPath, { version: 2025, name: "After Effects" });
// 结果：桌面被写入一个 Soil.json 文件，文件存储对象被字符串化后的内容。
