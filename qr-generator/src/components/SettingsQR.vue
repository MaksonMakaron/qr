<template>
  <v-form>
    <div class="d-flex align-center mb-4">
      <h2 class="text-h5 mb-4">QR</h2>
      <v-btn
        color="primary"
        class="text-none text-uppercase ml-5"
        :loading="isLoading"
        :disabled="isSaveDisabled"
        @click="saveChanges"
        >Сохранить</v-btn
      >
    </div>

    <v-card class="d-flex align-start mb-4" color="background" :elevation="0">
      <v-card color="background" :elevation="0">
        <v-tabs v-model="refTab" bg-color="primary">
          <v-tab value="main">Основные настройки</v-tab>
          <v-tab value="dots">Настройки точек</v-tab>
          <v-tab value="square">Настройки квадратов</v-tab>
          <v-tab value="cornerDots">Настройки угловых точек</v-tab>
          <v-tab value="background">Настройки фона </v-tab>
        </v-tabs>

        <v-card-text>
          <v-window v-model="refTab">
            <v-window-item value="main">
              <v-sheet color="background" :elevation="0" class="d-flex mr-5">
                <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2">Ширина</v-card-subtitle>
                  <v-slider
                    class="ml-5"
                    @update:modelValue="changeMainSettings"
                    :min="100"
                    :max="300"
                    :step="10"
                    v-model="refSettingsQR.width"
                    :thumb-label="true"
                  ></v-slider>
                </div>
                <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2">Высота</v-card-subtitle>
                  <v-slider
                    class="ml-5"
                    @update:modelValue="changeMainSettings"
                    :min="100"
                    :max="300"
                    :step="10"
                    v-model="refSettingsQR.height"
                    :thumb-label="true"
                  ></v-slider>
                </div>
                <!-- <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2"
                    >Отступ от края</v-card-subtitle
                  >
                  <v-slider
                    class="ml-5"
                    @update:modelValue="changeMainSettings"
                    :min="0"
                    :max="40"
                    :step="15"
                    v-model="refSettingsQR.margin"
                    :thumb-label="true"
                  ></v-slider>
                </div> -->
              </v-sheet>
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex align-center mr-5"
              >
                <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2"
                    >Изображение</v-card-subtitle
                  >
                  <v-file-input
                    accept="image/png, image/jpeg, image/bmp"
                    class="pl-4"
                    @change="handleImageChange"
                    @click:clear="clearImageChange"
                    density="compact"
                    label="Выберите фото"
                    variant="solo-filled"
                    prepend-icon="mdi-camera"
                  ></v-file-input>
                </div>
                <div class="w-100">
                  <v-switch
                    v-model="refSettingsQR.imageOptions.hideBackgroundDots"
                    @update:model-value="changeStyleImage"
                    hide-details
                    inset
                    label="Скрыть фоновые точки"
                  ></v-switch>
                </div>
              </v-sheet>
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex align-center mr-5"
              >
                <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2"
                    >Размер изображения</v-card-subtitle
                  >
                  <v-slider
                    class="ml-5"
                    @update:modelValue="changeStyleImage"
                    :min="0.1"
                    :max="1"
                    :step="0.1"
                    v-model="refSettingsQR.imageOptions.imageSize"
                    :thumb-label="true"
                  ></v-slider>
                </div>
                <div class="mr-6 w-100">
                  <v-card-subtitle class="mb-2 mt-2"
                    >Отступы изображения</v-card-subtitle
                  >
                  <v-slider
                    class="ml-5"
                    @update:modelValue="changeStyleImage"
                    :min="0"
                    :max="15"
                    :step="1"
                    v-model="refSettingsQR.imageOptions.margin"
                    :thumb-label="true"
                  ></v-slider>
                </div>
              </v-sheet>
            </v-window-item>

            <v-window-item value="dots">
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex flex-column w-100"
              >
                <div class="">
                  <v-card-subtitle class="mb-2 mt-2">Тип точек</v-card-subtitle>
                  <v-combobox
                    density="compact"
                    color="primary"
                    variant="outlined"
                    v-model="refSettingsQR.dotsOptions.type"
                    :items="typesDots"
                    item-title="name"
                    item-text="name"
                    item-value="value"
                    @update:model-value="changeStyleDots"
                  ></v-combobox>
                </div>
                <div class="">
                  <v-card-subtitle class="mb-2 mt-2">Тип цвета</v-card-subtitle>
                  <v-radio-group
                    v-model="refDotsIsGradient"
                    @update:model-value="changeStyleDots"
                    inline
                  >
                    <v-radio label="Один цвет" :value="false"></v-radio>
                    <v-radio label="Градиент" :value="true"></v-radio>
                  </v-radio-group>
                  <div v-if="refDotsIsGradient">
                    <v-card-subtitle class="mb-2 mt-2"
                      >Тип градиента</v-card-subtitle
                    >
                    <v-radio-group
                      v-model="refSettingsQR.dotsOptions.gradient.type"
                      @update:model-value="changeStyleDots"
                      inline
                    >
                      <v-radio label="Линейный" value="linear"></v-radio>
                      <v-radio label="Радиальный" value="radial"></v-radio>
                    </v-radio-group>
                    <v-card-subtitle class="mb-2 mt-2"
                      >Положение</v-card-subtitle
                    >
                    <v-slider
                      class="ml-5"
                      @update:modelValue="changeStyleDots"
                      :min="0"
                      :max="180"
                      :step="1"
                      v-model="refSettingsQR.dotsOptions.gradient.rotation"
                      :thumb-label="true"
                    ></v-slider>
                  </div>
                  <v-color-picker
                    v-if="!refDotsIsGradient"
                    hide-inputs
                    @update:model-value="changeStyleDots"
                    v-model="refSettingsQR.dotsOptions.color"
                  ></v-color-picker>
                  <div v-else-if="refDotsIsGradient" class="d-flex">
                    <v-color-picker
                      class="mr-3"
                      hide-inputs
                      @update:model-value="changeStyleDots"
                      v-model="
                        refSettingsQR.dotsOptions.gradient.colorStops[0].color
                      "
                    ></v-color-picker>
                    <v-color-picker
                      hide-inputs
                      @update:model-value="changeStyleDots"
                      v-model="
                        refSettingsQR.dotsOptions.gradient.colorStops[1].color
                      "
                    ></v-color-picker>
                  </div>
                </div>
              </v-sheet>
            </v-window-item>

            <v-window-item value="square">
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex flex-column"
              >
                <div class="">
                  <v-card-subtitle class="mb-2 mt-2"
                    >Тип квадратов</v-card-subtitle
                  >
                  <v-combobox
                    density="compact"
                    color="primary"
                    variant="outlined"
                    v-model="refSettingsQR.cornersSquareOptions.type"
                    :items="typesSquare"
                    item-title="name"
                    item-text="name"
                    item-value="value"
                    @update:model-value="changeStyleCornersSquare"
                  ></v-combobox>
                </div>
                <div class="w-100">
                  <v-card-subtitle class="mb-2 mt-2">Тип цвета</v-card-subtitle>
                  <v-radio-group
                    v-model="refCornersSquareIsGradient"
                    @update:model-value="changeStyleCornersSquare"
                    inline
                  >
                    <v-radio label="Один цвет" :value="false"></v-radio>
                    <v-radio label="Градиент" :value="true"></v-radio>
                  </v-radio-group>
                  <div v-if="refCornersSquareIsGradient">
                    <v-card-subtitle class="mb-2 mt-2"
                      >Тип градиента</v-card-subtitle
                    >
                    <v-radio-group
                      v-model="refSettingsQR.cornersSquareOptions.gradient.type"
                      @update:model-value="changeStyleCornersSquare"
                      inline
                    >
                      <v-radio label="Линейный" value="linear"></v-radio>
                      <v-radio label="Радиальный" value="radial"></v-radio>
                    </v-radio-group>
                    <v-card-subtitle class="mb-2 mt-2"
                      >Положение</v-card-subtitle
                    >
                    <v-slider
                      class="ml-5"
                      @update:modelValue="changeStyleCornersSquare"
                      :min="0"
                      :max="180"
                      :step="1"
                      v-model="
                        refSettingsQR.cornersSquareOptions.gradient.rotation
                      "
                      :thumb-label="true"
                    ></v-slider>
                  </div>
                  <v-color-picker
                    v-if="!refCornersSquareIsGradient"
                    hide-inputs
                    @update:model-value="changeStyleCornersSquare"
                    v-model="refSettingsQR.cornersSquareOptions.color"
                  ></v-color-picker>
                  <div v-else-if="refCornersSquareIsGradient" class="d-flex">
                    <v-color-picker
                      class="mr-3"
                      hide-inputs
                      @update:model-value="changeStyleCornersSquare"
                      v-model="
                        refSettingsQR.cornersSquareOptions.gradient
                          .colorStops[0].color
                      "
                    ></v-color-picker>
                    <v-color-picker
                      hide-inputs
                      @update:model-value="changeStyleCornersSquare"
                      v-model="
                        refSettingsQR.cornersSquareOptions.gradient
                          .colorStops[1].color
                      "
                    ></v-color-picker>
                  </div>
                </div>
              </v-sheet>
            </v-window-item>

            <v-window-item value="cornerDots">
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex flex-column"
              >
                <div class="w-100">
                  <v-card-subtitle class="mb-2 mt-2">Тип точек</v-card-subtitle>
                  <v-combobox
                    density="compact"
                    color="primary"
                    variant="outlined"
                    v-model="refSettingsQR.cornersDotOptions.type"
                    :items="typesСornersDot"
                    item-title="name"
                    item-text="name"
                    item-value="value"
                    @update:model-value="changeStyleCornersDot"
                  ></v-combobox>
                </div>
                <div class="w-100">
                  <v-card-subtitle class="mb-2 mt-2">Тип цвета</v-card-subtitle>
                  <v-radio-group
                    v-model="refСornersDotIsGradient"
                    @update:model-value="changeStyleCornersDot"
                    inline
                  >
                    <v-radio label="Один цвет" :value="false"></v-radio>
                    <v-radio label="Градиент" :value="true"></v-radio>
                  </v-radio-group>
                  <div v-if="refСornersDotIsGradient">
                    <v-card-subtitle class="mb-2 mt-2"
                      >Тип градиента</v-card-subtitle
                    >
                    <v-radio-group
                      v-model="refSettingsQR.cornersDotOptions.gradient.type"
                      @update:model-value="changeStyleCornersDot"
                      inline
                    >
                      <v-radio label="Линейный" value="linear"></v-radio>
                      <v-radio label="Радиальный" value="radial"></v-radio>
                    </v-radio-group>
                    <v-card-subtitle class="mb-2 mt-2"
                      >Положение</v-card-subtitle
                    >
                    <v-slider
                      class="ml-5"
                      @update:modelValue="changeStyleCornersDot"
                      :min="0"
                      :max="180"
                      :step="1"
                      v-model="
                        refSettingsQR.cornersDotOptions.gradient.rotation
                      "
                      :thumb-label="true"
                    ></v-slider>
                  </div>
                  <v-color-picker
                    v-if="!refСornersDotIsGradient"
                    hide-inputs
                    @update:model-value="changeStyleCornersDot"
                    v-model="refSettingsQR.cornersDotOptions.color"
                  ></v-color-picker>
                  <div v-else-if="refСornersDotIsGradient" class="d-flex">
                    <v-color-picker
                      class="mr-3"
                      hide-inputs
                      @update:model-value="changeStyleCornersDot"
                      v-model="
                        refSettingsQR.cornersDotOptions.gradient.colorStops[0]
                          .color
                      "
                    ></v-color-picker>
                    <v-color-picker
                      hide-inputs
                      @update:model-value="changeStyleCornersDot"
                      v-model="
                        refSettingsQR.cornersDotOptions.gradient.colorStops[1]
                          .color
                      "
                    ></v-color-picker>
                  </div>
                </div> </v-sheet
            ></v-window-item>

            <v-window-item value="background">
              <v-sheet
                color="background"
                :elevation="0"
                class="d-flex flex-column"
              >
                <div class="mr-3 w-100">
                  <v-card-subtitle class="mb-2 mt-2">Тип цвета</v-card-subtitle>
                  <v-radio-group
                    v-model="refBackgroundIsGradient"
                    @update:model-value="changeStyleBackground"
                    inline
                  >
                    <v-radio label="Один цвет" :value="false"></v-radio>
                    <v-radio label="Градиент" :value="true"></v-radio>
                  </v-radio-group>
                  <div v-if="refBackgroundIsGradient">
                    <v-card-subtitle class="mb-2 mt-2"
                      >Тип градиента</v-card-subtitle
                    >
                    <v-radio-group
                      v-model="refSettingsQR.backgroundOptions.gradient.type"
                      @update:model-value="changeStyleBackground"
                      inline
                    >
                      <v-radio label="Линейный" value="linear"></v-radio>
                      <v-radio label="Радиальный" value="radial"></v-radio>
                    </v-radio-group>
                    <v-card-subtitle class="mb-2 mt-2"
                      >Положение</v-card-subtitle
                    >
                    <v-slider
                      class="ml-5"
                      @update:modelValue="changeStyleBackground"
                      :min="0"
                      :max="180"
                      :step="1"
                      v-model="
                        refSettingsQR.backgroundOptions.gradient.rotation
                      "
                      :thumb-label="true"
                    ></v-slider>
                  </div>
                  <v-color-picker
                    v-if="!refBackgroundIsGradient"
                    hide-inputs
                    @update:model-value="changeStyleBackground"
                    v-model="refSettingsQR.backgroundOptions.color"
                  ></v-color-picker>
                  <div v-else-if="refBackgroundIsGradient" class="d-flex">
                    <v-color-picker
                      class="mr-3"
                      hide-inputs
                      @update:model-value="changeStyleBackground"
                      v-model="
                        refSettingsQR.backgroundOptions.gradient.colorStops[0]
                          .color
                      "
                    ></v-color-picker>
                    <v-color-picker
                      hide-inputs
                      @update:model-value="changeStyleBackground"
                      v-model="
                        refSettingsQR.backgroundOptions.gradient.colorStops[1]
                          .color
                      "
                    ></v-color-picker>
                  </div>
                </div>
              </v-sheet>
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
      <v-sheet
        color="background"
        :elevation="0"
        class="d-flex flex-column align-center mr-5 qr-code-container"
      >
        <v-card color="white" :elevation="0" class="pa-0">
          <div class="rounded-lg" ref="refQRCode" />
        </v-card>
        <div class="d-flex mt-2">
          <v-btn
            color="primary"
            class="text-none text-uppercase mr-2"
            @click="downloadQR"
            >Скачать
          </v-btn>
          <v-combobox
            density="compact"
            color="primary"
            variant="outlined"
            v-model="refExtension"
            :items="extensionsDownload"
          ></v-combobox>
        </div>
      </v-sheet>
    </v-card>
  </v-form>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import QRCodeStyling from "qr-code-styling";

