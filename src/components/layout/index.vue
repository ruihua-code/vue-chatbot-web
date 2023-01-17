<template>
  <el-container class="container">
    <el-aside class="aside" width="80px">
      <Menu></Menu>
    </el-aside>
    <el-main class="main">
      <RouterView />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import Menu from '@/components/side-menu/index.vue';
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;

  .aside {
    padding-top: 4px;
  }

  .main {
    background: #fff;
    box-shadow: 0 2px 24px 0 rgb(0 0 0 / 12%);
  }
}
</style>
