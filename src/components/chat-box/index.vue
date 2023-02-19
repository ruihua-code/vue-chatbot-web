<template>
  <div class="chat-box">
    <img src="@/assets/chat.png" class="img-chat" />
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
.chat-box {
  display: flex;
  column-gap: 8px;
}

.img-chat {
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
