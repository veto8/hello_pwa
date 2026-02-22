import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@picocss/pico/css/pico.css";
import Log2textarea from "log2textarea/log2textarea.js";
import "./css/app.css";
import "./js/app.js";
const log = new Log2textarea("logger");
const app = createApp(App);
app.use(router);
app.provide("log", log);
app.mount("#app");
//app.provide(log);
//app.config.globalProperties.$log = log;
