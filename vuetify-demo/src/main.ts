/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import { createPinia } from 'pinia'

import './styles/customize.scss';

import {
  VDataTable,
  // VDataTableServer,
  // VDataTableVirtual,
} from "vuetify/labs/VDataTable";

const app = createApp(App).use(createPinia())

registerPlugins(app)

app.component('v-data-table', VDataTable);

app.mount('#app')
