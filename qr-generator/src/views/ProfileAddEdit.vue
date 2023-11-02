<template>
  <h1 class="text-h4 mb-4">{{ route.meta.title }}</h1>
  <v-card color="background" elevation="0">
    <v-form
      ref="refProfileForm"
      v-model="isFormValid"
      lazy-validation
      @submit.prevent
    >
      <h2 class="text-h5 mb-4">Личные данные</h2>
      <v-sheet class="d-flex align-start mb-7" color="background">
        <div>
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-img
                v-bind="props"
                :class="{ 'on-hover': isHovering }"
                ref="refImage"
                @click="openImagePicker"
                class="mr-5 manage__img"
                :width="150"
                :src="
                  user.image ||
                  'https://cdn-icons-png.flaticon.com/512/7010/7010068.png'
                "
              />
            </template>
          </v-hover>

          <input
            ref="refInputImage"
            type="file"
            style="display: none"
            @change="handleImageChange"
          />
        </div>

        <v-sheet class="d-flex flex-column w-100" color="background">
          <v-sheet class="d-flex w-100" color="background">
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 pl-0">Фамилия</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="Иванов"
                :error="hasErrors"
                v-model="user.last_name"
                :hide-details="false"
                name="lastName"
                :rules="lastNameRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 pl-0">Имя</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="Иван"
                :error="hasErrors"
                v-model="user.first_name"
                :hide-details="false"
                name="firstName"
                :rules="firstNameRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
            <div class="w-25">
              <v-card-subtitle class="mb-2 pl-0">Отчетство</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="Иванович"
                :error="hasErrors"
                v-model="user.patronymic"
                :hide-details="false"
                name="patronymic"
                :rules="patronymicRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
          </v-sheet>
          <v-sheet class="d-flex w-100" color="background">
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 mt-2 pl-0">Email</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="test@gmail.com"
                :error="hasErrors"
                v-model="user.email"
                :hide-details="false"
                name="email"
                :rules="emailRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 mt-2 pl-0">Телефон</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="+7-(900)-000-00-00"
                v-mask="'+7-(###)-###-##-##'"
                :error="hasErrors"
                :model-value="user.tel"
                @update:modelValue="(v) => (user.tel = v.replace(/\D/g, ''))"
                :hide-details="false"
                name="tel"
                :rules="telRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
          </v-sheet>
          <v-sheet class="d-flex w-100" color="background">
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 mt-2 pl-0">Компания</v-card-subtitle>
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="AVACore"
                :error="hasErrors"
                v-model="user.company"
                :hide-details="false"
                name="company"
                :rules="companyRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
            <div class="w-25 mr-2">
              <v-card-subtitle class="mb-2 mt-2 pl-0"
                >Должность</v-card-subtitle
              >
              <v-text-field
                required
                variant="outlined"
                density="compact"
                placeholder="Frontend-разработчик"
                :error="hasErrors"
                v-model="user.position"
                :hide-details="false"
                name="position"
                :rules="positionRules"
                @change="resetErrors"
              ></v-text-field>
            </div>
          </v-sheet>
        </v-sheet>
      </v-sheet>

      <v-btn
        color="primary"
        location="center center"
        class="text-none text-uppercase mb-4"
        :loading="isLoading"
        :disabled="isSaveDisabled"
        @click="saveProfile"
        >Сохранить</v-btn
      >
    </v-form>
  </v-card>
  <settings-q-r></settings-q-r>
</template>

<script setup>
import SettingsQR from "@/components/SettingsQR.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const user = ref({
  last_name: null,
  first_name: null,
  patronymic: null,
  company: null,
  position: null,
  tel: null,
  email: null,
  image: null,
  qrcode: null,
});

if (route.params.id) {
  user.value = {
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
}

const hasErrors = ref(false);
const errorMessages = ref("");
const refProfileForm = ref();
const isFormValid = ref(true);
const isSaveDisabled = ref(false);
const isLoading = ref(false);
const refImage = ref();
const refInputImage = ref();

const resetErrors = () => {
  hasErrors.value = false;
  errorMessages.value = "";
};

const openImagePicker = () => {
  refInputImage.value.click();
};
const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    user.value.image = e.target.result;
  };

  reader.readAsDataURL(file);
};

const saveProfile = async () => {
  const { valid } = await refProfileForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSaveDisabled.value = true;
    // запрос на сервер
  }
};

const lastNameRules = ref([
  (value) => !!value || "Фамилия обязательное поле",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректную фамлию",
]);

const firstNameRules = ref([
  (value) => !!value || "Имя обязательное поле",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректное имя",
]);

const patronymicRules = ref([
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректное отчетство",
]);

const emailRules = ref([
  (value) => !!value || "Email обязательное поле",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректный email",
]);

const telRules = ref([(value) => !!value || "Телефон обязательное поле"]);

const companyRules = ref([
  (value) => !!value || "Компания обязательное поле",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректную компанию",
]);

const positionRules = ref([
  (value) => !!value || "Должность обязательное поле",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Введите корректную должность",
]);
</script>

<style scoped>
.manage__img {
  border-radius: 4px;
  cursor: pointer;
}

.manage__img {
  opacity: 0.6;
  transition: opacity 0.4s ease-in-out;
}

.manage__img:not(.on-hover) {
  opacity: 1;
}
</style>
