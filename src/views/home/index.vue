<template>
  <div>
    <div class="container">{{ msg }}</div>
    <ElButton type="primary">好的</ElButton>
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
    };
  },
};
</script>

<style lang="scss">
@import './index';
</style>
