<template>
  <v-card
    max-width="1350"
    :elevation="0"
    id="services"
    class="d-flex align-center services__block flex-wrap flex-sm-nowrap mx-md-auto mx-xs-0"
    color="transparent"
  >
    <v-lazy transition="slide-y-transition">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            :elevation="0"
            v-bind="props"
            :color="isHovering ? 'primary' : undefined"
            class="d-flex flex-column justify-center align-center rounded-xl service__item px-md-7 py-md-12 my-6 my-md-0 px-0 py-0"
          >
            <v-icon
              class="mb-5"
              :color="isHovering ? 'service_icon_white' : 'service_icon_gray'"
              :size="50"
              icon="mdi-vector-curve"
            ></v-icon>
            <v-card-title class="service__item__heading mb-4"
              >Application Design</v-card-title
            >
            <p class="text-center">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </v-card>
        </template>
      </v-hover>
    </v-lazy>
    <v-lazy transition="slide-y-transition">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            :elevation="0"
            v-bind="props"
            :color="isHovering ? 'primary' : undefined"
            class="d-flex flex-column justify-center align-center rounded-xl service__item px-md-7 py-md-12 my-6 my-md-0 px-0 py-0"
          >
            <v-icon
              class="mb-5"
              :color="isHovering ? 'service_icon_white' : 'service_icon_gray'"
              :size="50"
              icon="mdi-bullseye"
            ></v-icon>
            <v-card-title class="service__item__heading mb-4"
              >SEO Optimization</v-card-title
            >
            <p class="text-center">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </v-card>
        </template>
      </v-hover></v-lazy
    >
    <v-lazy transition="slide-y-transition">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            :elevation="0"
            v-bind="props"
            :color="isHovering ? 'primary' : undefined"
            class="d-flex flex-column justify-center align-center rounded-xl service__item px-md-7 py-md-12 my-6 my-md-0 px-0 py-0"
          >
            <v-icon
              class="mb-5"
              :color="isHovering ? 'service_icon_white' : 'service_icon_gray'"
              :size="50"
              icon="mdi-cloud-outline"
            ></v-icon>
            <v-card-title class="service__item__heading mb-4"
              >Secure Cloud Server</v-card-title
            >
            <p class="text-center">
              Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
          </v-card>
        </template>
      </v-hover>
    </v-lazy>
  </v-card>
</template>

<script setup></script>

<style>
.services__block {
  margin: 90px auto !important;
}

.service__item:hover .service__item__heading {
  color: white;
}

.service__item__heading {
  color: #4c38b1;
  font-weight: 700;
  margin-bottom: 15px;
  font-size: 24px;
}
</style>
