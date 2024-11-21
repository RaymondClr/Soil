import * as _ from "../soil-ts/soil";

const aepPath = _.createPath(_.pathDesktop.fsName, "Soil.aep");
_.importAsProject(aepPath);
// 结果：桌面 aep 文件被导入为工程。
