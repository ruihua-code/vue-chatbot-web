<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core';
import Logo from '@/components/logo/index.vue';

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
</script>

<template>
  <main>
    <RouterLink to="/about">About</RouterLink>
    <div>{{ formatted }}</div>
    <Logo :width="128" :height="128"></Logo>
  </main>
</template>
