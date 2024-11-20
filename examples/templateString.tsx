import * as _ from "../soil-ts/soil";

_.log(_.templateString("${0}-${1}-${2}", "a", "b", "c"));
// 桌面日志记录 a-b-c

_.log(_.templateString("${0}${1}${0}${1}", 0, 1));
// 桌面日志记录 0101
