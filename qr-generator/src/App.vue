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
import AuthLayout from "./layouts/AuthLayout.vue";
import ProfileLayout from "./layouts/ProfileLayout.vue";

const route = useRoute();

const layots = {
  auth: AuthLayout,
  profile: ProfileLayout,
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
html {
  overflow: auto !important;
}
</style>
