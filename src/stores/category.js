import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
  // state
  const categoryList = ref([]);

  // action
  const getCategory = async () => {
    const { result } = await getCategoryAPI();
    categoryList.value = result;
  };

  return {
    categoryList,
    getCategory,
  };
});
