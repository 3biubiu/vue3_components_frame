<template>
    <div>启动测试</div>
    <Button :test="true">测试按钮1</Button>
    <biu-button :type="'primary'" :test="true" >测试按钮--type</biu-button>
</template>

<script lang = "ts" setup>
import { Button } from "@frame/components";
</script>