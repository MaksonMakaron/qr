<template>
  <v-card
    max-width="1200"
    :elevation="0"
    id="whyus"
    class="d-flex flex-column align-center whyus mx-auto"
    color="transparent"
  >
    <h3 class="whyus__heading font-weight-medium mb-2">App Features</h3>
    <p class="whyus__desc mb-14 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <div class="d-flex flex-wrap flex-md-nowrap justify-center ma-2">
      <v-slide-x-transition class="transition-custom" appear>
        <div class="w-100">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <v-list>
            <v-list-item class="rounded whyus__item mb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Sed quia consequuntur magni dolores eos qui ratione
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Neque porro quisquam est, qui dolorem ipsum quia amet
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Consectetur, adipisci velit, sed quia non numquameius
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Rempora incidunt ut labore et dolore magnam aliquam
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Sed quia consequuntur magni dolores eos qui ratione
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Neque porro quisquam est, qui dolorem ipsum quia amet
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Neque porro quisquam est, qui dolorem ipsum quia amet
            </v-list-item>
            <v-list-item class="rounded whyus__item mb-2">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            </v-list-item>
          </v-list>
        </div></v-slide-x-transition
      >
      <v-slide-x-reverse-transition class="transition-custom" appear
        ><div class="w-100">
          <v-img src="../../assets/hero-img.png"></v-img></div
      ></v-slide-x-reverse-transition>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.whyus {
  padding: 90px 0px !important;
}

.whyus__heading {
  font-weight: 400;
  font-size: 34px;
}

.whyus__desc {
  font-size: 15px;
  color: #6c757d;
}

.whyus__title {
  font-weight: 600;
  font-size: 18px;
}

.whyus__item {
  background: #f3f3f3;
}
</style>
