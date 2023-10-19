<template>
  
  <div class="ma-4">
    <v-sheet class="pa-4 my-4" border>
      <h1 class="text-h4">🚀 Datepicker (labs)</h1>
      <v-divider class="my-2"></v-divider>

      <div class="mb-4">
        <h2 class="text-h6">🧩 </h2>
        <v-row>
          <v-col>
            <v-date-picker></v-date-picker>
            <v-divider class="my-2"></v-divider>
            <div>{{ date }}</div>
            <v-date-picker v-model:model-value="date" @update:view-mode="val => console.log(val)" color="success" show-adjacent-months >
              <template #header>
                <div></div>
              </template>
              <template #title>
                <div>Date Picker</div>
              </template>
            </v-date-picker>
          </v-col>
        </v-row>
      </div>
    </v-sheet>
    <v-sheet class="pa-4 my-4" border>
      <h1 class="text-h4">🚀 Typography</h1>
      <v-divider class="my-2"></v-divider>
      <h1 class="text-h1">H1</h1>
      <h2 class="text-h2">H2</h2>
      <h3 class="text-h3">H3</h3>
      <h4 class="text-h4">H4</h4>
      <h5 class="text-h5">H5</h5>
      <h6 class="text-h6">H6</h6>

      <div class="text-subtitle-1">subtitle-1</div>
      <div class="text-subtitle-2">subtitle-2</div>

      <div class="text-body-1">body-1</div>
      <div class="text-body-2">body-2</div>

      <div class="text-button">button</div>
      <div class="text-caption">caption</div>

      <div class="text-overline">overline</div>

      <v-divider></v-divider>
      <div class="text-h6">🎨 Colors</div>
      <span v-for="color in colors" :key="color" :class="['mr-4', 'text-body-1', `text-${color}`]">{{ color }}</span>
    </v-sheet>
    <!--  -->
    <v-sheet class="pa-4 my-4" border>
      <h1 class="text-h4">🚀 Button</h1>
      <v-divider class="my-2"></v-divider>

      <div class="mb-4">
        <div v-for="color in colors" :key="color">
          <h2 class="text-h6">🎨 {{ color }}</h2>
          <div>
            <v-btn class="mx-2" :color="color">Btn</v-btn>
            <v-btn class="mx-2" :color="color" :ripple="false">No Ripple</v-btn>
            <v-btn class="mx-2" :color="color" :ripple="{ class: `text-${color}` }">Ripple Color</v-btn>
            <v-btn class="mx-2" :color="color" disabled>Disabled</v-btn>
          </div>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 variant</h2>
        <div class="d-flex">
          <v-btn class="mx-2" color="primary" variant="elevated">elevated</v-btn>
          <v-btn class="mx-2" color="primary" variant="flat">flat</v-btn>
          <v-btn class="mx-2" color="primary" variant="tonal">tonal</v-btn>
          <v-btn class="mx-2" color="primary" variant="outlined">outlined</v-btn>
          <v-btn class="mx-2" color="primary" variant="text">text</v-btn>
          <v-btn class="mx-2" color="primary" variant="plain">plain</v-btn>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 size</h2>
        <div class="d-flex">
          <v-btn class="mx-2" size="x-small">x-small</v-btn>
          <v-btn class="mx-2" size="small">small</v-btn>
          <v-btn class="mx-2">regular</v-btn>
          <v-btn class="mx-2" size="large">large</v-btn>
          <v-btn class="mx-2" size="x-large">x-large</v-btn>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 density</h2>
        <div class="d-flex">
          <v-btn class="mx-2" density="compact">compact</v-btn>
          <v-btn class="mx-2" density="comfortable">comfortable</v-btn>
          <v-btn class="mx-2" density="default">default</v-btn>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 rounded</h2>
        <div class="d-flex">
          <v-btn class="mx-2" rounded="0">btn / 0</v-btn>
          <v-btn class="mx-2" rounded="xs">btn / xs</v-btn>
          <v-btn class="mx-2" rounded="sm">btn / sm</v-btn>
          <v-btn class="mx-2">btn</v-btn>
          <v-btn class="mx-2" rounded="lg">btn / lg</v-btn>
          <v-btn class="mx-2" rounded="xl">btn / xl</v-btn>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 elevation (max: 24, step: 4)</h2>
        <div class="d-flex">
          <v-btn class="mx-2" >Default (2)</v-btn>
          <v-btn class="mx-2" elevation="4">4</v-btn>
          <v-btn class="mx-2" elevation="8">8</v-btn>
          <v-btn class="mx-2" elevation="12">12</v-btn>
          <v-btn class="mx-2" elevation="16">16</v-btn>
          <v-btn class="mx-2" elevation="20">20</v-btn>
          <v-btn class="mx-2" elevation="24">24</v-btn>
        </div>
      </div>
      <div class="mb-4">
        <h2 class="text-h6">🧩 other</h2>
        <div class="d-flex">
          <v-btn class="mx-2" :loading="true">
            <!-- <template #loader>
              <div>custom loader</div>
            </template> -->
          </v-btn>
          <v-btn class="mx-2"  icon="$vuetify"></v-btn>
          <v-btn class="mx-2" >
            <template #prepend>
              <v-icon icon="$vuetify"></v-icon>
            </template>
            With Icon
          </v-btn>
          <v-tooltip v-for="location in ['top', 'left', 'right', 'bottom']" :key="location" v-model="(shows as any)[location]" :location="(location as any)">
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" class="mx-2" icon="mdi-information"></v-btn>
            </template>
            <div>Tooltip Message</div>
          </v-tooltip>
          <v-btn class="mx-2" >
            <template #append>
              <v-icon icon="$vuetify"></v-icon>
            </template>
            With Icon
          </v-btn>
        </div>
      </div>
    </v-sheet>

    <v-sheet class="pa-4 my-4" border>
      <h1 class="text-h4 mb-4">🚀 Forms</h1>

      <h1 class="text-h5">📁 TextField (Input)</h1>
      <v-divider class="my-2"></v-divider>

      <h2 class="text-h6">🎨 colors</h2>
      <v-row>
        <v-col v-for="variant in inputVariants" :key="variant">
          <v-text-field :placeholder="(variant ?? 'default')" :variant="((variant ?? undefined) as any)"></v-text-field>
        </v-col>
      </v-row>
      <v-row v-for="color in colors" :key="color">
        <v-col v-for="variant in inputVariants" :key="variant">
          <v-text-field :placeholder="color + ' / ' + (variant ?? 'default')" :color="color"
            :variant="((variant ?? undefined) as any)"></v-text-field>
        </v-col>
      </v-row>
      <h2 class="text-h6">🧩 density</h2>
      <v-row>
        <v-col v-for="density in ['compact', 'comfortable', 'default']" :key="density">
          <v-text-field :density="(density as any)" :placeholder="density"></v-text-field>
        </v-col>
      </v-row>
      <h2 class="text-h6">🧩 other</h2>
      <v-row>
        <v-col>
          <v-text-field placeholder="Disabled" disabled></v-text-field>
        </v-col>
        <v-col>
          <v-text-field placeholder="Readonly" readonly></v-text-field>
        </v-col>
        <v-col>
          <v-text-field placeholder="With Label" label="Label"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field placeholder="Loading" loading></v-text-field>
        </v-col>
        <v-col>
          <v-text-field clearable placeholder="Clearable" persistent-clear></v-text-field>
        </v-col>
        <v-col>
          <v-text-field :hint="'hint message persist'" placeholder="Hint" persistent-hint></v-text-field>
        </v-col>
        <v-col>
          <v-text-field :error="true" placeholder="Error" :error-messages="'error message'"></v-text-field>
        </v-col>
        <v-col>
          <!-- counter value 쓰면 다른 input에도 counter 생김...? -->
          <v-text-field :counter-value="1" :counter="10" placeholder="counter" persistent-counter></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field placeholder="With Icons & Units" :append-icon="'mdi-send'" :append-inner-icon="'mdi-send'"
            :prepend-inner-icon="'mdi-send'" :prepend-icon="'mdi-send'"
            prefix="Prefix" suffix="Suffix" persistent-placeholder></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="location in ['top', 'left', 'right', 'bottom']" :key="location">
          <v-tooltip v-model="(shows as any)[location]" :location="(location as any)">
            <template v-slot:activator="{ props }">
              <v-text-field icon v-bind="props" :label="`Tooltip (${location})`" :placeholder="`With Tooltip (${location})`" />
            </template>
            <div>Tooltip Message</div>
          </v-tooltip>
        </v-col>
      </v-row>

      <h2 class="text-h6">🧩 Advanced</h2>
      <v-row>
        <v-col>
          <v-autocomplete
            label="Autocomplete"
            placeholder="Autocomplete"
            :items="fruitsList"
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            label="Autocomplete (Multiple)"
            placeholder="Autocomplete"
            :items="fruitsList"
            multiple
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            label="Autocomplete (Multiple, Chips)"
            placeholder="Autocomplete"
            :items="fruitsList"
            multiple
            chips
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-file-input placeholder="file Input" />
        </v-col>
      </v-row>
    </v-sheet>

    <!-- icon : https://pictogrammers.com/library/mdi/ -->
    <v-sheet class="pa-4 my-4" border>
      <h1 class="text-h4 mb-4">🚀 Icons</h1>
      <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi icons</a>
    </v-sheet>


    <v-card class="ma-2">
      <v-card-title class="bg-primary">Power Form</v-card-title>
      <v-card-text color="primary" class="py-4">
        <v-form>
          <div class="text-empasis">Power</div>
          <v-text-field
            :model-value="value"
            class="mb-2 rounded-xl"
            variant="outlined"
            color="primary"
            suffix="kWh"
            density="compact"
            label=""
            single-line
            hint="Please, Input Only Number"
          ></v-text-field>
          <v-btn block color="primary" size="large">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { reactive } from 'vue';

const colors = [
  'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error',
];

const inputVariants = [
  'filled', 'outlined', 'underlined', 'solo-filled', 'solo', 'plain',
];

const shows = reactive({
  btn: false,
  top: false,
  left: false,
  right: false,
  bottom: false,
});

const date = ref<any>(new Date());

const value = ref('');

const fruitsList = ['apple', 'mango', 'banana', 'watermelon'];
</script>
