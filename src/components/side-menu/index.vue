<template>
  <el-menu
    default-active="2"
    :background-color="data.bgColor"
    active-text-color="#ffd04b"
    text-color="#fff"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose">
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>文件列表</span>
      </template>
      <el-menu-item index="1-1">上传文件</el-menu-item>
      <el-menu-item index="1-2">下载文件</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>我的申请</span>
      </template>
      <el-menu-item index="2-1">申请记录</el-menu-item>
      <el-menu-item index="2-2">申请管理</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3">
      <template #title>
        <el-icon><document /></el-icon>
        <span>表管理</span>
      </template>
      <el-menu-item index="3-1">申请记录</el-menu-item>
      <el-menu-item index="3-2">申请管理</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4">
      <template #title>
        <el-icon><setting /></el-icon>
        <span>字段管理</span>
      </template>
      <el-menu-item index="4-1">字段列表</el-menu-item>
      <el-menu-item index="4-2">字段导入</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import { Document, Location, Setting } from '@element-plus/icons-vue';
import variables from '@/assets/styles/variables.module.scss';

const data = ref({
  bgColor: variables.sideMenuBackgroundColor,
});
console.log('variables', variables);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
}
</style>
