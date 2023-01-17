import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/login/index.vue';
import AppView from '@/components/layout/index.vue';
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
      name: '权限控制',
      component: AppView,
      children: [
        {
          path: '/app/home',
          name: '首页',
          component: () => import('../views/home/index.vue'),
        },
        {
          path: '/app/task',
          name: '任务',
          component: () => import('../views/task/index.vue'),
        },
        {
          path: '/app/annotation',
          name: '标注',
          component: () => import('../views/annotation/index.vue'),
        },
        {
          path: '/app/check',
          name: '审核',
          component: () => import('../views/check/index.vue'),
        },
        {
          path: '/app/statistic',
          name: '统计',
          component: () => import('../views/statistic/index.vue'),
        },
        {
          path: '/app/setting',
          name: '管理',
          component: () => import('../views/setting/index.vue'),
        },
      ],
    },

    {
      path: '/about',
      name: '关于',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
