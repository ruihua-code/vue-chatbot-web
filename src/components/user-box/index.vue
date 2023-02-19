<template>
  <div class="user-box">
    <img src="@/assets/user.png" class="img-user" />
    <div class="message">{{ props.message }}</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  message: {
    type: String,
    default: '',
  },
});
</script>
<style lang="scss" scoped>
.img-user {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}

.user-box {
  display: flex;
  flex-direction: row-reverse;
  column-gap: 8px;
}

.message {
  padding: 20px;
  font-size: 26px;
  background-color: #fff;
  border-radius: 12px;
}
</style>
