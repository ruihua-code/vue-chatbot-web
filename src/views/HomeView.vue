<script setup lang="ts">
import { useNow, useDateFormat } from '@vueuse/core';

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
</script>

<template>
  <main>
    <RouterLink to="/about">About</RouterLink>
    <div>{{ formatted }}</div>
  </main>
</template>
