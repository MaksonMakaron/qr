<template>
  <div class="container background">
    <!-- <app-header /> -->
    <div>
      <slot></slot>
    </div>
    <!-- <app-footer /> -->
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style>
.background {
  background: url("../assets/hero-bg.png") top right;
  background-size: 128%;
  background-repeat: no-repeat;
  background-color: #fff;
}
</style>
