import { useAxios } from "./use-axios";

const useHealthCheck = () => {
  const { get } = useAxios();

  const getHealthCheck = async () => {
    return await get("healthcheck");
  };

  return {
    getHealthCheck,
  };
};

export { useHealthCheck };
