import { defineStore } from "pinia";
import { computed, ref } from "vue";

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

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId);
      if (item) {
        item.selected = selected;
      }
    };

    // computed
    const totalCount = computed(() =>
      cartList.value.reduce((t, c) => t + c.count, 0)
    );
    const totalPrice = computed(() =>
      cartList.value.reduce((t, c) => t + c.count * c.price, 0)
    );

    return {
      cartList,
      addCart,
      delCart,
      totalCount,
      totalPrice,
      singleCheck,
    };
  },
  {
    persist: true,
  }
);
