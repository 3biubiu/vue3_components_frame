// 在打包之前是需要将前面打包的文件删除
import fs from "fs"

import { resolve } from "path"

import { pkgPath } from "./paths"

// 保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
    let files: string[] = []
    // fs.existsSync: 如果路径存在则返回 true，否则返回 false。
    if (fs.existsSync(path)) {
        //fs.readdirSync: 方法将返回一个包含“指定目录下所有文件名称”的数组对象。
        files = fs.readdirSync(path)

        files.forEach(async (file) => {
            let curPath = resolve(path, file)
            // isDirectory 判断是否为目录
            // fs.statSync 获取文件信息
            if (fs.statSync(curPath).isDirectory()) {
                if (file != "node_modules") {
                    await delPath(curPath)
                } else {
                    // delete file
                    if (!stayFile.includes(file)) {
                        // fs.unlink 异步地删除文件或符号链接
                        fs.unlinkSync(curPath);
                    }
                }
            }
        });
        if (path != `${pkgPath}/biu`) {
            
            // 删除文件或者目录
            // fs.rmdirSync(path);
            fs.rmSync(path,{ recursive: true, force: true });

        }
    }
};

export default delPath;