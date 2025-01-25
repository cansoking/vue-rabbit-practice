import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // state
    const cartList = ref([]);
    // actions
    const addCart = (goods) => {
      // 添加购物车逻辑
      const item = cartList.value.find((item) => item.skuId === goods.skuId);
      if (item) {
        item.count += goods.count;
      } else {
        cartList.value.push(goods);
      }
    };
    return {
      cartList,
      addCart,
    };
  },
  {
    persist: true,
  }
);
