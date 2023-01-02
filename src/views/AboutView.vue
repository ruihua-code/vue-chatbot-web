<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Test></Test>
  </div>
</template>
<script lang="ts">
import Test from './home/index.vue';
export default {
  components: {
    Test,
  },
  data() {
    return {
      msg: 'hello',
    };
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
}
</style>
