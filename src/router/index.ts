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
    // {
    //   path: '/app',
    //   name: '主结构页面',
    //   component: () => import('@/components/app/index.vue'),
    // },
  ],
});

export default router;
