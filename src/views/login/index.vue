<template>
  <div class="page-container">
    <div class="login fade-in">
      <div class="header">登录</div>
      <el-form :model="formData" label-width="60px">
        <el-form-item label="用户名">
          <el-input v-model="formData.user" type="text" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formData.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <div class="btn-login">
            <el-button type="primary" @click="onLogin" :loading="isLoading">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref(false);
const formData = reactive({
  user: '',
  password: '',
});

const onLogin = () => {
  console.log(formData.password, formData.user);
  isLoading.value = true;
  setTimeout(() => {
    router.replace('/home');
  }, 1500);
};
</script>

<style lang="scss" scoped>
@import './index';
</style>
