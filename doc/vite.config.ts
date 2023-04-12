import { defineConfig } from "vite";
// Vue 3 单文件组件的解析插件
import vue from "@vitejs/plugin-vue";
// @vitejs/plugin-vue会默认加载 目录 下的 index.html

// @ts-ignore
import DefineOptions from "unplugin-vue-define-options/vite";
// DefineOptions 可以实现在setup语法糖下给组件命名
export default defineConfig({
  plugins: [vue(), DefineOptions()],
});