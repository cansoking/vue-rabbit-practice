import request from "@/utils/http";

export const getDetails = (id) => {
  return request({
    url: "/goods",
    params: {
      id,
    },
  });
};
