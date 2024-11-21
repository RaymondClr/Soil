import * as _ from "../soil-ts/soil";

const jsxPath = _.createPath(_.pathDesktop.fsName, "script.jsx");
_.writeFile(jsxPath, "alert('Hello After Effects')");
_.evalFile(jsxPath);
// 结果：桌面被写入 script.jsx 文件，随后被调用执行，弹窗中显示内容 Hello After Effects。
