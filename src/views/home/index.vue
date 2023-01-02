<template>
  <div>
    <div class="container">{{ msg }}</div>
    <ElButton type="primary">好的</ElButton>
    <div v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>

<script lang="ts">
import { ElButton } from 'element-plus';
export default {
  components: {
    ElButton,
  },
  data() {
    return {
      msg: 'hello',
      list: ['a', 'b', 'c'],
    };
  },
};
</script>

<style lang="scss">
@import './index';
</style>
