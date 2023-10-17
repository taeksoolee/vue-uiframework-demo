<template>
  <div class="home">
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
    <!-- <a-app style="background-color: #eef0f3;"> -->
      <!--  -->
      <a-input-password size="large"></a-input-password>
      <a-auto-complete
        block
        v-model="value"
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
        <a-input-search size="large" placeholder="input here" enter-button></a-input-search>
      </a-auto-complete>
      <a-divider></a-divider>

      
      
      <!-- <a-button :style="{ backgroundColor: 'orange' }" type="primary">Secondary</a-button> -->
      <a-space direction="vertical" size="large">
        <a-space-compact block>
          <div>
            <a-space direction="vertical">
              <div>
                <a-typography-text type="">id</a-typography-text>
                <a-input-group size="large" compact>
                  <a-input style="width: 40%" />
                </a-input-group>
              </div>

              <a-input-group size="large" compact>
                <a-input style="width: 40%" />
                <a-button style="width: 20%;" ghost>click</a-button>
                <a-input style="width: 40%" />
              </a-input-group>
            </a-space>
          </div>
        </a-space-compact>
        <!--  -->
        <a-space-compact block>
          <a-button type="primary">Primary</a-button>
          <a-button type="primary" danger>Primary</a-button>
        </a-space-compact>

        <a-button type="primary" size="large">Primary</a-button>
        <a-button type="primary" size="default">Primary</a-button>
        <a-button type="primary" size="small">Primary</a-button>
      </a-space>
      <!-- <a-button type="primary" danger>Danger</a-button> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Option = {
  value: string,
}

const value = ref();
</script>

<style lang="scss">

</style>