const route = useRoute();
const refQRCode = ref(null);
const refTab = ref(null);
const isSaveDisabled = ref(false);
const isLoading = ref(false);
const refExtension = ref("SVG");
const extensionsDownload = ["SVG", "PNG", "JPEG"];

const typesDots = [
  { name: "Закругленные", value: "rounded" },
  { name: "Точки", value: "dots" },
  { name: "Стильные", value: "classy" },
  { name: "Стильные закругленные", value: "classy-rounded" },
  { name: "Квадраты", value: "square" },
  { name: "Экстра закругленные", value: "extra-rounded" },
];
const typesSquare = [
  { name: "Круглые", value: "dot" },
  { name: "Квадраты", value: "square" },
  { name: "Закругленные", value: "extra-rounded" },
];
const typesСornersDot = [
  { name: "Точки", value: "dot" },
  { name: "Квадраты", value: "square" },
];

const refSettingsQR = ref({
  type: "canvas",
  data: "https://www.facebook.com/",
  width: 300,
  height: 300,
  margin: 0,
  image: null,
  dotsOptions: {
    color: "#000",
    type: { name: "Закругленные", value: "rounded" },
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#fff" },
        { offset: 1, color: "#000" },
      ],
    },
  },
  cornersSquareOptions: {
    color: "#000",
    type: { name: "Круглые", value: "dot" },
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#fff" },
        { offset: 1, color: "#000" },
      ],
    },
  },
  cornersDotOptions: {
    color: "#000",
    type: { name: "Точки", value: "dot" },
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#fff" },
        { offset: 1, color: "#000" },
      ],
    },
  },
  backgroundOptions: {
    color: "#fff",
    gradient: {
      type: "linear",
      rotation: 0,
      colorStops: [
        { offset: 0, color: "#fff" },
        { offset: 1, color: "#000" },
      ],
    },
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 8,
    hideBackgroundDots: true,
    imageSize: 1.0,
  },
});

