// 封装Banner轮播图相关的业务代码
import { getHomeBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";

export function useBanner() {
  const bannerList = ref([]);

  const getBannerList = async () => {
    const res = await getHomeBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };

  onMounted(() => {
    getBannerList();
  });

  return {
    bannerList,
  };
}
