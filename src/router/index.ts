import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '登录',
      component: LoginView,
    },
    {
      path: '/app',
      name: '主结构页面',
      component: () => import('@/components/app/index.vue'),
      redirect: '/dict/cancer-dict-manage',
      children: [
        {
          path: '/dict/cancer-dict-manage',
          name: '癌种字典管理',
          component: () => import('@/views/dict/cancer-dict-manage/index.vue'),
        },
        {
          path: '/dict/dict-type-manage',
          name: '字典类型管理',
          component: () => import('@/views/dict/dict-type-manage/index.vue'),
        },
        {
          path: '/dict/dict-library',
          name: '字典库',
          component: () => import('@/views/dict/dict-library/index.vue'),
        },

        {
          path: '/file/list',
          name: '文件列表',
          component: () => import('@/views/file/list/index.vue'),
        },
        {
          path: '/file/upload',
          name: '上传文件',
          component: () => import('@/views/file/upload/index.vue'),
        },
        {
          path: '/file/operation',
          name: '文件管理操作',
          component: () => import('@/views/file/operation/index.vue'),
        },

        {
          path: '/apply/my',
          name: '我的申请',
          component: () => import('@/views/download-apply/my-apply/index.vue'),
        },
        {
          path: '/apply/start',
          name: '发起申请',
          component: () => import('@/views/download-apply/apply/index.vue'),
        },
      ],
    },
  ],
});

export default router;
