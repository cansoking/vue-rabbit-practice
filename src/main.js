import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

// 引入懒加载指令插件并且注册
import { lazyPlugin } from "@/directives";
// 组件注册全局组件插件
import { componentsPlugin } from "@/components/index";

import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const app = createApp(App);

// 注册piniapersist插件
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount("#app");
