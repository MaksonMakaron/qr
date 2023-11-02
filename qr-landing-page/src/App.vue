<template>
  <v-app>
    <component :is="getLayout">
      <v-main>
        <router-view />
      </v-main>
    </component>
  </v-app>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import DefaultLayout from "./layouts/DefaultLayout.vue";

const route = useRoute();

const layots = {
  default: DefaultLayout,
};

const getLayout = computed(() => {
  const layout = route.meta.layout;
  if (!layout) {
    return layots.default;
  } else {
    return layots[`${layout}`];
  }
});
</script>

<style>
* {
  font-family: "Comfortaa" !important;
}
html {
  overflow: auto !important;
}
</style>
