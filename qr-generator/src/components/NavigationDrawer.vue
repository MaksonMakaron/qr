<template>
  <v-navigation-drawer floating location="left" permanent expand-on-hover rail>
    <v-list>
      <v-list-item
        :prepend-avatar="user.image"
        :title="getFullName(user)"
        :subtitle="user.email"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-account"
        to="/profile"
        color="primary"
        title="Профиль"
        value="profile"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-qrcode"
        to="/generated"
        color="primary"
        title="Генерация"
        value="shared"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
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

const getFullName = (user) => {
  return `${user.last_name} ${user.first_name} ${user.patronymic || ""}`;
};
</script>