const refDotsIsGradient = ref(false);
const refCornersSquareIsGradient = ref(false);
const refСornersDotIsGradient = ref(false);
const refBackgroundIsGradient = ref(false);

const qrCode = new QRCodeStyling({
  width: refSettingsQR.value.width,
  height: refSettingsQR.value.height,
  margin: refSettingsQR.value.margin,
  type: "svg",
  data: "https://www.facebook.com/",
  image: refSettingsQR.value.image,
  dotsOptions: {
    color: refSettingsQR.value.dotsOptions.color,
    type: refSettingsQR.value.dotsOptions.type.value,
  },
  cornersSquareOptions: {
    color: refSettingsQR.value.cornersSquareOptions.color,
    type: refSettingsQR.value.cornersSquareOptions.type.value,
  },
  cornersDotOptions: {
    color: refSettingsQR.value.cornersDotOptions.color,
    type: refSettingsQR.value.cornersDotOptions.type.value,
  },
  backgroundOptions: {
    color: refSettingsQR.value.backgroundOptions.color,
  },
  imageOptions: {
    crossOrigin: refSettingsQR.value.imageOptions.crossOrigin,
    margin: refSettingsQR.value.imageOptions.margin,
    hideBackgroundDots: refSettingsQR.value.imageOptions.hideBackgroundDots,
    imageSize: refSettingsQR.value.imageOptions.imageSize,
  },
});

