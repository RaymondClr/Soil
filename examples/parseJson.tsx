import * as _ from "../soil-ts/soil";

const config: AnyObject = _.parseJson('{"version": 2025, "name": "After Effects"}');
_.log(`${config.name} ${config.version}`);
// 结果：桌面日志记录字符串 After Effects 2025。
