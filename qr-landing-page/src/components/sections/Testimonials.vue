<template>
  <v-card
    max-width="1200"
    :elevation="0"
    id="testimonials"
    class="d-flex flex-column align-center testimonials mx-auto"
    color="transparent"
  >
    <v-lazy transition="slide-y-transition">
      <div class="d-flex flex-column align-center">
        <h3 class="testimonials__heading font-weight-medium mb-2">
          Testimonials
        </h3>
        <p class="testimonials__desc mb-15 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </v-lazy>
    <v-lazy transition="slide-y-transition">
      <v-carousel
        :touch="true"
        :interval="5000"
        cycle
        class="mt-15"
        :show-arrows="false"
        hide-delimiter-background
        height="300"
      >
        <v-carousel-item v-for="(item, i) in testimonials" :key="i">
          <v-card
            :elevation="0"
            class="d-flex flex-wrap flex-sm-nowrap align-center justify-center"
          >
            <div class="d-flex mr-sm-10 mb-4 mb-sm-0">
              <v-avatar :image="item.photo" class="mr-4" size="80"></v-avatar>
              <div class="">
                <p class="ma-0 pa-0">{{ item.full_name }}</p>
                <p class="ma-0 pa-0">{{ item.position }}</p>
                <v-rating
                  class="pa-0"
                  v-model="item.rating"
                  density="compact"
                  color="rating_star"
                  readonly
                ></v-rating>
              </div>
            </div>
            <div class="">
              <v-icon icon="mdi-format-quote-open" color="primary" />
              {{ item.testimonial }}
              <v-icon icon="mdi-format-quote-close" color="primary" />
            </div>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-lazy>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const testimonials = [
  {
    full_name: "Jhone Doe",
    position: "CFO",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/testimonials/testimonial-1.jpg",
    rating: 5,
    testimonial:
      "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam.",
  },
  {
    full_name: "Afa Rose",
    position: "Web Designer",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/testimonials/testimonial-2.jpg",
    rating: 5,
    testimonial:
      "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet.",
  },
  {
    full_name: "Keena Lara",
    position: "Store Owner",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/testimonials/testimonial-3.jpg",
    rating: 5,
    testimonial:
      "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis minim.",
  },
  {
    full_name: "Fizzi Brandon",
    position: "Freelancer",
    photo:
      "https://www.zrthemes.com/2023/appventure/assets/images/testimonials/testimonial-4.jpg",
    rating: 5,
    testimonial:
      "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit dolore.",
  },
];
</script>

<style scoped>
.testimonials {
  padding: 90px 0px !important;
}

.testimonials__heading {
  font-weight: 400;
  font-size: 34px;
}

.testimonials__desc {
  font-size: 15px;
  color: #6c757d;
}

.testimonials__title {
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

.testimonials__item {
  background: #f3f3f3;
}
</style>
