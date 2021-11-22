import { createApp } from "vue";
// { createApp }
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart);
// Vue.config.productionTip = false;

/* eslint-disable no-new */
// new Vue({
//   el: "#app",
//   components: { App },
//   template: "<App/>",
// });

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
