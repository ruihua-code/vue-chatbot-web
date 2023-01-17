<template>
  <div class="menus">
    <SvgIcon name="logo" width="50px" height="50px"></SvgIcon>

    <div class="menu">
      <router-link class="menu-item" v-for="menu in menus" :key="menu.name" :to="menu.path">
        <el-icon :size="26" color="#adadad"><component :is="menu.icon" /></el-icon>
        <span>{{ menu.name }}</span>
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { HomeFilled, List, Postcard, Checked, TrendCharts, Tools } from '@element-plus/icons-vue';
import { shallowRef } from 'vue';

const menus = shallowRef([
  {
    name: '首页',
    icon: HomeFilled,
    path: '/app/home',
  },
  {
    name: '任务',
    icon: List,
    path: '/app/task',
  },
  {
    name: '标注',
    icon: Postcard,
    path: '/app/annotation',
  },
  {
    name: '审核',
    icon: Checked,
    path: '/app/check',
  },
  {
    name: '统计',
    icon: TrendCharts,
    path: '/app/statistic',
  },
  {
    name: '管理',
    icon: Tools,
    path: '/app/setting',
  },
]);
</script>

<style lang="scss" scoped>
.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .menu {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    margin-top: 10px;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.4s;

    .el-icon {
      transition: color 0.4s;
    }

    &:hover {
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 4px 16px 0 rgb(0 48 121 / 10%);

      .el-icon {
        color: #38f;
      }
    }
  }

  .router-link-exact-active {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 16px 0 rgb(0 48 121 / 10%);

    .el-icon {
      color: #38f;
    }
  }
}
</style>
