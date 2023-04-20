import * as components from "@frame/components";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      BiuButton: typeof components.Button;
    //   EaIcon: typeof components.Icon;
    }
  }
  export {};
  // pnpm add @vue/runtime-core -D -w  安装这个 然后 使用该文件 组件库在使用过程中就有属性提示了
  // doc文档里需要单独使用这个文件(因为没有自己的tsconfig), 当用户使用组件库的时候需要让用户在tsconfig.json中配置types:["包名/lib/src/components"]才会出现提示效果