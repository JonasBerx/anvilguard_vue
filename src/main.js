import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  theme: {
    themes: {
      dark: {
        error: "#d32f2f",
        warning: "#f57c00",
        info: "#0288d1",
        success: "#388e3c",
      },
    },
  },
}).$mount("#app");
