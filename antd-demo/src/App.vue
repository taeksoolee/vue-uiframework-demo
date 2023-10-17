<template>
  <ConfigProvider :theme="{
    token: {
      colorPrimary: '#FF7133',
      // title
      colorSuccess: '#526FEC',
      colorWarning: 'skyblue',
      colorError: 'teal',
      // text
      colorTextBase: 'gray',
      colorTextSecondary: 'orange',
    }
  }">
    <a-app style="background-color: rgba(0,0,0, .05); min-width: 100vw; min-height: 100vh;">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/layout">Layout</router-link>
      </nav>
      <router-view/>
    </a-app>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider, theme,  } from 'ant-design-vue';
const { useToken } = theme;
const { token } = useToken();
console.log(token.value);
</script>

<style lang="scss">
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);

* {
  font-family: "Spoqa Han Sans Neo" !important;
}
</style>
