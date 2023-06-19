import { API_ROUTES } from "constants";
import { useAxios } from "./use-axios";

const useHealthCheck = () => {
  const { get } = useAxios();

  const getHealthCheck = async () => {
    return await get(API_ROUTES.HEALTHCHECK);
  };

  return {
    getHealthCheck,
  };
};

export { useHealthCheck };
