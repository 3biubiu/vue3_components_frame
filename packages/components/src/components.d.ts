import * as components from "./index";
declare module "@vue/runtime-core" {
    export interface GlobalComponents {
      BiuButton: typeof components.Button;
    //   EaIcon: typeof components.Icon;
    }
  }
  export {};
  // pnpm add @vue/runtime-core -D -w  安装这个 然后 使用该文件 组件库在使用过程中就有属性提示了
