<template>
  <el-container class="container">
    <el-aside class="aside fade-in" width="200px">
      <div class="logo">
        <!-- <SvgIcon name="logo" width="36px" height="36px" /> -->
        <Logo width="36px" height="36px"></Logo>
        <span class="project-name">知识中心</span>
      </div>
      <SideMenu></SideMenu>
    </el-aside>
    <el-main class="main">
      <RouterView />
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import SideMenu from '@/components/side-menu/index.vue';
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;

  .aside {
    height: 100vh;
    background-color: #545c64;

    .logo {
      display: flex;
      column-gap: 6px;
      align-items: center;
      padding: 10px 0;
      padding-left: 10px;
      user-select: none;
      border-bottom: 1px solid #828c97;

      .project-name {
        font-size: 24px;
        font-weight: 600;
        color: #fff;
      }
    }
  }

  .main {
    background: #fff;
  }

  .el-menu {
    height: calc(100vh - 57px);
    overflow-y: auto;
  }
}
</style>
