import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/login/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/app',
      name: '主结构页面',
      component: () => import('@/components/app/index.vue'),
      children: [
        {
          path: '/app/file',
          name: '文件列表',
          component: () => import('@/views/file/index.vue'),
        },
        {
          path: '/app/apply',
          name: '我的申请',
          component: () => import('@/views/apply/index.vue'),
        },
      ],
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
});

export default router;
