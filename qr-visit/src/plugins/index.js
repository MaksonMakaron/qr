import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import router from "../router";
import VueTheMask from "vue-the-mask";

export function registerPlugins(app) {
  loadFonts();
  app.use(vuetify).use(router).use(VueTheMask);
}
