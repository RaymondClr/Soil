const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const { readdirSync, statSync } = require("fs");
const { resolve, extname, basename } = require("path");

const minutes = 10;
const inputDir = resolve(__dirname, "examples");
const now = Date.now();
const modifiedTimeLimit = now - minutes * 60 * 1000;
const files = readdirSync(inputDir).filter((file) => {
    const filePath = resolve(inputDir, file);
    const stats = statSync(filePath);
    const isRecent = stats.mtimeMs >= modifiedTimeLimit;
    return extname(file) === ".tsx" && isRecent;
});

if (files.length === 0) {
    console.log(`没有在过去 ${minutes} 分钟内修改的 .tsx 文件。`);
    process.exit(0);
}

const configs = files.map((file) => {
    const inputPath = resolve(inputDir, file);
    const outputFileName = basename(file, ".tsx");

    return {
        input: inputPath,
        output: {
            file: `dist/${outputFileName}.jsx`,
            intro: "(function () {",
            outro: "}).call(this);",
            plugins: [
                terser({
                    compress: false,
                    mangle: false,
                    format: {
                        beautify: true,
                        braces: true,
                        comments: false,
                        keep_quoted_props: true,
                        keep_numbers: true,
                        preamble: `// Raymond Yan (raymondclr@foxmail.com / qq: 1107677019) - ${new Date().toLocaleString()}\n// 哔哩哔哩：https://space.bilibili.com/634669（无名打字猿）\n// 爱发电：https://afdian.net/a/raymondclr\n`,
                        wrap_func_args: false,
                    },
                }),
            ],
        },
        plugins: [typescript()],
        treeshake: {
            propertyReadSideEffects: false,
            unknownGlobalSideEffects: false,
        },
        context: "this",
    };
});
module.exports = configs;
