import axios from "axios";
import { API_URL, API_METHOD } from "constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

const useAxios = () => {
  const callApi = async (method, url, data, headers = {}) => {
    const requestConfig = {
      method,
      url,
      data,
      headers,
    };

    try {
      const { data } = await axiosInstance.request(requestConfig);
      return data || true;
    } catch (error) {
      console.log(error);
    }
  };

  const get = async (url) => {
    return await callApi(API_METHOD.GET, url);
  };

  const post = async (url, data) => {
    return await callApi(API_METHOD.POST, url, data);
  };

  return {
    get,
    post,
  };
};

export { useAxios };
