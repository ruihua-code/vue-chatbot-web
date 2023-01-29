<template>
  <el-container class="container">
    <el-aside class="aside fade-in">
      <div class="logo">
        <SvgIcon name="logo" width="36px" height="36px" />
        <span :class="[isCollapse ? 'hide-logo' : 'show-logo', 'project-name']">知识中心</span>
      </div>
      <SideMenu :isCollapse="isCollapse"></SideMenu>
    </el-aside>
    <el-main class="main">
      <div class="header">
        <el-icon v-if="isCollapse" size="26px" @click="onExpand"><Expand /></el-icon>
        <el-icon v-else size="26px" @click="onExpand"><Fold /></el-icon>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </el-main>
  </el-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Expand, Fold } from '@element-plus/icons-vue';
import SideMenu from '@/components/side-menu/index.vue';

const isCollapse = ref(false);

const onExpand = () => {
  isCollapse.value = !isCollapse.value;
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.module';

.container {
  height: 100vh;

  .aside {
    width: auto;
    background: linear-gradient(0deg, #fff, #edf5ff);
    border-right: 1px solid #edf1f4;
    box-shadow: 0 2px 8px 1px rgb(0 0 0 / 10%);

    .hide-logo {
      width: 0;
      transition: all 0.4s;
      transform: scale(0);
    }

    .show-logo {
      width: 100px;
      transition: all 1s;
      transform: scale(1);
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      user-select: none;

      .project-name {
        position: relative;
        z-index: -1;
        font-size: 24px;
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }

  .header {
    height: 44px;
    padding: 0 10px;
    line-height: 44px;
    border-bottom: 1px solid #edf1f4;
    box-shadow: 0 2px 8px 1px rgb(0 0 0 / 3%);

    .el-icon {
      vertical-align: middle;
      cursor: pointer;
    }
  }

  .main {
    padding: 0;
    background: #fff;
  }

  .el-menu {
    height: calc(100vh - 57px);
    overflow-y: auto;
  }

  .content {
    padding: 10px;
  }
}
</style>
