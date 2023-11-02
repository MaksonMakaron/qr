<template>
  <v-card
    :elevation="0"
    id="call-to-action"
    class="d-flex flex-column align-center call-to-action"
    color="transparent"
  >
    <v-fade-transition class="transition-custom" appear>
      <div
        class="d-flex flex-column align-center flex-wrap flex-sm-nowrap justify-center"
      >
        <v-card-title class="call-to-action__heading font-weight-medium mb-5"
          >Free Downaload Our App</v-card-title
        >
        <p class="call-to-action__desc mb-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        <div class="d-flex flex-wrap flex-md-nowrap">
          <v-btn class="ma-2 btn" color="primary" prepend-icon="mdi-google-play"
            >Play Store</v-btn
          >
          <v-btn class="ma-2 btn" color="primary" prepend-icon="mdi-apple"
            >App Store</v-btn
          >
        </div>
      </div>
    </v-fade-transition>
  </v-card>
</template>

<script setup></script>

<style scoped>
.call-to-action {
  background: linear-gradient(rgb(76 56 177 / 90%), rgb(76 56 177 / 90%)),
    url("../../assets/cta-bg.jpg") center center;
  background-size: cover;
  padding: 150px 60px;
  border-radius: 0px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.call-to-action__heading {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

.call-to-action__desc {
  color: white;
}

.btn {
  font-size: 16px;
  border-radius: 50px;
  border: 2px solid #fff;
  color: #fff;
}
</style>
