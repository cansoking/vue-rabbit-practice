import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref(null);

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;

      // 合并购物车
      await mergeCartAPI(
        cartStore.cartList.map((item) => ({
          skuId: item.skuId,
          count: item.count,
          selected: item.selected,
        }))
      );
      // 更新购物车数据
      cartStore.updateNewCartList();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
    };

    return { userInfo, getUserInfo, clearUserInfo };
  },
  {
    persist: true,
  }
);
