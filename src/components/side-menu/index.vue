<template>
  <el-menu
    :default-active="currentUrl"
    background-color="transparent"
    active-text-color="#247AFF"
    text-color="#333"
    :collapse="props.isCollapse"
    router
    class="el-menu-vertical-demo"
    unique-opened>
    <el-sub-menu v-for="item in menus" :key="item.index" :index="item.index">
      <template #title>
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="subMenu in item.children" :key="subMenu.index" :index="subMenu.index">
        {{ subMenu.name }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch, defineProps } from 'vue';
import { useBrowserLocation } from '@vueuse/core';
import { Folder, Connection, Notebook } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  isCollapse: Boolean,
});

const currentUrl = ref();

const menus = [
  {
    name: '字典管理',
    index: '/dict',
    icon: Notebook,
    children: [
      {
        index: '/dict/cancer-dict-manage',
        name: '癌种字典管理',
      },
      {
        index: '/dict/dict-type-manage',
        name: '字典类型管理',
      },
      {
        index: '/dict/dict-library',
        name: '字典库',
      },
    ],
  },
  {
    name: '配置文件管理',
    index: '/file',
    icon: Folder,
    children: [
      {
        index: '/file/list',
        name: '文件列表',
      },
      {
        index: '/file/upload',
        name: '上传文件',
      },
      {
        index: '/file/operation',
        name: '文件管理操作',
      },
    ],
  },
  {
    name: '下载申请',
    index: '/apply',
    icon: Connection,
    children: [
      {
        index: '/apply/my',
        name: '我的申请',
      },
      {
        index: '/apply/start',
        name: '发起申请',
      },
    ],
  },
];
const route = useRouter();
watch(route.currentRoute, () => {
  currentUrl.value = route.currentRoute.value.path;
});

onMounted(() => {
  const location = useBrowserLocation();
  currentUrl.value = location.value.state.current;
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  font-size: 13px;
  font-weight: 600;
}

.el-menu {
  border: none;
}
</style>
