import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import './assets/style/global.scss';

createApp(App)
  .use(createPinia())
  .use(antd)
  .use(router)
  .mount('#app')
