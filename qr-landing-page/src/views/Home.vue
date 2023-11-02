<template>
  <hero />
  <services />
  <technologies />
  <why-us />
  <call-to-action />
  <testimonials />
  <!-- <team /> -->
  <!-- <faq /> -->
  <!-- <contact /> -->
  <v-btn
    @click="scrollTo('#hero')"
    class="scroll-to-top"
    color="btn_send"
    size="40"
    icon="mdi-arrow-up-circle"
  ></v-btn>
</template>

<script setup>
import Hero from "@/components/sections/Hero.vue";
import Services from "@/components/sections/Services.vue";
import Technologies from "@/components/sections/Technologies.vue";
import WhyUs from "@/components/sections/WhyUs.vue";
import CallToAction from "@/components/sections/CallToAction.vue";
import Testimonials from "@/components/sections/Testimonials.vue";
import Team from "@/components/sections/Team.vue";
import Faq from "@/components/sections/Faq.vue";
import Contact from "@/components/sections/Contact.vue";

const scrollTo = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
.scroll-to-top {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  z-index: 9999;
}

.scroll-to-top:hover {
  opacity: 0.8;
}

.transition-custom {
  transition-duration: 1s !important;
}
</style>