onMounted(() => {
  qrCode.append(refQRCode.value);
});

const changeMainSettings = () => {
  qrCode.update({
    width: refSettingsQR.value.width,
    height: refSettingsQR.value.height,
    image: refSettingsQR.value.image,
    margin: refSettingsQR.value.margin,
  });
};

const changeStyleDots = () => {
  if (refDotsIsGradient.value) {
    qrCode.update({
      dotsOptions: {
        color: refSettingsQR.value.dotsOptions.color,
        type: refSettingsQR.value.dotsOptions.type.value,
        gradient: {
          type: refSettingsQR.value.dotsOptions.gradient.type,
          rotation: refSettingsQR.value.dotsOptions.gradient.rotation,
          colorStops: [
            {
              offset: 0,
              color:
                refSettingsQR.value.dotsOptions.gradient.colorStops[0].color,
            },
            {
              offset: 1,
              color:
                refSettingsQR.value.dotsOptions.gradient.colorStops[1].color,
            },
          ],
        },
      },
    });
  } else if (!refDotsIsGradient.value) {
    qrCode.update({
      dotsOptions: {
        color: refSettingsQR.value.dotsOptions.color,
        type: refSettingsQR.value.dotsOptions.type.value,
        gradient: null,
      },
    });
  }
};

const changeStyleImage = () => {
  qrCode.update({
    imageOptions: {
      crossOrigin: refSettingsQR.value.imageOptions.crossOrigin,
      hideBackgroundDots: refSettingsQR.value.imageOptions.hideBackgroundDots,
      imageSize: refSettingsQR.value.imageOptions.imageSize,
      margin: refSettingsQR.value.imageOptions.margin,
    },
  });
};

