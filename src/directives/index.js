import { useIntersectionObserver } from "@vueuse/core";
// 定义懒加载插件

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    // 定义全局指令
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el: 指令绑定的那个元素
        // binding: binding.value 是指令的值
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
