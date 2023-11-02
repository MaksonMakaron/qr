<template>
  <v-card
    max-width="1350"
    color="transparent"
    :elevation="0"
    id="hero"
    class="hero d-flex flex-wrap flex-sm-nowrap mx-md-auto mx--auto mx-xs-0 justify-center"
  >
    <v-slide-x-reverse-transition class="transition-custom" appear>
      <div class="w-75 align-self-center">
        <h1 class="text-h2 font-weight-medium mb-5">
          <span class="header__logo__app">App</span
          ><span class="header__logo__venture">Venture</span>
        </h1>
        <h2 class="text-white mb-7">Landing Page For App Design</h2>
        <p class="text-white mb-7">
          Embark on a new journey of innovation and possibilities with
          AppVenture, the perfect landing page template to showcase your app's
          unique features and captivate your audience.
        </p>
        <v-btn class="mr-4">Download App</v-btn>
        <v-btn
          density="compact"
          variant="text"
          class="text-white"
          prepend-icon="mdi-play-circle-outline"
          >Watch video</v-btn
        >
      </div>
    </v-slide-x-reverse-transition>
    <v-slide-x-transition class="transition-custom" appear>
      <div class="">
        <v-img src="../../assets/hero-img.png"></v-img>
      </div>
    </v-slide-x-transition>
  </v-card>
</template>

<script setup></script>

<style>
.hero {
  background-color: transparent;
}
</style>
