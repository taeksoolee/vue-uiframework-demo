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

    <div>
    <div style="margin-bottom: 16px">
      <a-button type="primary" :disabled="!hasSelected" :loading="state.loading" @click="start">
        Reload
      </a-button>
      <span style="margin-left: 8px">
        <template v-if="hasSelected">
          {{ `Selected ${state.selectedRowKeys.length} items` }}
        </template>
      </span>
    </div>
    <a-table
      :row-selection="{ selectedRowKeys: state.selectedRowKeys, onChange: onSelectChange }"
      :columns="columns"
      :data-source="data"
    />
  </div>

  <a-time-picker format="hh" :show-now="false"></a-time-picker>


  <a-table :columns="columns" :data-source="data" @change="onChange"></a-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {CheckOutlined} from '@ant-design/icons-vue';

type Option = {
  value: string,
}

const value = ref();

import { computed, reactive } from 'vue';
import { TableProps } from 'ant-design-vue';

type Key = string | number;

const columns: TableProps['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Category 1',
        value: 'Category 1',
      },
      {
        text: 'Category 2',
        value: 'Category 2',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
    width: '30%',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: (input, filter) => (filter.value as string).indexOf(input) > -1,
    width: '40%',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

// function onChange(pagination, filters, sorter, extra) {
//   console.log('params', pagination, filters, sorter, extra);
// }
function onChange() {
  // console.log('params', pagination, filters, sorter, extra);
}
const state = reactive<{
  selectedRowKeys: Key[];
  loading: boolean;
}>({
  selectedRowKeys: [], // Check here to configure the default column
  loading: false,
});
const hasSelected = computed(() => state.selectedRowKeys.length > 0);

const start = () => {
  state.loading = true;
  // ajax request after empty completing
  setTimeout(() => {
    state.loading = false;
    state.selectedRowKeys = [];
  }, 1000);
};
const onSelectChange = (selectedRowKeys: Key[]) => {
  console.log('selectedRowKeys changed: ', selectedRowKeys);
  state.selectedRowKeys = selectedRowKeys;
};
</script>

<style lang="scss">

</style>
