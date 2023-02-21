<template>
  <div class="page-container fade-in">
    <!-- <header class="header">基于ChatGPT的AI助手</header> -->
    <main class="main">
      <template v-for="(item, index) in list" :key="index">
        <component
          :is="item.type === 0 ? ChatBox : UserBox"
          :message="item.type === 1 ? item.message.substring(0, item.message.length - 1) : item.message"></component>
      </template>
    </main>
    <footer class="footer">
      <el-input @keyup.enter="onSend" placeholder="请输入..." clearable v-model="inputText">
        <template #append>
          <el-button type="primary" @click="onSend">发送</el-button>
        </template>
      </el-input>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue';
import { completion } from '@/api/login';
import ChatBox from '@/components/chat-box/index.vue';
import UserBox from '@/components/user-box/index.vue';
const inputText = ref();
interface MessaegType {
  type: number;
  message: string;
}
const list = reactive<Array<MessaegType>>([
  {
    type: 0,
    message: '您好，我是AI助理，开源于：https://github.com/869413421/chatgpt-web。',
  },
]);

onMounted(() => {});

const onSend = () => {
  list.push({
    type: 1,
    message: `${inputText.value}。`,
  });

  const allMessage = list
    .filter((_, index) => index > 0)
    .map((item) => item.message)
    .join('\n');

  completion({ text: allMessage }).then((res) => {
    list.push({
      type: 0,
      message: res.data,
    });
  });

  inputText.value = '';
  const ele = document.activeElement as HTMLInputElement;
  ele.blur(); // 收起软键盘
};
</script>

<style lang="scss" scoped>
.page-container {
  height: 100vh;
  overflow: hidden;
}

.header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 88px;
  font-size: 32px;
  font-weight: 600;
  line-height: 88px;
  text-align: center;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 10%);
}

.main {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  height: calc(100vh - 165px);
  padding: 20px;
  padding-bottom: 100px;
  overflow-y: auto;
}

.footer {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  padding-bottom: constant(safe-area-inset-bottom); /* 兼容 iOS < 11.2 */
  padding-bottom: env(safe-area-inset-bottom); /* 兼容 iOS >= 11.2 */
  background-color: #fff;

  .el-input {
    height: 99px;
    font-size: 30px;
  }

  :deep(.el-input__clear) {
    font-size: 44px;
  }

  :deep(.el-input__inner) {
    height: 99px;
  }

  .el-button {
    width: 200px;
    height: 99px;
    color: #fff;
    background-color: $primary-color;

    &:hover {
      color: #fff;
      background-color: $primary-color;
    }
  }
}
</style>
