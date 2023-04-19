import { defineConfig } from "vite"

import vue from "@vitejs/plugin-vue"
// 让我们的打包拥有声明文件
import dts from "vite-plugin-dts";
// @ts-ignore
import DefineOptions from 'unplugin-vue-define-options/vite'
export default defineConfig({
    build: {
        // 打包后的文件目录

        // outDir: 'es',
        //压缩
        minify: false,
        // vite 基于 rollup  所以可以直接使用rollup 的配置进行覆写
        rollupOptions: {
            input: ["index.ts"],
            //忽略打包vue文件 忽略less文件 由 gulp 解决
            // // 确保外部化处理那些你不想打包进库的依赖
            external: ["vue", /\.less/],
            //input: ["index.ts"],
            output: [
                {
                    //打包格式
                    format: "es",
                    //打包后文件名
                    entryFileNames: "[name].mjs",
                    //让打包目录和我们目录对应
                    /**
                     * 此模式不会创建尽可能少的块，而是使用原始模块名称作为文件名为所有模块创建单独的块。需要 output.dir 选项。
                     * Tree-shaking 仍将应用，抑制提供的入口点未使用或在执行时没有副作用的文件，并删除非入口点的文件的未使用导出。
                     */
                    preserveModules: true,
                    // 使用什么导出模式。默认为 auto ，它根据 input 模块导出的内容猜测您的意图
                    // https://rollupjs.org/configuration-options/#output-exports
                    exports: "named",
                    //配置打包根目录
                    dir: "../biu/es",
                },
                {
                    //打包格式
                    format: "cjs",
                    //打包后文件名
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    exports: "named",
                    //配置打包根目录
                    dir: "../biu/lib",
                },
            ]
        },
        /**
         * 构建为库。entry 是必需的，因为库不能使用 HTML 作为入口。name 则是暴露的全局变量，
         * 并且在 formats 包含 'umd' 或 'iife' 时是必需的。默认 formats 是 ['es', 'umd']，
         * 如果使用了多个配置入口，则是 ['es', 'cjs']。fileName 是输出的包文件名，默认 fileName 是 package.json 的 name 选项，
         * 同时，它还可以被定义为参数为 format 和 entryAlias 的函数。
         */
        lib: {
            // 入口文件
            entry: "./index.ts",
            // name: "biu",
            // fileName: "biu",
            // // 输入几种
            // formats: ["es", "umd", "cjs"],
        },
    },
    plugins: [
        vue(),
        DefineOptions(),
        dts({
            entryRoot: "./src",
            outputDir: ["../biu/es/src", "../biu/lib/src"],
            //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
            tsConfigFilePath: "../../tsconfig.json",
        }),
        {
            name: "style",
            generateBundle(config, bundle) {
                //这里可以获取打包后的文件目录以及代码code
                const keys = Object.keys(bundle);

                for (const key of keys) {
                    const bundler: any = bundle[key as any];
                    //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件
                    this.emitFile({
                        type: "asset",
                        fileName: key, //文件名名不变
                        source: bundler.code.replace(/\.less/g, ".css"),
                    });
                }
            }
        }
    ],
})