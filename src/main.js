import Vue from "vue";
import VueRouter from "vue-router";
import router from "./routes";
import store from "./store";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import { BootstrapVueIcons } from "bootstrap-vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
