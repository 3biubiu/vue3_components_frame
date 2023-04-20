// node 提供的子进程模块 实现多个进程同时执行, 进程之间通过消息进行通信
// spawn 函数在新的进程中启动一个命令，我们可以通过新的进程向命令传递任何参数。
import { spawn } from "child_process";

export default async (command: string, path: string) => {
    //cmd表示命令，args代表参数，如 rm -rf  rm就是命令，-rf就为参数

    const [cmd, ...args] = command.split(' ')

    return new Promise((resolve, reject) => {
        const app = spawn(cmd, args, {
            cwd: path, //执行命令的路径
            stdio: 'inherit', // //输出共享给父进程  // 默认是pipe,pipe必须通过on来接收信息，inherit不需要，实时反馈
            shell: true,  //mac不需要开启，windows下git base需要开启支持
        });
        //执行完毕关闭并resolve
        app.on("close", resolve);
    })
}