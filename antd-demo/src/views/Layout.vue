<template>
<!-- <div class="layout"> -->
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo ma-7">
        <a-typography-title :level="5" style="display: flex; align-items: baseline; text-wrap: nowrap;" class="text-center">
          <span :class="{
            'pl-1': collapsed,
            'flex-1': collapsed
          }">☀️ </span>
          <span v-if="!collapsed" :style="{
            display: 'inline-block',
            width: collapsed ? '0px' : 'inherit',
            overflow: 'hidden',
          }" class="ml-1">
            <span>HAEZOOM</span><span style="color: #CBFFF6;" class="ml-1">VPP</span></span>
        </a-typography-title>
      </div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <UserOutlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <DesktopOutlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <TeamOutlined />
          <span>nav 3</span>
        </a-menu-item>
        <a-sub-menu key="4">
          <template #title>
            <UserOutlined />
            <span>
              nav 4
            </span>
          </template>
          <a-menu-item key="sub1">sub 1</a-menu-item>
          <a-menu-item key="sub2">sub 2</a-menu-item>
          <a-menu-item key="sub3">sub 3</a-menu-item>
          <a-menu-item key="sub4">sub 4</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <a-space align="between" class="w-full px-4" style="justify-content: space-between;">
          <a-space-compact>
            <a-space size="small" algin="center">
              <a-button 
                type="text" 
                class="trigger"
                @click="() => (collapsed = !collapsed)"
                size="large"
              >
                <template #icon>
                <MenuUnfoldOutlined v-if="collapsed" />
                <MenuFoldOutlined v-else />
                </template>
              </a-button>
              <span>{{ timeStr }}</span>
            </a-space>
          </a-space-compact>
          <a-space-compact>
            <a-space size="small" algin="center">
              <a-avatar :size="20">
                <template #icon><UserOutlined /></template>
              </a-avatar>
              <span>이택수님 환영합니다.</span>
              <a-button type="text">
                <template #icon>
                  <LogoutOutlined />
                </template>
              </a-button>
            </a-space>
          </a-space-compact>
        </a-space>
      </a-layout-header>
      <a-layout-content class="mx-4">
        <a-breadcrumb class="my-4">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{padding: '24px', background: '#fff', minHeight: '350px'}">
          Content
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Haezoom VPP ©2023 Created by Taeksoolee
      </a-layout-footer>
    </a-layout>
  </a-layout>
<!-- </div> -->
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { UserOutlined, DesktopOutlined, TeamOutlined, MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

const selectedKeys = ref(['1']);
const collapsed = ref(false);

const currentTime = ref(Date.now()) ;
const intervalId = ref(0);
onMounted(() => {
  intervalId.value = setInterval(() => {
    currentTime.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  intervalId.value && clearInterval(intervalId.value);
});

const timeStr = computed(() => format(currentTime.value, 'yyyy년 MM월 dd일 (eee) HH:mm:ss', { locale: ko }));
</script>