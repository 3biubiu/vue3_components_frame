<template>
    <button class="biu-button" :class="buttonStyle"><slot /></button>
</template>

<!-- <script lang= "ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'biu-button',
    setup() {
        return {}
    }
})
</script> -->
<!-- 使用setup 语法糖如何给组件命名 -->
<!-- 方法一 直接写两个script 标签 -->
<!-- 方法二 使用插件 unplugin-vue-define-options -->
  
<script lang="ts" setup>
import "./style/index.less"
import { computed} from 'vue'
defineOptions({ name: "biu-button" });

type ButtonProps = {
    type?: string;
    test: Boolean;
}

const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
    return {[`biu-button-${buttonProps.type}`] : buttonProps.type}
})
</script>