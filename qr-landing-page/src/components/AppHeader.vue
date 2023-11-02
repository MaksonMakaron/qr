<template>
  <header class="header py-4">
    <h1 class="">
      <span class="header__logo__app">App</span
      ><span class="header__logo__venture">Venture</span>
    </h1>
    <ul class="header__nav">
      <ul class="header__nav">
        <li class="mr-6 header__nav__item">
          <a @click="scrollTo('#hero')" class="text-white text-decoration-none"
            >Home</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('#services')"
            class="text-white text-decoration-none"
            >Services</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('#call-to-action')"
            class="text-white text-decoration-none"
            >App</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('#')"
            href="#"
            class="text-white text-decoration-none"
            >Screenshots</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('#testimonials')"
            class="text-white text-decoration-none"
            >Testimonials</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a @click="scrollTo('#team')" class="text-white text-decoration-none"
            >Team</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a @click="scrollTo('#faq')" class="text-white text-decoration-none"
            >FAQs</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <v-menu open-on-hover>
            <template v-slot:activator="{ props }">
              <div class="d-flex">
                <p color="transparent" v-bind="props">Menu</p>
                <v-icon icon="mdi-chevron-down" />
              </div>
            </template>
            <v-list color="primary" class="pa-0">
              <v-list-item to="#">
                <v-list-item-title> Screenshots </v-list-item-title>
              </v-list-item>
              <v-list-item to="#">
                <v-list-item-title> Terms & Conditions </v-list-item-title>
              </v-list-item>
              <v-list-item to="#">
                <v-list-item-title> Privacy Policy </v-list-item-title>
              </v-list-item>
              <v-list-item to="#">
                <v-list-item-title> Downaload App </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('# ')"
            href="#"
            class="text-white text-decoration-none"
            >News</a
          >
        </li>
        <li class="mr-6 header__nav__item">
          <a
            @click="scrollTo('#contacts')"
            class="text-white text-decoration-none"
            >Contact</a
          >
        </li>
      </ul>
    </ul>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const scrollTo = (target) => {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
.header {
  width: 1350px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.header__logo__app {
  color: white;
  font-family: "Comfortaa";
}

.header__logo__venture {
  color: #0a1e51;
  font-family: "Comfortaa";
}

.header__nav {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

.header__nav__item {
  display: inline-block;
  position: relative;
  color: white;
  padding: 5px;
}

.header__nav__item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: white;
  transition: width 0.3s ease-in-out;
}

.header__nav__item:hover::after,
.header__nav__item:hover a::after {
  width: 100%;
}
</style>
