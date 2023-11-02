<template>
  <v-card
    class="d-flex flex-column align-center py-10 px-5 mx-auto vizit__block"
    width="320"
  >
    <v-img width="150" class="rounded-circle mb-4" :src="contact.avatar" />
    <v-card-title class="ma-0 pa-0">{{ contact.last_name }}</v-card-title>
    <v-card-title class="ma-0 pa-0"
      >{{ contact.first_name }} {{ contact.patronymic }}</v-card-title
    >
    <p class="ma-0 pa-0 text-body-1">{{ contact.company }}</p>
    <p class="ma-0 pa-0 text-caption">{{ contact.position }}</p>
    <div class="d-flex my-5">
      <div class="mr-3">
        <v-btn
          location="top center"
          density="comfortable"
          class="rounded-lg mb-2"
          icon="mdi-qrcode"
          color="primary"
          size="large"
          @click="refOverlay = !refOverlay"
        ></v-btn>

        <v-overlay
          v-model="refOverlay"
          location="center center"
          :location-strategy="'connected'"
          class="align-center justify-center"
        >
          <v-card class="d-flex flex-column align-center px-2 py-2" width="320">
            <v-btn
              class="align-self-end"
              icon="mdi-close"
              variant="plain"
              density="comfortable"
              @click="refOverlay = !refOverlay"
            ></v-btn>
            <v-img
              width="150"
              class="rounded-circle mb-4"
              :src="contact.qr_code"
            />
            <v-card-subtitle class="text-caption pa-0 mb-5"
              >Ваш уникальный QR-код</v-card-subtitle
            >
          </v-card>
        </v-overlay>
        <v-card-subtitle class="text-caption pa-0">QR-визитка</v-card-subtitle>
      </div>
      <div class="">
        <v-btn
          href="http://87.249.49.97:67/api/cp/contacts/4/export/"
          location="top center"
          density="comfortable"
          class="rounded-lg mb-2"
          icon="mdi-account-plus-outline"
          color="primary"
          size="large"
        ></v-btn>
        <v-card-subtitle class="text-caption pa-0">В контакты</v-card-subtitle>
      </div>
    </div>
    <v-btn
      :elevation="0"
      :href="'tel:' + contact.tel"
      prepend-icon="mdi-phone-in-talk"
      color="secondary text-button"
      class="rounded-lg w-100 mb-2"
    >
      <template v-slot:prepend>
        <v-icon color="success"></v-icon>
      </template>
      {{ formattedPhoneNumber(contact.tel) }}</v-btn
    >
    <v-btn
      :elevation="0"
      :href="'mailto:' + contact.email"
      prepend-icon="mdi-email"
      color="secondary text-button"
      class="rounded-lg w-100 text-lowercase mb-10"
    >
      {{ contact.email }}</v-btn
    >
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const refOverlay = ref(false);

const contact = {
  first_name: "Сергей",
  patronymic: "Сергеевич",
  last_name: "Майбродский",
  tel: "79892224422",
  email: "admin@axas.ru",
  company: "AXAS",
  position: "CEO",
  id: 4,
  avatar:
    "https://storage.yandexcloud.net/axas-qr/contacts/88cb08768ada48f59792974cae8e63a4.jpg",
  qr_code: "http://qrcoder.ru/code/?%D2%E5%F1%F2+QR&4&0",
};

const formattedPhoneNumber = (phoneNumber) =>
  phoneNumber.replace(
    /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "+$1 ($2) $3-$4-$5"
  );
</script>

<style>
.text-button {
  color: #2686d0 !important;
}

@media (max-width: 600px) {
  .vizit__block {
    width: 300px !important;
  }
}
</style>
