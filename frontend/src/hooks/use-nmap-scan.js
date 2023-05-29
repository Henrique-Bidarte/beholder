import { API_ROUTES } from "constants";
import { useAxios } from "./use-axios";

const useNmapScan = () => {
  const { post } = useAxios();

  const postNmapBaseScan = async (payload) => {
    return await post(API_ROUTES.NMAP_BASE_SCAN, payload);
  };

  const postNmapPing = async (payload) => {
    return await post(API_ROUTES.NMAP_PING, payload);
  };

  const postNmapAgressive = async (payload) => {
    return await post(API_ROUTES.NMAP_AGRESSIVE, payload);
  };

  return {
    postNmapBaseScan,
    postNmapPing,
    postNmapAgressive,
  };
};

export { useNmapScan };
