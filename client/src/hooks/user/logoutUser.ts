import { AxiosRequestConfig, AxiosResponse, isAxiosError } from "axios";
import { axiosInstance } from "../../axios";

export const useUserLogout = async (
  url: string,
  axiosConfigOptions?: AxiosRequestConfig
): Promise<AxiosResponse | null> => {
  try {
    const response = await axiosInstance.get(url, axiosConfigOptions);
    console.log(response.data);
    console.log("response status is: ", response.status);
    return response;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log("Axios error: ", err);
      return null;
    } else {
      console.log("unexpected error: ", err);
      return null;
    }
  }
};
