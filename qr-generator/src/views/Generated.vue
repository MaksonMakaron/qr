<template>
  <h1 class="text-h4 mb-4">{{ route.meta.title }}</h1>
  <v-btn
    color="primary"
    to="/profile/manage"
    class="text-none text-uppercase mb-4"
    >Добавить</v-btn
  >
  <v-table hover density="default">
    <thead>
      <tr>
        <th class="text-left">QR</th>
        <th class="text-left">ФИО</th>
        <th class="text-left">Компания</th>
        <th class="text-left">Должность</th>
        <th class="text-left">Телефон</th>
        <th class="text-left">Email</th>
        <th class="text-left">Фото</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="qrs__row"
        @click="gotoEdit(item.id)"
        style="cursor: pointer"
        v-for="item in QRs"
        :key="item.id"
      >
        <td>
          <v-img class="qr__user__image" :width="60" :src="item.qrcode">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </td>
        <td>{{ getFullName(item) }}</td>
        <td>{{ item.company }}</td>
        <td>{{ item.position }}</td>
        <td>{{ formattedPhoneNumber(item.tel) }}</td>
        <td>{{ item.email }}</td>
        <td>
          <v-img class="qr__user__image ma-1" :width="60" :src="item.image">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const QRs = [
  {
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
  },
  {
    id: 2,
    last_name: "Дубровин",
    first_name: "Владимир",
    patronymic: "Антонович",
    company: "AVACore",
    position: "Раб",
    tel: "79996781233",
    email: "test_large_very@gmail.com",
    image: "https://cdn.vuetifyjs.com/images/john.jpg",
    qrcode: "http://qrcoder.ru/code/?%C2%EE%E2%E0+%EB%EE%F5+%3A%29&4&0",
  },
  {
    id: 3,
    last_name: "Волошин",
    first_name: "Максимильян",
    patronymic: "Иванович",
    company: "AVACore",
    position: "Стажер",
    tel: "79996781233",
    email: "test_large_very@gmail.com",
    image: "https://cdn.vuetifyjs.com/images/john.jpg",
    qrcode: "http://qrcoder.ru/code/?%C2%EE%E2%E0+%EB%EE%F5+%3A%29&4&0",
  },
  {
    id: 4,
    last_name: "Дубровин",
    first_name: "Владимир",
    patronymic: "Антонович",
    company: "AVACore",
    position: "Раб",
    tel: "79996781233",
    email: "test_large_very@gmail.com",
    image: "https://cdn.vuetifyjs.com/images/john.jpg",
    qrcode: "http://qrcoder.ru/code/?%C2%EE%E2%E0+%EB%EE%F5+%3A%29&4&0",
  },
];

const getFullName = (user) => {
  return `${user.last_name} ${user.first_name} ${user.patronymic || ""}`;
};

const gotoEdit = (idUser) => {
  router.push("/profile/manage/" + idUser);
};

const formattedPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "+$1 ($2) $3-$4-$5"
  );
</script>

<style scoped>
.qr__user__image {
  border-radius: 2px;
}
</style>
