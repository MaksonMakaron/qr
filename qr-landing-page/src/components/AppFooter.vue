<template>
  <v-footer class="d-flex flex-column pa-0">
    <v-sheet color="bg_footer" class="w-100 py-12 ma-0">
      <v-sheet
        width="1350"
        color="bg_footer"
        :elevation="0"
        class="d-flex justify-space-between mx-auto"
      >
        <div class="w-100">
          <router-link to="/" class="text-decoration-none footer__headnig">
            <p class="pa-0 mb-5 footer__headnig footer__headnig">AppVenture</p>
          </router-link>
          <p class="mb-3 pa-0 text-grey-lighten-1">
            Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do
            eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem
            ipsum dolor sit amet.
          </p>
          <p class="text-h6 text-white font-weight-medium mb-5 pa-0">
            Follow us
          </p>
          <v-icon class="mr-3" icon="mdi-facebook" size="30"></v-icon>
          <v-icon class="mr-3" icon="mdi-twitter" size="30"></v-icon>
          <v-icon class="mr-3" icon="mdi-google-plus" size="30"></v-icon>
        </div>
        <div class="w-100 px-5">
          <p color="primary" class="footer__subheading pa-0 mb-3">
            Useful Links
          </p>
          <v-divider
            class="border-opacity-75 my-3"
            color="primary"
            :thickness="2"
          ></v-divider>
          <div class="d-flex px-5">
            <div class="mr-16">
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Home</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Services</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Contact</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Our News</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Our Team</v-card-subtitle>
              </router-link>
            </div>
            <div class="ml-12">
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">About</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Portfolio</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">About Us</v-card-subtitle>
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5"
                  >Our Services</v-card-subtitle
                >
              </router-link>
              <router-link to="/" class="text-decoration-none text-white">
                <v-card-subtitle class="pa-0 mb-5">Contact Us</v-card-subtitle>
              </router-link>
            </div>
          </div>
        </div>
        <div class="w-100">
          <p color="primary" class="footer__subheading pa-0 mb-3">Newsletter</p>
          <v-divider
            class="border-opacity-75 my-3"
            color="primary"
            :thickness="2"
          ></v-divider>
          <p class="mb-3 pa-0 text-grey-lighten-1">
            Don't miss to subscribe to our new feeds, kindly fill the form
            below.
          </p>
          <v-text-field variant="outlined" density="compact">
            <template v-slot:append-inner>
              <v-btn variant="text" icon="mdi-email-fast"></v-btn>
            </template>
          </v-text-field>
        </div>
      </v-sheet>
    </v-sheet>

    <v-sheet color="primary" class="w-100 py-6 ma-0">
      <v-sheet
        width="1200"
        color="primary"
        :elevation="0"
        class="d-flex justify-space-between mx-auto px-3"
      >
        <p class="">
          AppVenture © {{ new Date().getFullYear() }} - Designed by Zr Themes.
        </p>
        <div class="d-flex">
          <router-link class="text-decoration-none text-white ml-5" to="">
            Home
          </router-link>
          <router-link class="text-decoration-none text-white ml-5" to="">
            Terms
          </router-link>
          <router-link class="text-decoration-none text-white ml-5" to="">
            Privacy
          </router-link>
          <router-link class="text-decoration-none text-white ml-5" to="">
            Policy
          </router-link>
          <router-link class="text-decoration-none text-white ml-5" to=""
            >Contact</router-link
          >
        </div>
      </v-sheet>
    </v-sheet>
  </v-footer>
</template>

<script setup></script>

<style>
.footer__headnig {
  color: #4c38b1;
  font-size: 40px;
}

.footer__subheading {
  font-size: 20px;
}
</style>