const changeStyleCornersSquare = () => {
  if (refCornersSquareIsGradient.value) {
    qrCode.update({
      cornersSquareOptions: {
        color: null,
        type: refSettingsQR.value.cornersSquareOptions.type.value,
        gradient: {
          type: refSettingsQR.value.cornersSquareOptions.gradient.type,
          rotation: refSettingsQR.value.cornersSquareOptions.gradient.rotation,
          colorStops: [
            {
              offset: 0,
              color:
                refSettingsQR.value.cornersSquareOptions.gradient.colorStops[0]
                  .color,
            },
            {
              offset: 1,
              color:
                refSettingsQR.value.cornersSquareOptions.gradient.colorStops[1]
                  .color,
            },
          ],
        },
      },
    });
  } else if (!refCornersSquareIsGradient.value) {
    qrCode.update({
      cornersSquareOptions: {
        color: refSettingsQR.value.cornersSquareOptions.color,
        type: refSettingsQR.value.cornersSquareOptions.type.value,
        gradient: null,
      },
    });
  }
};

const changeStyleCornersDot = () => {
  if (refСornersDotIsGradient.value) {
    qrCode.update({
      cornersDotOptions: {
        color: null,
        type: refSettingsQR.value.cornersDotOptions.type.value,
        gradient: {
          type: refSettingsQR.value.cornersDotOptions.gradient.type,
          rotation: refSettingsQR.value.cornersDotOptions.gradient.rotation,
          colorStops: [
            {
              offset: 0,
              color:
                refSettingsQR.value.cornersDotOptions.gradient.colorStops[0]
                  .color,
            },
            {
              offset: 1,
              color:
                refSettingsQR.value.cornersDotOptions.gradient.colorStops[1]
                  .color,
            },
          ],
        },
      },
    });
  } else if (!refСornersDotIsGradient.value) {
    qrCode.update({
      cornersDotOptions: {
        color: refSettingsQR.value.cornersDotOptions.color,
        type: refSettingsQR.value.cornersDotOptions.type.value,
        gradient: null,
      },
    });
  }
};

