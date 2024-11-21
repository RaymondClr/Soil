import * as _ from "../soil-ts";

_.log(_.equalEvery([1, 1, 1]));
// 结果：桌面日志记录 true

_.log(_.equalEvery([1, 2, 3]));
// 结果：桌面日志记录 false
