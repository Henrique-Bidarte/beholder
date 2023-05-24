import { useAxios } from "./use-axios";

const useNmapScan = () => {
  const { post } = useAxios();

  const postNmapBaseScan = async (payload) => {
    return await post(`/scan`, payload);
  };

  return {
    postNmapBaseScan,
  };
};

export { useNmapScan };
