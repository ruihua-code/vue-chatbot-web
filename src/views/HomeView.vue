<script lang="ts">
import { login } from '@/api/login';

export default {
  methods: {
    onLogin() {
      login({
        username: 'zrh',
        phone: '15510051902',
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<template>
  <main>
    <RouterLink to="/about">About</RouterLink>
    <ElButton type="primary" @click="onLogin">登录</ElButton>
  </main>
</template>
