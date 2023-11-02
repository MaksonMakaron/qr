<template>
  <v-layout theme="light">
    <app-header />
    <navigation-drawer />
    <v-card color="background" class="pa-5 w-100" elevation="0">
      <slot></slot>
    </v-card>
  </v-layout>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
</script>

<style></style>
