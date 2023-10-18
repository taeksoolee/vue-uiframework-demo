<template>
  <div class="home">
    <a-divider>Typography</a-divider>
    <a-space direction="vertical">
      <a-typography-title :level="2" >Heazoom</a-typography-title>
      <a-typography-title :level="2" type="success">Heazoom (success)</a-typography-title>
      <a-typography-title :level="2" type="warning">Heazoom (warning)</a-typography-title>
      <a-typography-title :level="2" type="danger">Heazoom  (danger)</a-typography-title>

      <a-typography-paragraph>describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...describe...</a-typography-paragraph>

      <a-typography-text>describe</a-typography-text>
      <a-typography-text type="secondary">describe (secondary)</a-typography-text>
      <a-typography-text type="success">describe (success)</a-typography-text>
      <a-typography-text type="warning">describe (warning)</a-typography-text>
      <a-typography-text type="danger">describe (danger)</a-typography-text>
    </a-space>

    <a-divider>Input</a-divider>
    <!-- password input -->
    <a-space direction="vertical" size="large">
      <a-input-password size="large"></a-input-password>
      <!-- auto complete -->
      <a-input-group block>
        <a-auto-complete
          block
          class="w-100"
          v-model:value="value"
          :options="([
            {
              value: 'banana'
            },
            {
              value: 'orange'
            },
          ] as Option[])"
        >
          <template #option="item">
            <div>{{(item as Option).value}}</div>
          </template>
          <a-input-search size="large" placeholder="auto complete" enter-button block></a-input-search>
        </a-auto-complete>
      </a-input-group>

      <div>
        <a-typography-text type="">id</a-typography-text>
        <a-input-group size="large" compact>
          <a-input style="width: 40%" />
        </a-input-group>
      </div>

      <a-input-group size="large" compact>
        <a-input style="width: 40%" />
        <a-button style="width: 20%;" type="primary" ghost class="bg-white">click</a-button>
        <a-input style="width: 40%" />
      </a-input-group>
    </a-space>

    <a-divider>Button</a-divider>
    <a-space direction="vertical" size="large">
      <a-space>
        <a-button >Default</a-button>
        <a-button type="primary">Primary</a-button>
        <a-button type="dashed">Dashed</a-button>
        <a-button type="text">Text</a-button>
        <a-button type="link">Link</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" danger>Primary/danger</a-button>
        <a-button type="dashed" danger>Dashed/danger</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" ghost>Primary (ghost)</a-button>
        <a-button type="primary" danger ghost>Primary/danger (ghost)</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" size="large">Primary (large)</a-button>
        <a-button type="primary" size="default">Primary (default)</a-button>
        <a-button type="primary" size="small">Primary (small)</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" shape="default">Primary (default)</a-button>
        <a-button type="primary" shape="round">Primary (round)</a-button>
        <a-button type="primary" shape="circle">
          <CheckOutlined />
        </a-button>
        <a-button type="primary" shape="round">
          <CheckOutlined />
        </a-button>
        <a-button type="primary" shape="default">
          <CheckOutlined />
        </a-button>
      </a-space>
    </a-space>
    <!-- <a-button type="primary" danger>Danger</a-button> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {CheckOutlined} from '@ant-design/icons-vue';

type Option = {
  value: string,
}

const value = ref();
</script>

<style lang="scss">

</style>
