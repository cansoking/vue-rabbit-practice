import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref(null);

    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;

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
