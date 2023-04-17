import delPath from "../utils/delpath";
import { series, parallel,src, dest } from "gulp";
import { componentPath, pkgPath } from "../utils/paths";// 删除上次构建的文件
const less = require("gulp-less");
// 自动加兼容前缀
const autoprefixer = require("gulp-autoprefixer");
export const removeDist = () => {
    return delPath(`${pkgPath}/biu`)
}

// 打包样式
export const buildStyle = () => {
    // // src() 创建一个流，用于从文件系统读取 Vinyl 对象。
    return src(`${componentPath}/src/**/style/**.less`)
    // pipe 用于衔接文件流 固定数据处理的流程 
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/biu/lib/src`))
    .pipe(dest(`${pkgPath}/biu/es/src`));
}

export default series(async () => removeDist())
