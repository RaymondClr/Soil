const { exec } = require("child_process");
const chokidar = require("chokidar");
const path = require("path");

const srcDir = path.resolve(__dirname, "../examples");
const watcher = chokidar.watch(srcDir, {
    ignored: /node_modules/,
    persistent: true,
});

console.log(`正在监视 ${srcDir} 目录中的 .tsx 文件修改...`);

watcher.on("change", (filePath) => {
    console.log(`检测到文件变动：${filePath}，开始编译...`);
    exec("npm run insert-examples", (err, out, errOutput) => {
        if (err) {
            console.error(`插入示例出错：\n${errOutput}`);
        } else {
            console.log(`插入示例完成：\n${out}`);
            exec("npm run build", (error, stdout, stderr) => {
                if (error) {
                    console.error(`编译出错：\n${stderr}`);
                } else {
                    console.log(`编译完成：\n${stdout}`);
                }
            });
        }
    });
});
