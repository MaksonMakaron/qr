<template>
  <div class="auth__block">
    <v-card class="pa-8 justify-center" width="500" elevation="1">
      <v-card-title
        ><span class="text-h5 mb-6 justify-center font-weight-bold text-text"
          >Добро пожаловать!
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

          <v-sheet class="d-flex justify-end mt-2 mb-5">
            <v-btn
              color="primary"
              class="text-none text-uppercase"
              :loading="isLoading"
              :disabled="isSignInDisabled"
              @click="signin"
              >Войти</v-btn
            >
          </v-sheet>
          <v-card-subtitle class="mt-3 pl-0"
            >Еще не зарегистрированы?
            <router-link
              to="signup"
              variant="text"
              class="text-primary text-decoration-none font-weight-bold"
              >Регистрация</router-link
            ></v-card-subtitle
          >
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const hasErrors = ref(false);
const errorMessages = ref("");
const refLoginForm = ref();
const isFormValid = ref(true);
const showPassword = ref(false);
const isSignInDisabled = ref(false);
const isLoading = ref(false);

const dataProfile = ref({
  password: null,
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
]);

const signin = async () => {
  const { valid } = await refLoginForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSignInDisabled.value = true;
    // запрос на сервер
    router.push("/profile");
  }
};
</script>

<style scoped>
.auth__block {
  margin: 100px auto;
  padding: 30px 27px;
  width: 500px;
}
</style>
