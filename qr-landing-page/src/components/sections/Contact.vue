<template>
  <v-card
    width="1200"
    :elevation="0"
    id="contacts"
    class="d-flex flex-column align-center contacnts mx-auto"
    color="transparent"
  >
    <h3 class="contacnts__heading font-weight-medium mb-2">Contact Us</h3>
    <p class="contacnts__desc mb-15">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </p>
    <div class="d-flex w-100">
      <v-form
        class="pa-5 w-75"
        ref="refMessageForm"
        v-model="isFormValid"
        lazy-validation
        @submit.prevent
      >
        <div class="d-flex">
          <v-text-field
            class="mr-2 mb-2"
            variant="outlined"
            density="compact"
            placeholder="Name*"
            required
            :error="hasErrors"
            v-model="refMessage.name"
            :hide-details="false"
            name="name"
            :rules="nameRules"
            @change="resetErrors"
          ></v-text-field>
          <v-text-field
            class="mb-2"
            variant="outlined"
            density="compact"
            placeholder="Email*"
            required
            :error="hasErrors"
            v-model="refMessage.email"
            :hide-details="false"
            name="email"
            :rules="emailRules"
            @change="resetErrors"
          ></v-text-field>
        </div>
        <v-text-field
          class="mb-2"
          variant="outlined"
          density="compact"
          placeholder="Subject"
          :error="hasErrors"
          v-model="refMessage.subject"
          :hide-details="false"
          name="subject"
          @change="resetErrors"
        ></v-text-field>
        <v-textarea
          class="mb-2"
          counter
          density="compact"
          variant="outlined"
          placeholder="Write Your Message*"
          maxlength="220"
          single-line
          required
          :error="hasErrors"
          v-model="refMessage.message"
          :hide-details="false"
          name="message"
          :rules="messageRules"
          @change="resetErrors"
        ></v-textarea>
        <v-btn
          color="btn_send"
          :loading="isLoading"
          :disabled="isSaveDisabled"
          @click="sendMessage"
          >Send Message</v-btn
        >
      </v-form>
      <v-card
        class="w-25 px-7 py-10 rounded-xl align-self-center"
        color="primary"
      >
        <p>
          <strong>Address:</strong> <br />
          11 West Town<br />
          PBo 12345, United States
        </p>
        <br />
        <p>
          <strong>Phone</strong>
          <br />
          +1 1234 56 789
          <br />
          +1 1234 56 780
        </p>
        <br />
        <p>
          <strong>Email:</strong>
          <br />
          info@example.com
          <br />
          email@example.com
        </p>
      </v-card>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const hasErrors = ref(false);
const errorMessages = ref("");
const refMessageForm = ref();
const isFormValid = ref(true);
const isSaveDisabled = ref(false);
const isLoading = ref(false);

const refMessage = ref({
  name: null,
  email: null,
  subject: null,
  message: null,
});

const resetErrors = () => {
  hasErrors.value = false;
  errorMessages.value = "";
};

const sendMessage = async () => {
  const { valid } = await refMessageForm.value.validate();
  if (valid) {
    isLoading.value = true;
    isSaveDisabled.value = true;
    // запрос на сервер
  }
};

const nameRules = ref([
  (value) => !!value || "Name is required",
  (value) => !/[^a-zA-Zа-яА-Я]/g.test(value) || "Enter the correct name",
]);

const emailRules = ref([
  (value) => !!value || "Email is required.",
  (value) => /.+@.+\..+/.test(value) || "Enter the correct email",
]);

const messageRules = ref([(value) => !!value || "Message is required"]);
</script>

<style scoped>
.contacnts {
  padding: 90px 0px !important;
}

.contacnts__heading {
  font-weight: 400;
  font-size: 34px;
}

.contacnts__desc {
  font-size: 15px;
  color: #6c757d;
}

.contacnts__title {
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

.contacnts__item {
  background: #f3f3f3;
}
</style>
