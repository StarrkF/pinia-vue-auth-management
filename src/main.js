import { createApp, markRaw  } from "vue";
import "./style.css";
import router from './router'
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.mount("#app");
