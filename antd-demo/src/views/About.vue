<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ConfigProvider :theme="{
      token: {
        colorPrimary: '#526FEC',
      },
    }">
      <a-space size="large">
        <a-button style="background-color: #526FEC; color: white;">Secondary</a-button>
        <a-button style="background-color: #EEF1FF; color: #526FEC; border: 1px solid #526FEC;" ghost>Ghost</a-button>
        <a-button style="background-color: #EEF1FF; color: #526FEC; border: 1px solid #526FEC;" ghost
          shape="round">Ghost</a-button>
      </a-space>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
</script>
