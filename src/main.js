import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import { Vuelidate } from "vuelidate";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(Vuelidate);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
