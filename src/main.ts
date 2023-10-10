import { createApp } from "vue";
import App from "./App.vue";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import "./styles/globals.css";

const app = createApp(App);
app.use(autoAnimatePlugin);
app.use(VueQueryPlugin);
app.mount("#app");
