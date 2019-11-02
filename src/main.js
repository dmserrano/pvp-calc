import Vue from "vue";
import vSelect from "vue-select";
import App from "./App.vue";

// 3rd party vendors
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/scss/bootstrap.scss";
import "vue-select/dist/vue-select.css";

Vue.config.productionTip = false;

// Register components
Vue.component("v-select", vSelect);

new Vue({
    render: h => h(App),
}).$mount("#app");
