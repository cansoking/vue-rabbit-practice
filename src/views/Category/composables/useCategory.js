// 封装分类数据业务相关代码
import { ref, onMounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";
import { getTopCategoryAPI } from "@/apis/category";
import { useRoute } from "vue-router";

export function useCategory() {
  const categoryData = ref({});
  const route = useRoute();

  const getCategory = async (id) => {
    const res = await getTopCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => {
    getCategory(route.params.id);
  });

  // 随路由变化刷新内容
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });

  return {
    categoryData,
  };
}
