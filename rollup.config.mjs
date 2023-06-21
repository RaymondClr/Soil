import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
    input: "src/index.tsx",
    output: [
        {
            file: "dist/script.jsx",
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
        {
            file: "dist/script.min.jsx",
            intro: "(function () {",
            outro: "}).call(this);",
            plugins: [
                terser({
                    compress: {
                        arrows: false,
                        arguments: true,
                        booleans: false,
                        conditionals: false,
                        evaluate: false,
                        join_vars: false,
                        keep_infinity: true,
                        sequences: false,
                        toplevel: true,
                    },
                    format: {
                        braces: true,
                    },
                }),
            ],
        },
    ],
    treeshake: {
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false,
    },
    plugins: [typescript()],
    context: "this",
};
