import * as _ from "../soil-ts";

_.log(_.removeFileExt("project.aep"));
// 结果：桌面日志记录 project。

_.log(_.removeFileExt("image.001.exr"));
// 结果：桌面日志记录 image.001
