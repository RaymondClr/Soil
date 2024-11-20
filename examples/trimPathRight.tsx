import * as _ from "../soil-ts/soil";

_.log(_.trimPathRight("path/to/file.aep", 1));
// 桌面日志记录 path/to

_.log(_.trimPathRight("path/to/file.aep", 2));
// 桌面日志记录 path

_.log(_.trimPathRight("path/to/file.aep", 3));
// 桌面日志记录空字符串
