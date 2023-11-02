/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#3E7EE3",
          secondary: "#EAF1FE",
          link: "#2686D0",
          background: "#F3F3F3",
          bg_secondary: "#222831",
        },
      },
    },
  },
});
