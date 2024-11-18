const fs = require("fs");
const path = require("path");

const { readdirSync, statSync } = require("fs");
const { resolve, extname, basename } = require("path");

const minutes = 10;
const inputDir = resolve(__dirname, "../examples");
const now = Date.now();
const modifiedTimeLimit = now - minutes * 60 * 1000;
const files = readdirSync(inputDir).filter(file => {
    const filePath = resolve(inputDir, file);
    const stats = statSync(filePath);
    const isRecent = stats.mtimeMs >= modifiedTimeLimit;
    return extname(file) === ".tsx" && isRecent;
});

if (files.length === 0) {
    console.log(`没有在过去 ${minutes} 分钟内修改的 .tsx 文件。`);
    process.exit(0);
}

const SOIL_TS_DIR = path.resolve(__dirname, "../soil-ts");
const EXAMPLES_DIR = path.resolve(__dirname, "../examples");

function getExampleCode(filePath) {
    const content = fs.readFileSync(filePath, "utf-8");
    const lines = content.split("\n");
    const formattedLines = lines.slice(2, -1).map(line => ` * ${line}`);
    return formattedLines.join("\n");
}

function updateExample(fileName) {
    const soilFilePath = path.join(SOIL_TS_DIR, fileName);
    const exampleFilePath = path.join(EXAMPLES_DIR, fileName);
    if (!fs.existsSync(soilFilePath) || !fs.existsSync(exampleFilePath)) {
        console.log(`文件 ${fileName} 不存在于 soil-ts 或 examples 中，跳过处理。`);
        return;
    }
    const exampleCode = getExampleCode(exampleFilePath);
    const soilContent = fs.readFileSync(soilFilePath, "utf-8");
    const fileBaseName = path.basename(fileName, ".tsx");
    const regex = new RegExp(`(^[^\\n\\r]+@example\\s*?[\\n\\r](?:^(?!function|let|const).*?[\\n\\r])*?)(function|let|const) ${fileBaseName}`, "img");
    const newExample = ` * @example\n *\n * \`\`\`ts\n${exampleCode}\n * \`\`\`\n */\n`;
    updatedContent = soilContent.replace(regex, function (match, $1) {
        return match.replace($1, newExample);
    });
    fs.writeFileSync(soilFilePath, updatedContent, "utf-8");
    console.log(`已更新文件: ${fileName}`);
}

function insertExamples(exampleFiles) {
    console.log(exampleFiles);
    exampleFiles.forEach(fileName => {
        updateExample(fileName);
    });

    console.log("所有文件已处理完毕。");
}

insertExamples(files);
