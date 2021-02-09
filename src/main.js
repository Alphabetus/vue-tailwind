require("dotenv").config();

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";


import VueSocketIOExt from 'vue-socket.io-extended';
import io  from 'socket.io-client';

const socket = io('http://localhost:3001');
const app = createApp(App);

app.use(store);
app.use(router);
app.use(VueSocketIOExt, socket)
global.socket = socket;


app.mount('#app');

console.log("Vue app started on Port :8080");
console.log("Connecting to API base url on " + process.env.VUE_APP_APIBASE);
