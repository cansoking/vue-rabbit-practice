import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

// 引入懒加载指令插件并且注册
import { lazyPlugin } from "@/directives";
// 组件注册全局组件插件
import { componentsPlugin } from "@/components/index";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(lazyPlugin);
app.use(componentsPlugin);
app.mount("#app");
