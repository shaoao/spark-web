import { createApp } from "vue";
import ElementPlus from 'element-plus'
// import NaiveUI from 'naive-ui'
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "@icon-park/vue-next/styles/index.css";
import "highlight.js/styles/dark.css";
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(router).use(ElementPlus).mount("#app");

// app.use(router).use(NaiveUI).mount("#app");
