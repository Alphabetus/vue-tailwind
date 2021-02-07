require("dotenv").config();

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

/*createApp(App)
  .use(store)
  .use(router)
  .mount("#app");*/


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

global.app = app;

console.log("Vue app started on Port :8080");
console.log("Connecting to API base url on " + process.env.VUE_APP_APIBASE);