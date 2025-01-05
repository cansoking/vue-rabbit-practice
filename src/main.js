import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "@/styles/common.scss";

import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    // el: 指令绑定的那个元素
    // binding: binding.value 是指令的值
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        el.src = binding.value;
      }
    });
  },
});
