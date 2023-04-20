import delPath from "../utils/delpath";
import run from "../utils/run"
import { series, parallel, src, dest } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";// 删除上次构建的文件
const less = require("gulp-less");
// 自动加兼容前缀
const autoprefixer = require("gulp-autoprefixer");
// 删除之前的dist
export const removeDist = () => {
    return delPath(`${pkgPath}/biu`)
}

// 打包样式

export const buildStyle = () => {
    // // src() 创建一个流，用于从文件系统读取 Vinyl 对象。
    return src(`${componentPath}/src/**/style/**.less`)
    // `${componentPath}/src/**/style/**.less` 的base 路径会被解析成 ${componentPath}/src
        // pipe 用于衔接文件流 固定数据处理的流程 
        // 处理less
        .pipe(less())
        // 自动前缀
        .pipe(autoprefixer())
        // dest  写入文件到指定路径 将base路径: ${componentPath}/src 替换为 下面的路径
        .pipe(dest(`${pkgPath}/biu/lib/src`))
        .pipe(dest(`${pkgPath}/biu/es/src`));
}
// 打包样式路径处理的答疑, gulp.dest 会对 gulp.src的base路径进行替换处理,会保持之前的相对结构, 所以每个组件的less 文件的相对路径不会发生改变
//打包组件
export const buildComponent = async () => {
    run("pnpm run build", componentPath);
};
// 打包组件与打包样式可以同时进行
export default series(async () => removeDist(), parallel(async () => buildStyle(), async () => buildComponent()))
