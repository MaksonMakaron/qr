<template>
  <v-app-bar
    :elevation="0"
    class="d-flex justify-space-between"
    color="bg_secondary"
  >
    <template v-slot:prepend>
      <v-img
        :width="100"
        aspect-ratio="4/3"
        class="header__logo align-self-center"
        src="../assets/logo.svg"
      />
    </template>

    <template v-slot:append>
      <v-avatar>
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg">
          <template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
              <v-progress-circular
                color="grey-lighten-4"
                indeterminate
              ></v-progress-circular>
            </div>
          </template>
        </v-img>
      </v-avatar>
      <span class="ml-2">{{ user.first_name }}</span>
      <v-btn
        to="/auth/signin"
        icon="mdi-logout"
        size="small"
        variant="plain"
      ></v-btn>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const user = {
  id: 1,
  last_name: "Волошин",
  first_name: "Максимильян",
  patronymic: "Иванович",
  company: "AVACore",
  position: "Стажер",
  tel: "79996781233",
  email: "test_large_very@gmail.com",
  image: "https://cdn.vuetifyjs.com/images/john.jpg",
  qrcode: "http://qrcoder.ru/code/?%C2%EE%E2%E0+%EB%EE%F5+%3A%29&4&0",
};
</script>

<style scoped></style>
