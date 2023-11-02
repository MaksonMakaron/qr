import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#4c38b1",
          secondary: "#5CBBF6",
          bg_footer: "#151414",
          service_icon_gray: "#666666",
          service_icon_white: "#fff",
          rating_star: "#f7c633",
          btn_send: "#222222",
        },
      },
    },
  },
});
