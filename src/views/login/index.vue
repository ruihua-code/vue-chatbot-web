<template>
  <div class="page-container">
    <div class="login fade-in">
      <div class="header">前端项目模板</div>
      <div class="desc">快速、简单、高效、灵活</div>
      <el-form :model="formData">
        <el-form-item>
          <el-input
            width="360px"
            v-model="formData.user"
            :prefix-icon="Iphone"
            placeholder="请输入账号/手机号/邮箱"
            type="text"
            size="large"
            autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="formData.password"
            :prefix-icon="Lock"
            placeholder="请输入密码"
            type="password"
            size="large"
            autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="formData.code" size="large" placeholder="请输入密码" type="code" autocomplete="off">
            <template #append><img class="img-code" src="@/assets/images/login/code.jpeg" /></template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="btn-login">
            <el-button type="primary" size="large" @click="onLogin" :loading="isLoading">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Iphone, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref(false);
const formData = reactive({
  user: '',
  password: '',
  code: '',
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
