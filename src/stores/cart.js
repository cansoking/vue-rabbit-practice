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

    const delCart = (id) => {
      // 删除购物车逻辑
      const index = cartList.value.findIndex((item) => item.skuId === id);
      if (index !== -1) {
        cartList.value.splice(index, 1);
      }
    };

    return {
      cartList,
      addCart,
      delCart,
    };
  },
  {
    persist: true,
  }
);
