<template>
  <div class="login w-full h-full center" style="transform: translateY(calc(50% - 150px / 2))">
    <div>
      <a-space class="center">
        <a-typography-title :level="3" :style="{
          color: token.colorPrimary,
        }">HAEZOOM</a-typography-title>
        <a-typography-title :level="3">VPP</a-typography-title>
      </a-space>
      <a-card style="width: 350px;" class="pa-6">
        <template #cover></template>
        <form class="pt-4">
          <a-space direction="vertical" class="w-full">
            <a-typography-text>Id</a-typography-text>
            <a-input-group compact size="large">
              <a-input />
            </a-input-group>
            <!--  -->
            <a-typography-text>Password</a-typography-text>
            <a-input-password size="large"></a-input-password>
            <!--  -->

            <div class="my-4">
              <a-typography-text>아이디/비밀번호를 잊어버리셨나요?</a-typography-text>
              <a-button type="link" size="small" class="float-right">문의하기</a-button>
            </div>
            <a-button type="primary" block size="large">로그인
              <template #icon>
                <LoginOutlined />
              </template>
            </a-button>
          </a-space>
        </form>
      </a-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LoginOutlined } from '@ant-design/icons-vue';

import { theme } from 'ant-design-vue';
const { useToken } = theme;
const { token } = useToken();
</script>

<style lang="scss" scoped>
.login {
  &>div {

  }
}
</style>