const changeStyleBackground = () => {
  if (refBackgroundIsGradient.value) {
    qrCode.update({
      backgroundOptions: {
        color: null,
        gradient: {
          colorStops: [
            {
              offset: 0,
              color:
                refSettingsQR.value.backgroundOptions.gradient.colorStops[0]
                  .color,
            },
            {
              offset: 1,
              color:
                refSettingsQR.value.backgroundOptions.gradient.colorStops[1]
                  .color,
            },
          ],
        },
      },
    });
  } else if (!refBackgroundIsGradient.value) {
    qrCode.update({
      backgroundOptions: {
        color: refSettingsQR.value.backgroundOptions.color,
        gradient: null,
      },
    });
  }
};

const handleImageChange = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    refSettingsQR.value.image = e.target.result;
    qrCode.update({
      image: e.target.result,
    });
  };
  reader.readAsDataURL(file);
};

const clearImageChange = () => {
  refSettingsQR.value.image = "";
  changeMainSettings();
};

const saveChanges = async () => {
  isLoading.value = true;
  isSaveDisabled.value = true;
  // запрос на сервер
};

const downloadQR = async () => {
  qrCode.download({ name: "qr", extension: refExtension.value.toLowerCase() });
};
</script>

<style>
.qr-code-container {
  width: 400px;
  position: sticky !important;
  top: 0;
}
</style>
