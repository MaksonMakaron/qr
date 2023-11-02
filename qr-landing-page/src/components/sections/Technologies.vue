<template>
  <v-card
    max-width="1200"
    :elevation="0"
    id="about"
    class="d-flex flex-column align-center about mx-md-auto mx-2 mx-xs-0"
    color="transparent"
  >
    <h3 class="about__heading font-weight-medium mb-2">App Technologies</h3>
    <p class="about__desc text-center mb-14">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <div class="d-flex flex-wrap flex-md-nowrap justify-center">
      <v-slide-x-reverse-transition class="transition-custom" appear>
        <div class="w-100">
          <v-img src="../../assets/hero-img.png"></v-img>
        </div>
      </v-slide-x-reverse-transition>
      <v-slide-x-transition class="transition-custom" appear>
        <div class="w-100">
          <p class="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Xonsectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div class="w-100 progress-bar">
            <div style="width: 20%" class="progress-bar__filled">
              <span class="progress-bar__value">TDD</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 40%" class="progress-bar__filled">
              <span class="progress-bar__value">Python</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 55%" class="progress-bar__filled">
              <span class="progress-bar__value">C#</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 70%" class="progress-bar__filled">
              <span class="progress-bar__value">CCS3</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 80%" class="progress-bar__filled">
              <span class="progress-bar__value">HTML5</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 60%" class="progress-bar__filled">
              <span class="progress-bar__value">React</span>
            </div>
          </div>
          <div class="w-100 progress-bar">
            <div style="width: 40%" class="progress-bar__filled">
              <span class="progress-bar__value">Javascripts</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
      </v-slide-x-transition>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
.about {
  padding: 90px 0px !important;
}

.about__heading {
  font-weight: 400;
  font-size: 34px;
}

.about__desc {
  font-size: 15px;
  color: #6c757d;
}

.about__title {
  font-weight: 600;
  font-size: 18px;
}

.progress-bar {
  margin-bottom: 20px;
  background-color: #ebebeb;
  border-radius: 15px;
}

.progress-bar__filled {
  background-color: #4c38b1;
  border-radius: 15px;
}

.progress-bar__value {
  color: white;
  margin-left: 8px;
}

.about__item {
  background: #f3f3f3;
}
</style>
