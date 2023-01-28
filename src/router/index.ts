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
      redirect: '/app/dict/cancer-dict-manage',
      children: [
        {
          path: '/app/dict/cancer-dict-manage',
          name: '癌种字典管理',
          component: () => import('@/views/dict/cancer-dict-manage/index.vue'),
        },
        {
          path: '/app/dict/dict-type-manage',
          name: '字典类型管理',
          component: () => import('@/views/dict/dict-type-manage/index.vue'),
        },
        {
          path: '/app/dict/dict-library',
          name: '字典库',
          component: () => import('@/views/dict/dict-library/index.vue'),
        },

        {
          path: '/app/file/list',
          name: '文件列表',
          component: () => import('@/views/file/list/index.vue'),
        },
        {
          path: '/app/file/upload',
          name: '上传文件',
          component: () => import('@/views/file/upload/index.vue'),
        },
        {
          path: '/app/file/operation',
          name: '文件管理操作',
          component: () => import('@/views/file/operation/index.vue'),
        },

        {
          path: '/app/apply/my',
          name: '我的申请',
          component: () => import('@/views/download-apply/my-apply/index.vue'),
        },
        {
          path: '/app/apply/start',
          name: '发起申请',
          component: () => import('@/views/download-apply/apply/index.vue'),
        },
      ],
    },
  ],
});

export default router;
