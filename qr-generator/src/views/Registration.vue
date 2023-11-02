<template>
  <div class="reg__block">
    <v-card class="pa-8 justify-center" width="500" elevation="1">
      <v-card-title
        ><span class="text-h5 mb-6 justify-center font-weight-bold text-text"
          >Регистрация
        </span></v-card-title
      >
      <v-card-text>
        <v-form
          ref="refLoginForm"
          v-model="isFormValid"
          lazy-validation
          @submit.prevent
        >
          <v-card-subtitle class="mb-2 mt-2 pl-0"
            >Адрес электронной почты</v-card-subtitle
          >
          <v-text-field
            required
            variant="outlined"
            density="compact"
            placeholder="testemail@gmail.com"
            :error="hasErrors"
            v-model="dataProfile.email"
            :hide-details="false"
            name="email"
            :rules="emailRules"
            @change="resetErrors"
          ></v-text-field>
          <v-card-subtitle class="mb-2 mt-2 pl-0">Пароль</v-card-subtitle>
          <v-text-field
            required
            variant="outlined"
            density="compact"
            :hide-details="false"
            :error="hasErrors"
            :rules="passwordRules"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            v-model="dataProfile.password"
            @change="resetErrors"
          ></v-text-field>
          <v-card-subtitle class="mb-2 mt-2 pl-0"
            >Повторите пароль</v-card-subtitle
          >
          <v-text-field
            required
            variant="outlined"
            density="compact"
            :hide-details="false"
            :error="hasErrors"
            :rules="passwordRules"
            :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
            name="passwordRepeat"
            v-model="dataProfile.passwordRepeat"
            @change="resetErrors"
          ></v-text-field>

          <v-checkbox
            required
            v-model="isAccept"
            :rules="acceptRules"
            :error="hasErrors"
            class="mb-3"
          >
            <template v-slot:label>
              <v-sheet
                >Я принимаю
                <router-link
                  to="../policy"
                  variant="text"
                  class="text-primary text-decoration-none"
                >
                  Политику конфиденциальности</router-link
                >
              </v-sheet>
            </template>
          </v-checkbox>

          <v-sheet class="d-flex justify-end mt-0 mb-5">
            <v-btn
              color="primary"
              class="text-none text-uppercase"
              :loading="isLoading"
              :disabled="isSignInDisabled"
              @click="signin"
              >Зарегистрироваться</v-btn
            >
          </v-sheet>
          <v-card-subtitle class="mt-3 pl-0"
            >Уже зарегистрированы?
            <router-link
              to="signin"
              variant="text"
              class="text-primary text-decoration-none font-weight-bold"
              >Войти</router-link
            ></v-card-subtitle
          >
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const hasErrors = ref(false);
const errorMessages = ref("");
const refLoginForm = ref();
const isFormValid = ref(true);
const showPassword = ref(false);
const isSignInDisabled = ref(false);
const isLoading = ref(false);
const isAccept = ref(false);

const dataProfile = ref({
  password: null,
  passwordRepeat: null,
  login: null,
});

const resetErrors = () => {
  hasErrors.value = false;
  errorMessages.value = "";
};

const emailRules = ref([
  (value) => !!value || "E-mail обязательное поле",
  (value) => /.+@.+\..+/.test(value) || "Введите корректный E-mail",
]);

const passwordRules = ref([
  (value) => !!value || "Пароль обязательное поле",
  (value) =>
    (value && value.length >= 8) || "Минимальная длина пароля 8 символов",
  (value) =>
    (value && value === dataProfile.value.password) || "Пароли не совпадают",
]);

const acceptRules = ref([
  (value) => !!value || "Необходимо принять Политику конфиденциальности",
]);

const signin = async () => {
  const { valid } = await refLoginForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSignInDisabled.value = true;
    // запрос на сервер
  }
};
</script>

<style scoped>
.reg__block {
  margin: 50px auto;
  padding: 30px 27px;
  width: 500px;
}
</style>
